function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    const bmi = weight / Math.pow(height / 100, 2);
    const resultElement = document.getElementById("result");
}