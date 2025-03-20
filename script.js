document.addEventListener("DOMContentLoaded", function() {
    // Gestion de l'affichage du champ "Autre crypto"
    document.getElementById("crypto-select").addEventListener("change", function() {
        let autreCryptoInput = document.getElementById("crypto-autre");
        if (this.value === "autre") {
            autreCryptoInput.style.display = "block";
        } else {
            autreCryptoInput.style.display = "none";
        }
    });

    // Fonction d'achat de cryptomonnaie
    window.acheterCrypto = function() {
        let crypto = document.getElementById("crypto-select").value;
        let autreCrypto = document.getElementById("crypto-autre").value;
        let wallet = document.getElementById("wallet").value;
        
        if (crypto === "autre" && autreCrypto === "") {
            alert("Veuillez préciser la cryptomonnaie.");
            return;
        }

        if (!wallet) {
            alert("Veuillez saisir votre adresse de réception.");
            return;
        }

        alert("Achat de " + (crypto === "autre" ? autreCrypto : crypto) + " en cours...");
    };

    // Fonction de vente de cryptomonnaie
    window.vendreCrypto = function() {
        let crypto = document.getElementById("crypto-select").value;
        let autreCrypto = document.getElementById("crypto-autre").value;
        let wallet = document.getElementById("wallet").value;

        if (crypto === "autre" && autreCrypto === "") {
            alert("Veuillez préciser la cryptomonnaie.");
            return;
        }

        if (!wallet) {
            alert("Veuillez saisir votre adresse de réception.");
            return;
        }

        alert("Vente de " + (crypto === "autre" ? autreCrypto : crypto) + " en cours...");
    };

    // Fonction d'inscription à une formation
    window.sInscrireFormation = function() {
        let formation = document.getElementById("formation-select").value;
        alert("Inscription à la formation: " + formation + " en cours...");
    };
});
