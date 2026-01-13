function sendMessage(event) {
    event.preventDefault();
    document.getElementById("success-msg").innerText =
      "Message sent successfully!";
  }

const menuIcon = document.getElementById("menuIcon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.querySelector('.resume-btn').addEventListener('click', () => {
    console.log('Resume downloaded');
  });
