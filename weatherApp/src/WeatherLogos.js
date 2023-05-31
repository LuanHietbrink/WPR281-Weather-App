function showMessage(message) {
  // Create the pop-up message element
  const popup = document.createElement('div');
  popup.classList.add('popup-message');
  popup.textContent = message;

  // Append the pop-up message element to the body
  document.body.appendChild(popup);

  // Remove the pop-up message after a certain duration (e.g., 3 seconds)
  setTimeout(() => {
    popup.remove();
  }, 3000);
}

module.exports = {
    showMessage
  };