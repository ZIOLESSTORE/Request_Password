// config.js
// Ganti nilai di bawah sesuai kebutuhan.
// NOTE: jangan commit TELEGRAM_BOT_TOKEN di repo publik.
// Jika ingin aman, gunakan serverless endpoint dan set USE_SERVERLESS_ENDPOINT = true

window.APP_CONFIG = {
  // Password yang dianggap valid untuk verifikasi
  PASSWORD: "KHUSUS MEMBER", // <-- ganti ini

  // Opsi A: langsung dari client ke Telegram (TIDAK AMAN utk repo publik)
  TELEGRAM_BOT_TOKEN: "8445439670:AAEc5HGL7VjYYJLTpAnjsVp9eOjEPpg1Pp0", // contoh: "123456:ABC-DEF..."  (jangan commit)
  TELEGRAM_CHAT_ID: "7799140879",   // contoh: "987654321" (chat id/username)

  // Opsi B (direkomendasikan): gunakan serverless endpoint yang menyimpan token.
  // Jika pakai opsi ini, deploy fungsi serverless (Netlify/Vercel/Cloudflare) yg menerima POST { text }
  USE_SERVERLESS_ENDPOINT: false,
  SEND_ENDPOINT: "" // contoh: "https://your-serverless.example/api/send"
};
