document.addEventListener("DOMContentLoaded", function() {
    const flag = document.getElementById("flag");
    const stripes = flag.getElementsByClassName("stripe");

    let frame = 0;
    const amplitude = 10; // Amplitud del movimiento de onda
    const frequency = 0.1; // Frecuencia de la onda
    const speed = 0.1; // Velocidad del movimiento

    function animateFlag() {
        frame += speed;

        for (let i = 0; i < stripes.length; i++) {
            let stripe = stripes[i];
            let offset = Math.sin(frame * frequency + i) * amplitude;
            stripe.style.transform = `translateY(${offset}px)`;
        }

        requestAnimationFrame(animateFlag);
    }

    animateFlag();
});
