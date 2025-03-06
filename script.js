// Create balloons and sparkles
function createElements() {
    createBalloons();
    createSparkles();
}

function createBalloons() {
    const colors = ['#ff69b4', '#9370db', '#ffd700', '#ff6347'];
    const numBalloons = 15;
    
    for (let i = 0; i < numBalloons; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        // Random balloon properties
        const size = Math.random() * 30 + 40;
        // Adjust left position to account for balloon width
        const left = Math.random() * (90 - size/window.innerWidth * 100); // Constrains balloons within viewport
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.2}px`;
        balloon.style.left = `${left}%`;
        balloon.style.backgroundColor = color;
        balloon.style.animationDelay = `${delay}s`;
        balloon.style.animationDuration = `${duration}s`;
        
        document.body.appendChild(balloon);
    }
}

function createSparkles() {
    const colors = ['#ff69b4', '#9370db', '#ffd700', '#ffffff', '#ff6347'];
    const numSparkles = 50;
    
    for (let i = 0; i < numSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Random sparkle properties
        const size = Math.random() * 8 + 5;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 6 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${left}%`;
        sparkle.style.backgroundColor = color;
        sparkle.style.animationDelay = `${delay}s`;
        sparkle.style.animationDuration = `${duration}s`;
        
        // Make some sparkles diamond-shaped
        if (Math.random() > 0.5) {
            sparkle.style.transform = 'rotate(45deg)';
        }
        
        document.body.appendChild(sparkle);
    }
}

// Card handling
document.getElementById('openCard').addEventListener('click', () => {
    document.getElementById('birthdayCard').style.display = 'block';
});

document.getElementById('closeCard').addEventListener('click', () => {
    document.getElementById('birthdayCard').style.display = 'none';
});

// Initialize
window.onload = createElements;

document.getElementById('confettiButton').addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});