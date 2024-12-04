const roastMessages = [
  "HP ini sepertinya masih pakai RAM 1GB ya?",
  "Wah, spesifikasinya kayak HP jadul deh.",
  "Mungkin lebih cepat kalau dipakai buat batu bata.",
  "HP ini lebih berat daripada beban hidup gue.",
  "Udah kayak TV tabung, banyak lag-nya!",
  "Jangan-jangan hape ini masih pake prosesor 32-bit?",
  "Tipe HP kayak gini cuma bisa dipakai buat nelpon doang, ya?"
];

function roastPhone() {
  const phoneInput = document.getElementById("phoneInput").value.trim();
  const resultDiv = document.getElementById("roastResult");

  if (phoneInput === "") {
    resultDiv.style.display = "none";
    alert("Masukkan nama HP dulu!");
    return;
  }

  // Pilih roast secara acak
  const randomRoast = roastMessages[Math.floor(Math.random() * roastMessages.length)];
  resultDiv.textContent = `${phoneInput}, ${randomRoast}`;
  resultDiv.style.display = "block";
}
