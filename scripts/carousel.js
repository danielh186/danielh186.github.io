// Carousel functionality with dynamic image loading
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("carousel-modal");
    // const openBtn = document.getElementById("open-carousel-btn");
    const closeBtn = document.getElementById("close-carousel-btn");
    const slidesContainer = document.getElementById("carousel-slides-container");
    const indicatorsContainer = document.getElementById("carousel-indicators");

    let slides = [];
    let indicators = [];
    let currentIndex = 0;
    let autoSlideInterval;

    // Modal functionality
    // openBtn.addEventListener("click", () => {
    //     modal.classList.add("open");
    //     document.body.style.overflow = "hidden";
    // });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("open");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) {
            modal.classList.remove("open");
            document.body.style.overflow = "";
        }
    });

    // Function to set carousel images dynamically
    window.set_carousel_images = function (images) {
        // Clear existing slides and indicators
        slidesContainer.innerHTML = '';
        indicatorsContainer.innerHTML = '';
        slides = [];
        indicators = [];

        // Create new slides and indicators
        images.forEach((image, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = `carousel-slide absolute inset-0 w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 ${index === 0 ? '' : 'opacity-0'
                }`;

            slide.innerHTML = `
            <div class="absolute inset-0 overflow-hidden">
                <img
                src="${image.image_src}"
                alt="${image.image_alt}"
                class="w-full h-full object-cover filter blur-lg scale-105"
                />
            </div>

            <!-- Main image container -->
            <div class="relative h-full w-full flex items-center justify-center">
                <img
                src="${image.image_src}"
                alt="${image.image_alt}"
                class="max-h-full max-w-full object-contain"
                />
            </div>
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 class="text-xl font-bold text-white">${image.title}</h3>
                <p class="text-gray-200 mt-1">${image.description}</p>
              </div>
            `;

            slidesContainer.appendChild(slide);
            slides.push(slide);

            // Create indicator
            const indicator = document.createElement('button');
            indicator.className = `carousel-indicator w-3 h-3 rounded-full ${index === 0 ? 'bg-white/80' : 'bg-white/30'
                } hover:bg-white/50 transition-all`;

            indicator.addEventListener('click', () => {
                const direction = index > currentIndex ? "next" : "prev";
                showSlide(index, direction);
            });

            indicatorsContainer.appendChild(indicator);
            indicators.push(indicator);
        });

        // Reset carousel state
        currentIndex = 0;
        resetAutoSlide();
    };

    function showSlide(index, direction = "next") {
        if (slides.length === 0) return;

        const nextIndex = index % slides.length;
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[nextIndex];

        // Disable transitions during setup
        slides.forEach((slide) => {
            slide.style.transition = "none";
        });

        // Prepare incoming slide position
        if (direction === "next") {
            nextSlide.style.transform = "translateX(30px)";
        } else {
            nextSlide.style.transform = "translateX(-30px)";
        }

        // Re-enable transitions
        slides.forEach((slide) => {
            slide.style.transition = "opacity 0.8s ease-in-out, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
        });

        // Animate slides
        currentSlide.style.opacity = "0";
        currentSlide.style.transform = direction === "next" ? "translateX(-30px)" : "translateX(30px)";

        nextSlide.style.opacity = "1";
        nextSlide.style.transform = "translateX(0)";

        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("bg-white/30", i !== nextIndex);
            indicator.classList.toggle("bg-white/80", i === nextIndex);
        });

        currentIndex = nextIndex;
        resetAutoSlide();
    }

    function nextSlide() {
        if (slides.length === 0) return;
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex, "next");
    }

    function prevSlide() {
        if (slides.length === 0) return;
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex, "prev");
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        if (slides.length > 1) {
            autoSlideInterval = setInterval(nextSlide, 6000);
        }
    }

    // Set up event listeners for navigation
    document.querySelector(".carousel-next")?.addEventListener("click", nextSlide);
    document.querySelector(".carousel-prev")?.addEventListener("click", prevSlide);

    // Pause on hover
    const carousel = document.getElementById("carousel-container");
    if (carousel) {
        carousel.addEventListener("mouseenter", () => {
            clearInterval(autoSlideInterval);
        });
        carousel.addEventListener("mouseleave", resetAutoSlide);
    }

    // Example usage (can be called from your code):
    // set_carousel_images([
    //     {
    //         image_src: "media/printed-cnc/cnc-3dp.jpg",
    //         image_alt: "Mountain view",
    //         title: "The Majestic Peaks",
    //         description: "View from our first campsite"
    //     },
    //     {
    //         image_src: "media/printed-cnc/cnc-cutting.jpg",
    //         image_alt: "Mountain lake",
    //         title: "Alpine Lakes",
    //         description: "Crystal clear waters"
    //     }
    // ]);
    // modal.classList.add("open");
    // document.body.style.overflow = "hidden";
});