function calculateBMI() {
	let weight = document.getElementById("weight").value;
	let height = document.getElementById("height").value / 100;
	let bmi = weight / (height * height);

	let result = document.getElementById("result");

	if (bmi < 18.5) {
		result.innerHTML = "BMI Anda: " + bmi.toFixed(1) + " (Underweight)";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		result.innerHTML = "BMI Anda: " + bmi.toFixed(1) + " (Normal weight)";
	} else if (bmi >= 25 && bmi <= 29.9) {
		result.innerHTML = "BMI Anda: " + bmi.toFixed(1) + " (Overweight)";
	} else {
		result.innerHTML = "BMI Anda: " + bmi.toFixed(1) + " (Obesity)";
	}
}
