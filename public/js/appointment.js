const appointmentForm = document.querySelector(".appointment__form");

const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const plan = document.getElementById("plan");

function appointmentEmail() {
  const BodyMessage = `
        Nom : ${name.value} <br> 
        Tel : ${phone.value} <br> 
        Email : ${email.value} <br> 
        Subject : ${plan.value} <br>
    `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "contact.rayshooting@gmail.com",
    Password: "97F0FF3FE0C57AE3499FECAFF524FE42D505",
    To: "contact.rayshooting@gmail.com",
    From: "contact.rayshooting@gmail.com",
    Subject: "Message de réservation - RayShooting",
    Body: BodyMessage,
  }).then((message) => {
    if (message) {
      Swal.fire({
        title: "Réservation Passée !",
        text: "Votre réservation a été enregistrée avec succès. Vous recevrez bientôt un appel pour confirmer votre réservation.",
        icon: "success",
        background: "#ecfeee",
        confirmButtonColor: "#29645C",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Une erreur a été produite lors de l'envoie du formulaire !",
        footer: '<a href="contact.html">Pourquoi ai-je ce problème?</a>',
        background: "#ecfeee",
        confirmButtonColor: "#29645C",
      });
    }
  });
}

appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  appointmentEmail();
});
