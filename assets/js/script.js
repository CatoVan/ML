document.addEventListener('DOMContentLoaded', () => {

    // GSAP plugin voor scroll-animaties activeren
    gsap.registerPlugin(ScrollTrigger);


    // =========================
    // HELMET ANIMATIE
    // =========================

    // Alle lijnen van de SVG zoeken
    const lines = document.querySelectorAll('.line');

    // Elke lijn voorbereiden voor de tekenanimatie
    lines.forEach(line => {

        // Lengte van deze specifieke lijn berekenen
        const length = line.getTotalLength();

        // Lijn volledig onzichtbaar maken
        gsap.set(line, {
            strokeDasharray: length,
            strokeDashoffset: length
        });

    });


    // Timeline voor de helmet
    const helmetTimeline = gsap.timeline({
        repeat: -1,       // blijft herhalen
        repeatDelay: 1    // wacht 1 seconde tussen loops
    });


    // Helmet wordt lijn voor lijn getekend
    helmetTimeline.to(lines, {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.05,
        ease: "power2.inOut"
    });


    // Helmet blijft even volledig zichtbaar
    helmetTimeline.to({}, {
        duration: 1
    });


    // Helmet wordt opnieuw lijn voor lijn weggehaald
    helmetTimeline.to(lines, {
        strokeDashoffset: (i, line) => line.getTotalLength(),
        duration: 2,
        stagger: 0.05,
        ease: "power2.inOut"
    });


    // =========================
    // SCROLL TRANSITION
    // =========================

    // De volgende sectie schuift omhoog wanneer je scrollt
    gsap.from(".transition-section", {

        y: "100%",

        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }

    });

});



