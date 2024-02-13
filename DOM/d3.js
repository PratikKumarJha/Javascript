function showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = "block"; 
    }
  }
  
  showElement("myElement");
  