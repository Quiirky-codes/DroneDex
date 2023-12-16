function askQuestion() {
    var questionInput = document.getElementById("question");
    var chatBody = document.getElementById("chat-body");

    var question = questionInput.value;
    if (!question.trim()) {
        appendMessage("Please enter a question.", "system");
        return;
    }

    appendMessage(question, "user");
    questionInput.value = "";  // Clear the input field

    fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'question=' + encodeURIComponent(question),
    })
    .then(response => response.json())
    .then(data => {
        if ('error' in data) {
            appendMessage(data['error'], "system");
        } else {
            appendMessage(data['Title'], "bot");
            appendMessage(data['Summary'], "bot");
            if (data['URL']) {
                appendMessage(`<a href="${data['URL']}" target="_blank">Read more</a>`, "bot");
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
        appendMessage("An error occurred. Please try again.", "system");
    });
}

function appendMessage(message, sender) {
    var chatBody = document.getElementById("chat-body");
    var messageDiv = document.createElement("div");

    if (sender === "system") {
        messageDiv.className = "system-message";
    } else if (sender === "user") {
        messageDiv.className = "user-message";
    } else {
        messageDiv.className = "bot-message";
    }

    messageDiv.innerHTML = message;
    chatBody.appendChild(messageDiv);

    // Scroll to the bottom of the chat window
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Trigger askQuestion function when Enter key is pressed
document.getElementById("question").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        askQuestion();
    }
});
