function isValidAmount(amount) {
    return amount >= 5 && amount <= 500;
}

function calculateTip() {
    let amount = parseFloat(document.getElementById("amount").value);
    let quality = document.getElementById("quality").value;

    if (!isValidAmount(amount)) {
        document.getElementById("result").innerText = "Invalid amount. Enter a value between $5.00 and $500.00.";
        return;
    }

    const tipRates = { great: 0.2, ok: 0.15, poor: 0.1 };
    let tip = amount * tipRates[quality];

    document.getElementById("result").innerText = 
        `For a service amount of $${amount.toFixed(2)}, a ${quality} service tip is $${tip.toFixed(2)}.`;
}