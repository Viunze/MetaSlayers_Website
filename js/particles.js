document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 70; // Jumlah partikel (bisa disesuaikan)
    const maxParticleSize = 2; // Ukuran maksimum partikel
    const maxSpeed = 0.5; // Kecepatan maksimum partikel

    // Set canvas dimensions
    function setCanvasDimensions() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle constructor
    function Particle() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * maxParticleSize + 0.5; // Min size 0.5
        this.speedX = Math.random() * maxSpeed * 2 - maxSpeed; // -maxSpeed to +maxSpeed
        this.speedY = Math.random() * maxSpeed * 2 - maxSpeed;
        this.color = `rgba(255, 0, 0, ${Math.random() * 0.3 + 0.1})`; // Merah neon transparan
        this.glowFactor = Math.random() * 0.5 + 0.5; // Untuk variasi glow
    }

    // Draw particle
    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = `rgba(255, 0, 0, ${this.glowFactor})`; // Warna glow merah neon
        ctx.shadowBlur = this.size * 5; // Efek blur untuk glow
        ctx.fill();
        // Reset shadow for next drawings
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
    }

    // Update particle position
    Particle.prototype.update = function() {
        this.x += this.speedX;
        this.y += this.speedY;

        // If particle goes off screen, reset its position
        if (this.x > canvas.width + this.size || this.x < -this.size) {
            this.x = this.speedX > 0 ? -this.size : canvas.width + this.size;
            this.y = Math.random() * canvas.height; // Reset y randomly
        }
        if (this.y > canvas.height + this.size || this.y < -this.size) {
            this.y = this.speedY > 0 ? -this.size : canvas.height + this.size;
            this.x = Math.random() * canvas.width; // Reset x randomly
        }
    }

    // Initialize particles
    function init() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animate);
    }

    init(); // Start initialization
    animate(); // Start animation
});
