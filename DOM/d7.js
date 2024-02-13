const input = document.getElementById("messageInput");
input.addEventListener("change", function() {
  const message = this.value;
  console.log("Message:", message);
});
