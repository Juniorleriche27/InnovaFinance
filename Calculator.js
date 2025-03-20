// Fonction pour récupérer le prix de la crypto-monnaie en temps réel et calculer la valeur totale avec les frais de 20%
async function getCryptoPrice(crypto, quantity) {
    let apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`; // API CoinGecko pour récupérer le prix

    try {
        const response = await fetch(apiUrl); // Récupère les données de l'API
        const data = await response.json();

        // Assurez-vous que la crypto existe dans les données retournées
        const price = data[crypto] ? data[crypto].usd : null;

        if (!price) {
            document.getElementById("result").textContent = "Crypto-monnaie non trouvée.";
            return;
        }

        // Calculer la valeur totale avec 20% de frais
        const totalValue = (price * quantity) * 1.2;

        // Afficher le résultat
        document.getElementById("result").textContent = `La valeur totale pour ${quantity} ${crypto} avec les frais est : $${totalValue.toFixed(2)}`;
    } catch (error) {
        console.error("Erreur lors de la récupération des données de crypto-monnaie : ", error);
        document.getElementById("result").textContent = "Erreur lors de la récupération des données.";
    }
}

// Gestion de la soumission du formulaire
document.getElementById("crypto-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const crypto = document.getElementById("crypto-select").value; // Récupère la crypto choisie
    const quantity = parseFloat(document.getElementById("quantity").value); // Récupère la quantité

    if (isNaN(quantity) || quantity <= 0) {
        alert("Veuillez entrer une quantité valide.");
    } else {
        getCryptoPrice(crypto, quantity); // Appel de la fonction pour récupérer le prix et calculer la valeur
    }
});
