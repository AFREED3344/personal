const form = document.getElementById("form");
form.addEventListener("submit",(e) => {
    e.preventDefault();
    sendMail();
})

function sendMail(params) {
    let tempParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    emailjs.send("service_uypzb1a", "template_au8hn98", tempParams, "wjACPsHAIUXcIdXAx").then((res) => {
        alert("Your message has been sent. Thank you!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
     
    });
  }

  