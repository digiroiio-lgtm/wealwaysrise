#!/usr/bin/env node
/* Admin paneli özel notlarını şifreler / çözer.
   Şifreleme: PBKDF2-SHA256 (250.000 tur) + AES-256-GCM. Anahtar, panel giriş şifresinden türetilir.
   Kullanım (şifre PW ortam değişkeninden okunur; depoya asla yazılmaz):
     PW='…' node tools/private.js encrypt notlar.json   > admin/private.js
     PW='…' node tools/private.js decrypt admin/private.js > notlar.json
   notlar.json düz metindir — depoya EKLEMEYİN. */
const crypto = require('crypto'), fs = require('fs');
const [mode, file] = process.argv.slice(2), pw = process.env.PW;
if (!pw || !['encrypt','decrypt'].includes(mode) || !file) { console.error('Kullanım: PW=… node tools/private.js encrypt|decrypt <dosya>'); process.exit(1); }
const ITER = 250000, key = salt => crypto.pbkdf2Sync(pw, salt, ITER, 32, 'sha256');
if (mode === 'encrypt') {
  const data = JSON.stringify(JSON.parse(fs.readFileSync(file, 'utf8')));
  const salt = crypto.randomBytes(16), iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', key(salt), iv);
  const ct = Buffer.concat([c.update(data, 'utf8'), c.final(), c.getAuthTag()]);
  process.stdout.write(`/* Şifreli özel notlar — sadece panel şifresiyle açılır. Düzenlemek için: tools/private.js */\nwindow.WR_PRIV = ${JSON.stringify({ v:1, iter:ITER, salt:salt.toString('base64'), iv:iv.toString('base64'), ct:ct.toString('base64') })};\n`);
} else {
  const blob = JSON.parse(fs.readFileSync(file, 'utf8').match(/WR_PRIV = (\{.*\});/)[1]);
  const ct = Buffer.from(blob.ct, 'base64'), d = crypto.createDecipheriv('aes-256-gcm', key(Buffer.from(blob.salt, 'base64')), Buffer.from(blob.iv, 'base64'));
  d.setAuthTag(ct.subarray(ct.length - 16));
  process.stdout.write(JSON.stringify(JSON.parse(Buffer.concat([d.update(ct.subarray(0, ct.length - 16)), d.final()]).toString('utf8')), null, 2) + '\n');
}
