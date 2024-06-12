function sendMessage() {
    const messageInput = document.getElementById('msg-input');
    const message = messageInput.value.trim();

    if (message !== '') {
        const chatContainer = document.querySelector('.chat-container');
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-consumer');

        // set new div to include msg and a timestamp
        messageElement.innerHTML = `
            <p>${message}</p>
            <p class="time-consumer">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
        `;

        // tambah ke screen
        chatContainer.appendChild(messageElement);
        // clear text input
        messageInput.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('msg-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});



function getParams() {
    var params = {};
    // gets query string part of url
    // substring(1) removes '?' then split string '&'
    // for each pair iterates each element
    window.location.search.substring(1).split("&").forEach(pair => {
        // store 'split '=' so 'name'(key) and 'Rosel'(value)
        var [key, value] = pair.split("=");
        // store param[key] = value
        params[key] = decodeURIComponent(value);
    });
    return params;
}

document.addEventListener('DOMContentLoaded', () => {
    var params = getParams();
    document.getElementById('prof').src = params.image;
    document.getElementById('prof-name').innerText = params.name;
    document.getElementById('prof-name-desc').innerText = params.message;
});

