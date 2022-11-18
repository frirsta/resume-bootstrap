function sendMail(contactForm) {
    emailjs.send("frirstaali", "template_lrwjih8", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailadress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCES", response);
            },
            function (error) {
                console.log("FAILED", error);
            });
    return false;
}