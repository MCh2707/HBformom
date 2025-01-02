function showSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block';
}

function createBalloons() {
    const container = document.querySelector('.balloons');
    const colors = ['#ff69b4', '#ffa07a', '#ffdab9', '#d1c4e9', '#f8bbd0'];

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloon.style.animationDuration = `${Math.random() * 3 + 5}s`;
        container.appendChild(balloon);
    }
}

document.addEventListener('DOMContentLoaded', createBalloons);
