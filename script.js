function filterImages(category, buttonId) {
    const allImages = document.querySelectorAll('.img1');
    const allButtons = document.querySelectorAll('.cup');

    allImages.forEach(image => {
      const imageCategory = image.id.split('-')[1]; // Extract category from id

      if (category === 'ALL' || category === imageCategory) {
        image.style.display = 'block'; // Show images matching the category
      } else {
        image.style.display = 'none'; // Hide images not matching the category
      }
    });

    // Remove 'active' class from all buttons
    allButtons.forEach(button => {
      button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    document.getElementById(buttonId).classList.add('active');
  }
  /* ==============Animation for facts section=========*/
  
// Function to animate the counter
    function animateCounter(target, start, end, duration) {
            let current = start;
            const increment = (end - start) / duration;
            const element = document.querySelector(target);

            const intervalId = setInterval(function () {
                current += increment;
                element.textContent = Math.floor(current);

                if (current >= end) {
                    clearInterval(intervalId);
                }
            }, 10);
        }

        // Intersection Observer to trigger the animation when the section is in view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter('.counter-1', 1, 202, 120);
                    animateCounter('.counter-2', 1, 520, 120);
                    animateCounter('.counter-3', 1, 35, 120);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Start observing the section
        const section = document.getElementById('skills');
        observer.observe(section);
      
        //         NAvbar Responsive
        function check(){

let openNav =document.getElementById('mobile-screen');
let clossNav=document.getElementById('open');
let inexzValue =document.getElementById('closs');

openNav.style.display='block';
inexzValue.style.zIndex='0';
        }
        function corei5(){
          let openNav =document.getElementById('mobile-screen');
let clossNav=document.getElementById('open');
let inexzValue =document.getElementById('closs');

openNav.style.display='none';
inexzValue.style.zIndex='9';
        }