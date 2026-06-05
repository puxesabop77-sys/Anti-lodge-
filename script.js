// script.js
async function getQuestionForUser() {
    // 1. Detect IP
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const userIP = data.ip;

    // 2. Assign question based on IP (simplified logic)
    // In a real app, use the IP to query a database
    const lastDigit = parseInt(userIP.slice(-1));
    const questions = [
        "What is the capital of Summer?", 
        "If you could travel anywhere, where?",
        "What is the best part of a vacation?"
    ];

    displayQuestion(questions[lastDigit % questions.length]);
}

function displayQuestion(q) {
    document.getElementById('content').innerHTML = `<h2>${q}</h2>`;
}
