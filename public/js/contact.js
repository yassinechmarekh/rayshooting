const contactForm = document.querySelector(".contact_form");

const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function contactEmail() {
  const BodyMessage = `
    Nom : ${name.value} <br> 
    Tel : ${phone.value} <br> 
    Email : ${email.value} <br> 
    Subject : ${subject.value} <br> 
    Message : ${message.value} <br>
    `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "contact.rayshooting@gmail.com",
    Password: "97F0FF3FE0C57AE3499FECAFF524FE42D505",
    To: "contact.rayshooting@gmail.com",
    From: "contact.rayshooting@gmail.com",
    Subject: "Contact Message - RayShooting",
    Body: BodyMessage,
  }).then((message) => {
    if (message) {
      Swal.fire({
        title: "Message Envoyé !",
        text: "Votre message a été envoyé avec succès. Merci de nous avoir contactés !",
        icon: "success",
        background: "#ecfeee",
        confirmButtonColor: "#29645C",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Une erreur a été produite lors de l'envoie du message !",
        footer: '<a href="contact.html">Pourquoi ai-je ce problème?</a>',
        background: "#ecfeee",
        confirmButtonColor: "#29645C",
      });
    }
  });
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactEmail();
});
