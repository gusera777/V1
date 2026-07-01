// Jalankan sekali: node generate-vapid.js
// Hasilnya di-paste ke file .env (VAPID_PUBLIC_KEY & VAPID_PRIVATE_KEY).
const webpush = require('web-push');

const keys = webpush.generateVAPIDKeys();
console.log('\n=== VAPID KEYS — simpan baik-baik, JANGAN dibagikan private key-nya ===\n');
console.log('VAPID_PUBLIC_KEY=' + keys.publicKey);
console.log('VAPID_PRIVATE_KEY=' + keys.privateKey);
console.log('\nPUBLIC key juga perlu ditempel di script.js (const VAPID_PUBLIC_KEY) di frontend.\n');
