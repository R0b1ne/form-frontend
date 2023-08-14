document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM chargé");
  // -- Détecter un click n'importe où sur la page
  //   document.addEventListener("click", () => {

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      // console.log("submit", event);

      const firstname = document.querySelector("#firstname").value;
      const lastname = document.querySelector("#lastname").value;
      const email = document.querySelector("#email").value;
      const subject = document.querySelector("#subject").value;
      const message = document.querySelector("#message").value;

      console.log({
        firstname,
        lastname,
        email,
        subject,
        message,
      });

      const { data } = await axios.post(
        "https://site--form-backend--zqz8bqcfkwlv.code.run/form",
        {
          firstname,
          lastname,
          email,
          subject,
          message,
        }
      );

      // console.log("response>>", response.data);
      console.log("response =>", data);
    });
});
