function changeLanguage() {
    const selectedLanguage = document.getElementById("language").value;
    const languageData = {
        english: {
            firstname: "First Name",
            lastname: "Last Name",
            email: "Email",
            password: "Password",
            gender: "Gender",
            male: "Male",
            female: "Female",
            other: "Other",
            profilepic: "Profile Picture",
            language: "Preferred Language",
            course: "Course",
            comments: "Comments",
            submit: "Register"
        },
        spanish: {
            firstname: "Nombre",
            lastname: "Apellido",
            email: "Correo electrónico",
            password: "Contraseña",
            gender: "Género",
            male: "Hombre",
            female: "Mujer",
            other: "Otro",
            profilepic: "Foto de perfil",
            language: "Idioma preferido",
            course: "Curso",
            comments: "Comentarios",
            submit: "Registrar"
        },
        french: {
            firstname: "Prénom",
            lastname: "Nom de famille",
            email: "Email",
            password: "Mot de passe",
            gender: "Genre",
            male: "Homme",
            female: "Femme",
            other: "Autre",
            profilepic: "Photo de profil",
            language: "Langue préférée",
            course: "Cours",
            comments: "Commentaires",
            submit: "S'inscrire"
        },
        german: {
            firstname: "Vorname",
            lastname: "Nachname",
            email: "E-Mail",
            password: "Passwort",
            gender: "Geschlecht",
            male: "Männlich",
            female: "Weiblich",
            other: "Andere",
            profilepic: "Profilbild",
            language: "Bevorzugte Sprache",
            course: "Kurs",
            comments: "Kommentare",
            submit: "Registrieren"
        }
    };

    const formElements = document.querySelectorAll("#registrationForm label");
    for (let element of formElements) {
        const fieldName = element.getAttribute("for");
        element.textContent = languageData[selectedLanguage][fieldName];
    }
}