
/*=============== EMAIL JS FOR APPLICATION FORM ===============*/

const contactForm = document.getElementById('contact-forms'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_z77nypk','template_krsop85','#contact-forms','tJqN3BfW5Ssh4oL8V').then(() => {
        //Show sent successfully
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after four seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 2000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = ' Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)