document.getElementById('surpriseBtn').addEventListener('click', function() {
    // Основной взрыв конфетти
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#f50057', '#e91e63', '#c2185b', '#ad1457']
    });

    // Много разных сердечек (отличаются от фоновых ❤️)
    const specialHearts = ['💕', '💖', '💗', '💓', '💝', '💘', '❣️', '💞'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 20,
                angle: Math.random() * 360,
                spread: 120,
                origin: { x: Math.random(), y: Math.random() * 0.8 + 0.2 },
                ticks: 300,
                gravity: 0.5,
                scalar: Math.random() * 1.5 + 1,
                shapes: ['text'],
                texts: [specialHearts[Math.floor(Math.random() * specialHearts.length)]],
                colors: ['#ff4081', '#e91e63', '#c2185b', '#ff6b6b', '#ff8e8e']
            });
        }, i * 80);
    }

    // Меняем кнопку
    this.textContent = 'СПАСИБО, ЧТО НАЖАЛА! Я ТЕБЯ ОЧЕНЬ ЛЮБЛЮ! ❤️❤️❤️';
    this.style.background = 'linear-gradient(45deg, #4caf50, #8bc34a)';
    this.style.transform = 'scale(1.2)';
    this.disabled = true;
});