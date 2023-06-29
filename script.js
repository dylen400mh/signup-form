document.addEventListener("DOMContentLoaded", () => {
    const pass1 = document.querySelector("#password")
    const pass2 = document.querySelector("#confirm")
    const confirmField = document.querySelector(".form_field:last-child")

    pass2.addEventListener("input", () => {
        if (pass1.value !== pass2.value && pass2.value !== "") {
            const error = document.createElement("div")
            error.classList.add("error")
            error.textContent = "Passwords do not match."

            const existingError = confirmField.querySelector(".error")
            if (existingError) {
                confirmField.removeChild(existingError)
            }

            confirmField.appendChild(error)
        } else {
            const existingError = confirmField.querySelector(".error")
            if (existingError) {
                confirmField.removeChild(existingError)
            }
        }
    })
})


