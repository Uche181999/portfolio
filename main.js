let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showNextSlide()
{
    currentIndex++;
    if (currentIndex >= totalSlides)
    {
        currentIndex = 0;
    }
    let newTransformValue;

    if (window.matchMedia("(max-width: 480px)").matches)
    {
        newTransformValue = -currentIndex * 100; // Full width for each image
    } else if (window.matchMedia("(max-width: 768px)").matches)
    {
        newTransformValue = -currentIndex * 50; // Adjust accordingly for medium screens
    } else
    {
        newTransformValue = -currentIndex * (30 / totalSlides); // Default logic for larger screens
    }

    slides.style.transform = `translateX(${newTransformValue}%)`;
}

setInterval(showNextSlide, 5000);

document.getElementById('downloadBtn').addEventListener('click', function ()
{
    const link = document.createElement('a');
    link.href = 'img/Uche_cv.pdf';
    link.download = 'Uche_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
