const chat = document.getElementById('chat');
const messageInput = document.getElementById('message');

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === '') return;

    const messageElement = document.createElement('div');
    messageElement.textContent = `You: ${messageText}`;
    chat.appendChild(messageElement);

    messageInput.value = '';
    chat.scrollTop = chat.scrollHeight;

    // Simulate a response from the other user
    setTimeout(() => {
        const responseElement = document.createElement('div');
        responseElement.textContent = `Other: ${messageText.split('').reverse().join('')}`;
        chat.appendChild(responseElement);
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
}

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
