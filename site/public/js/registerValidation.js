window.addEventListener("load", () => {

    const form = document.querySelector("#form-register")
    const nameValue = document.querySelector("[name='name']")
    const errName = document.querySelector(".errName")
    const surnameValue = document.querySelector("[name='surname']")
    const errSurName = document.querySelector(".errSurName")
    const emailValue = document.querySelector("[name='email']")
    const errEmail = document.querySelector(".errEmail")
    const passwordValue = document.querySelector("#contrasenia")
    const errPassword = document.querySelector(".errPassword")
    const errForm = document.querySelector(".errForm")


    let errors = [];





    nameValue.addEventListener("keyup", function (event) {


        const value = this.value.trim()

        switch (true) {

            case value.length === 0:
                errName.innerHTML = "Campo requerido."
                errors.push("El campo nombre es Requerido.")
                break;

            case value.length < 3:
                errName.innerHTML = "Debe tener un minimo de 3 caracteres."
                errors.push("El campo nombre debe tener un minimo de 3 caracteres.")
                break;

            default:
                errName.innerHTML = null
                break
        }

    })


    surnameValue.addEventListener("keyup", function (event) {


        const value = this.value.trim()

        switch (true) {

            case value.length === 0:
                errSurName.innerHTML = "Campo requerido."
                errors.push("El campo apellido es Requerido.")
                break;

            case value.length < 3:
                errSurName.innerHTML = "Debe tener un minimo de 3 caracteres!"
                errors.push("El campo apellido debe tener un minimo de 3 caracteres.")
                break;


            default:
                errSurName.innerHTML = null
                break
        }

    })


    emailValue.addEventListener("keyup", function (event) {

        const value = this.value.trim()
        const expregEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/


        switch (true) {

            case value.length === 0:
                errEmail.innerHTML = "Campo requerido."
                errors.push("El campo email es requerido.")
                break;

            case !expregEmail.test(value):
                errEmail.innerHTML = "Formato invalido"
                errors.push("El campo email tiene un formato invalido")
                break;

            default:
                errEmail.innerHTML = null
                break
        }

    })


    passwordValue.addEventListener("keyup", function (e) {

        const value = this.value

        console.log(value);

        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,30})');


        switch (true) {
            case !lower.test(value):
                errPassword.innerHTML = "La contraseña debe tener una minuscula"
                errors.push("La contraseña debe tener una minuscula")
                break;
            case !upper.test(value):
                errPassword.innerHTML = "La contraseña debe tenerz una Mayuscula"
                errors.push("La contraseña debe tener una Mayuscula")
                break;
            case !number.test(value):
                errPassword.innerHTML = "La contraseña debe tener un numero"
                errors.push("La contraseña debe tener un numero")
                break;
            case !special.test(value):
                errPassword.innerHTML = "La contraseña debe tener un caracter especial"
                errors.push("La contraseña debe tener un caracter especial")
                break;
            case !length.test(value):
                errPassword.innerHTML = "Longitud invalida"
                errors.push("Longitud de contraseña invalida")
                break;
            default:
                errPassword.innerHTML = null
                break;
        }
    })


    form.addEventListener("submit", function (event) {

        if (errors.length > 0 ||
            !nameValue.value.length ||
            !surnameValue.value.length ||
            !emailValue.value.length) {
            event.preventDefault()
            errForm.innerHTML = "Todos los campos son requeridos!"
            console.log(errors);
            errors = []
        }
    })


});
