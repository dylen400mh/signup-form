
// don't run js code until DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const pass1 = document.querySelector("#password") // grab input element for password
    const pass2 = document.querySelector("#confirm") // grab input element for password confirmation
    const confirmField = document.querySelector(".form_field:last-child") // grab contianer for confirm password field

    const button = document.querySelector("button") // grab button element

    // to run when input detected on confirm box
    pass2.addEventListener("input", () => {

        // run if passwords are not equal
        if (pass1.value !== pass2.value && pass2.value !== "") {

            // create a div with the error class and assign it text
            const error = document.createElement("div")
            error.classList.add("error")
            error.textContent = "Passwords do not match."

            // remove existing error message
            const existingError = confirmField.querySelector(".error")
            if (existingError) {
                confirmField.removeChild(existingError)
            }

            // add new div to confirm password field (it will go directly under the input box)
            confirmField.appendChild(error)

            // disable the button until passwords match
            button.disabled = true
        } else {
            // remove existing errors
            const existingError = confirmField.querySelector(".error")
            if (existingError) {
                confirmField.removeChild(existingError)
            }

            // enable the button if passwords match
            button.disabled = false
        }
    })
})


