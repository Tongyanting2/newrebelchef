function getRecommendation() {
    var preference = document.getElementById("preference").value;
    var recommendation = "";

    // Logic to generate recommendation based on preference
    switch (preference.toLowerCase()) {
        case "italian":
            recommendation = "You should try some delicious pizza or pasta!";
            break;
        case "mexican":
            recommendation = "Tacos, burritos, or nachos might satisfy your craving!";
            break;
        case "chinese":
            recommendation = "How about some tasty dim sum or fried rice?";
            break;
        default:
            recommendation = "Sorry, we don't have a recommendation for that preference.";
    }

    document.getElementById("recommendation").innerText = recommendation;
}
