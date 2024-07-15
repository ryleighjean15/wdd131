document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});


document.getElementById('calculateBmi').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = calculateBmi(weight, height);
    document.getElementById('bmiResult').textContent = `Your BMI is ${bmi.toFixed(2)}`;
});

function calculateBmi(weight, height) {
    return weight / (height * height);
}
