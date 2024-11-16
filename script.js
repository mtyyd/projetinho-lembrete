const maisTarde = document.getElementById('maisTarde');
const agoraComer = document.getElementById('agoraComer');

function showReminder() {
    alert("Ei, está na hora de fazer uma pausa para comer! 💖");
}

// Inicialmente, exibe o lembrete após 5 segundos
let reminderTimeout = setTimeout(showReminder, 5000);

maisTarde.addEventListener('click', () => {
    clearTimeout(reminderTimeout);
    alert("Tudo bem! Vou lembrar você daqui a 30 minutos. 😊");
    reminderTimeout = setTimeout(showReminder, 1800000); // 15 minutos
});

agoraComer.addEventListener('click', () => {
    clearTimeout(reminderTimeout);
    alert("Ótimo! Aproveite a refeição. 🌸");
});
