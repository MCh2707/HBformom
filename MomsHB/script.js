document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('messageContainer');
  
 
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    savedMessages.forEach(({ name, message }) => {
      addMessageToPage(name, message);
    });

    document.getElementById('noteForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const message = document.getElementById('message').value;
  
      if (name && message) {

        addMessageToPage(name, message);
  

        savedMessages.push({ name, message });
        localStorage.setItem('messages', JSON.stringify(savedMessages));
  

        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
      }
    });
  
 
    function addMessageToPage(name, message) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
  
      messageDiv.innerHTML = `
        <p><strong>${name} ამბობს:</strong></p>
        <p>${message}</p>
      `;
  
      messageContainer.appendChild(messageDiv);
    }
  });
  