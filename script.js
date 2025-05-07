function calculateFootprint() {
    const generatorHours = parseFloat(document.getElementById('generatorHours').value);
    const transportKm = parseFloat(document.getElementById('transportKm').value);

    const generatorEmission = generatorHours * 2.0; // kg CO2 per hour (example factor)
    const transportEmission = transportKm * 0.2; // kg CO2 per km (example factor)

    const totalEmission = generatorEmission + transportEmission;

    document.getElementById('result').innerText = 
        `Your weekly carbon footprint is approximately ${totalEmission.toFixed(2)} kg CO₂.`;
}

function checkAnswer(option) {
    let message;
    if (option === 'b') {
        message = 'Correct! Fuel-powered machines like generators and motorcycles are major contributors.';
    } else {
        message = 'Incorrect. Try again! Think about fuel-based activities.';
    }
    document.getElementById('quizResult').innerText = message;
}
