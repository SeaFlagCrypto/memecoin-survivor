const outcomes = [
  { emoji: "🚀", text: "Mooned! You survived another day!" },
  { emoji: "📉", text: "Dumped! Barely survived..." },
  { emoji: "💀", text: "RUGGED! You're out!" },
  { emoji: "🛸", text: "Rebased! But you made it." },
  { emoji: "😴", text: "Sideways. Still alive." }
];

function spinWheel() {
  const coin = document.getElementById("coin-select").value;
  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  const resultBox = document.getElementById("result");

  resultBox.innerHTML = `
    <p>${coin} — ${outcome.emoji}</p>
    <strong>${outcome.text}</strong>
  `;
}
