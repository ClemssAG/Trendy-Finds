<!-- JavaScript codes -->
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Highlight active link in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = '↑ Top';
backToTopBtn.className = 'back-to-top';
document.body.appendChild(backToTopBtn);
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Product Review Submission Form (if desired)
const reviewForm = document.createElement('form');
reviewForm.innerHTML = `
    <h3>Submit Your Review</h3>
    <input type="text" placeholder="Product Name" required>
    <input type="url" placeholder="Product URL" required>
    <textarea placeholder="Your Review" required></textarea>
    <button type="submit">Submit Review</button>
`;
document.querySelector('#reviews').appendChild(reviewForm);
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const productName = reviewForm.querySelector('input[type="text"]').value;
    const productURL = reviewForm.querySelector('input[type="url"]').value;
    const userReview = reviewForm.querySelector('textarea').value;
    const newReview = document.createElement('div');
    newReview.className = 'product-review';
    newReview.innerHTML = `
        <h3>${productName}</h
