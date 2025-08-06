
const log = document.getElementById('chat-log');
const input = document.getElementById('chat-input');

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const msg = input.value.trim();
    if (!msg) return;
    log.innerHTML += `<div class='user'>${msg}</div>`;
    input.value = '';

    let response = "I'm not sure how to answer that.";
    if (msg.toLowerCase().includes('donate')) {
      response = "That's lovely! You can bring donations to our FOMA center or schedule a pickup.";
    } else if (msg.toLowerCase().includes('buy') || msg.toLowerCase().includes('price')) {
      response = "You can browse items above and reach out to the listed number to purchase.";
    } else if (msg.toLowerCase().includes('hello') || msg.toLowerCase().includes('hi')) {
      response = "Hi! I'm your FOMA helper. Ask me anything about baby items.";
    }
    setTimeout(() => {
      log.innerHTML += `<div class='bot'>${response}</div>`;
      log.scrollTop = log.scrollHeight;
    }, 500);
  }
});
