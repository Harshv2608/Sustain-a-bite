document.addEventListener("DOMContentLoaded", () => {
    // ========= Carousel 1 =========
    let currentIndex1 = 0;
    const items1 = document.querySelectorAll(".carousel-item");
    const totalItems1 = items1.length;
    const visibleItems1 = 3; 
    const container1 = document.querySelector(".carousel-images");

    function updateCarousel() {
        if (container1) {
            const offset1 = -(currentIndex1 * (100 / visibleItems1));
            container1.style.transform = `translateX(${offset1}%)`;
        }
    }

    function nextSlide1() {
        if (currentIndex1 < totalItems1 - visibleItems1) {
            currentIndex1++;
        } else {
            currentIndex1 = 0;
        }
        updateCarousel();
    }

    function prevSlide1() {
        if (currentIndex1 > 0) {
            currentIndex1--;
        } else {
            currentIndex1 = totalItems1 - visibleItems1;
        }
        updateCarousel();
    }

    document.querySelector(".prev").addEventListener("click", prevSlide1);
    document.querySelector(".next").addEventListener("click", nextSlide1);

    // Auto-scroll for carousel 1
    setInterval(nextSlide1, 3000);

    // ========= Carousel 2 (carousel1) =========
    let currentIndex2 = 0;
    const items2 = document.querySelectorAll(".carousel1-item");
    const totalItems2 = items2.length;
    const visibleItems2 = 3;
    const container2 = document.querySelector(".carousel1-images");

    function updateCarousel1() {
        if (container2) {
            const offset2 = -(currentIndex2 * (100 / visibleItems2));
            container2.style.transform = `translateX(${offset2}%)`;
        }
    }

    function nextSlide2() {
        if (currentIndex2 < totalItems2 - visibleItems2) {
            currentIndex2++;
        } else {
            currentIndex2 = 0;
        }
        updateCarousel1();
    }

    function prevSlide2() {
        if (currentIndex2 > 0) {
            currentIndex2--;
        } else {
            currentIndex2 = totalItems2 - visibleItems2;
        }
        updateCarousel1();
    }

    document.querySelector(".prev1").addEventListener("click", prevSlide2);
    document.querySelector(".next1").addEventListener("click", nextSlide2);

    // Auto-scroll for carousel 2
    setInterval(nextSlide2, 3000);

    // ========= Navbar Hide on Scroll =========
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.opacity = "0";
            header.style.visibility = "hidden";
        } else {
            header.style.opacity = "1";
            header.style.visibility = "visible";
        }
    });

     // ========= Testimonial Slider =========
     let slides = document.querySelectorAll(".circle-slide");
     let index = 0;
 
     if (slides.length > 0) {
         function showSlides() {
             slides.forEach((slide) => (slide.style.opacity = "0"));
             slides[index].style.opacity = "1";
             index = (index + 1) % slides.length;
         }
         setInterval(showSlides, 2000);
         showSlides();
     }
 
     // ========= Testimonials Marquee =========
     const testimonials = [
         { name: "Swayam Kapoor", text: "This platform helped us distribute excess food effectively!" },
         { name: "Abdul Khader", text: "An incredible initiative making a real impact." },
         { name: "Shagun Kumari", text: "So grateful for the help provided. Thank you!" },
         { name: "Tanisha Gupta", text: "This food donation platform changed lives!" },
         { name: "Pradeep Choudhary", text: "Helping others has never been easier. Amazing!" },
         { name: "Twinkle Ghodki", text: "A truly remarkable initiative. Keep it up!" }
     ];
 
     function createTestimonialCard(testimonial) {
         const card = document.createElement("div");
         card.className = "testimonial-card";
         card.innerHTML = `
             <p>"${testimonial.text}"</p>
             <strong>${testimonial.name}</strong>
         `;
         return card;
     }
 
     function populateMarquee(marqueeId, testimonials) {
         const marquee = document.getElementById(marqueeId);
         if (!marquee) {
             console.error(`Marquee element with ID ${marqueeId} not found!`);
             return;
         }
 
         testimonials.forEach((testimonial) => {
             const card = createTestimonialCard(testimonial);
             marquee.appendChild(card);
         });
 
         // Clone testimonials for smooth looping
         testimonials.forEach((testimonial) => {
             const card = createTestimonialCard(testimonial);
             marquee.appendChild(card.cloneNode(true));
         });
     }
 
     // Split testimonials into two rows for dynamic effect
     const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
     const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));
 
     populateMarquee("marquee1", firstRow);
     populateMarquee("marquee2", secondRow);
 });
 document.addEventListener("DOMContentLoaded", function () {
    function animateNumber(elementId, targetValue, duration = 2000) {
        const element = document.getElementById(elementId);
        let startValue = 0;
        let startTime = null;

        function updateNumber(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            element.textContent = Math.floor(progress * targetValue);

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = targetValue;
            }
        }

        requestAnimationFrame(updateNumber);
    }

    function startCounting(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber("people-helped", 5000);
                animateNumber("org-connected", 250);
                animateNumber("food-donated", 12000);
                observer.unobserve(entry.target); // Stop observing once animation starts
            }
        });
    }

    const observer = new IntersectionObserver(startCounting, {
        root: null, // Observes in the viewport
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const ourWorkSection = document.getElementById("our-work");
    if (ourWorkSection) {
        observer.observe(ourWorkSection);
    }
});

