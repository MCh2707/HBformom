function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('opened');
}

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const bubblesContainer = document.querySelector('.bubbles');

    envelope.classList.toggle('opened');

    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        
        const size = Math.random() * 50 + 10; 
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;

        bubble.style.animationDelay = `${Math.random() * 2}s`;

        bubblesContainer.appendChild(bubble);

        
        bubble.addEventListener('animationend', () => bubble.remove());
    }
}
