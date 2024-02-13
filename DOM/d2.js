function setTextContent(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = newText;
    }
  }
  setTextContent("myElement", "Hello, world!");
  