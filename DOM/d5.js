function removeElement(elementId) {
    const element = document.getElementById(elementId);
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
  removeElement("myElement");
  