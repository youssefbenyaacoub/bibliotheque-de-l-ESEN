
function goToNextPage2() {
    
    window.location.href = 'inscription.html';

}

            function validateAndRedirect() {
            const address = document.getElementById("adress").value;
            const password = document.getElementById("mtpass").value;

            if (address === "" || password === "") {
                alert("Veuillez remplir tous les champs obligatoires (adresse et mot de passe).");
                return false; 
            }

          
            window.location.href = "niveau.html";
            return false; 
        }


        function validateForm() {
            const nom = document.getElementById("nom").value;
            const password = document.getElementById("mtpass").value;
            const dateOfBirth = document.getElementById("naissance").value;
            const minDate = new Date("2005-01-01");
            if (nom.length < 5) {
                alert("Le champ 'Nom' doit contenir au moins 5 caractères.");
                return false;
            }

            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!passwordRegex.test(password)) {
                alert("Le mot de passe doit contenir au moins 8 caractères, incluant des lettres et des chiffres.");
                return false;
            }
            window.location.href = "connexion.html";
            return false;
        }
        function controleRecherche(ChampRecherche) {
            alert("Vous avez saisi: " + ChampRecherche.value);
            if (ChampRecherche.value.length < 4) {
            alert("Vous devez saisir une chaine d'au moins 4 caractères");
            ChampRecherche.select();
            return false;
            } else {
            return true;
            }
            }