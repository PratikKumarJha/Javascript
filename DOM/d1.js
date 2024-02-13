function hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = "none";
    }
  }
  
  // Example usage
  hideElement("myElement");
  