document.querySelectorAll('.carousel').forEach((carousel) => {
    const carouselContainer = carousel.querySelector('.carousel-container');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    // Function to update carousel position
    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculate offset in percentage
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    // Event listener for next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems; // Loop to first image after the last
        updateCarousel();
    });

    // Event listener for previous button
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop to last image if negative
        updateCarousel();
    });
});

