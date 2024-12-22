// app.js
window.onload = () => {
    // Selecting the hero section container by its ID
    const heroContainer = document.querySelector('#heroSection .container');

    // Defining the content for the Hero Section
    const title = "Empower Your Electrical Knowledge";
    const description = "Prepare for your electrical engineering exams with quizzes, resources, and expert guidance.";
    const buttonText = "Start Your Journey";

    // Creating the dynamic HTML content
    const content = `
        <h1 class="text-4xl md:text-6xl font-bold mb-4">${title}</h1>
        <p class="text-lg md:text-xl mb-8">${description}</p>
        <a href="quiz.html" class="px-6 py-3 bg-yellow-400 text-blue-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300 ease-in-out">${buttonText}</a>
    `;

    // Injecting the HTML content into the hero section
    if (heroContainer) {
        heroContainer.innerHTML = content;
    }
};
