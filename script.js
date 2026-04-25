let activePlan = null;

// Create a simple user account state
const account = {
  balance: 3500,
  dataUsed: 0,
  notifications: []
};

// Handle plan activation
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const planName = card.querySelector("h3").innerText;

    activePlan = planName;

    account.notifications.push(`Activated ${planName}`);

    alert(`✅ ${planName} activated successfully!`);

    updateUI();
  });
});

// Update UI (simple dynamic info)
function updateUI() {
  let footer = document.querySelector(".footer");

  footer.innerHTML = `
    <p>© 2026 t1 Network</p>
    <p>Active Plan: <b>${activePlan ? activePlan : "None"}</b></p>
    <p>Balance: ${account.balance} AMD</p>
    <p>Notifications: ${account.notifications.length}</p>
  `;
}

// Fake data usage simulation (optional fun feature)
setInterval(() => {
  if (activePlan) {
    account.dataUsed += Math.floor(Math.random() * 2); // small random usage
    console.log("Data used:", account.dataUsed, "GB");
  }
}, 5000);
