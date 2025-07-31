const slidesContainer = document.querySelector('.slider__slides');
    const slides = document.querySelectorAll('.slider__slide');
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let index = 0;
    const slideWidth = slides[0].offsetWidth + 20;
    const totalSlides = slides.length;
    let autoSlide;

    function moveToSlide(idx) {
        slidesContainer.style.transform = `translateX(-${slideWidth * idx}px)`;
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        moveToSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        moveToSlide(index);
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 2000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    startAutoSlide();

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }
    
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
