const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");

  // Validate inputs
  if (!height || height <= 0 || isNaN(height)) {
    result.innerHTML = "Please provide a valid height.";
    result.style.color = "red";
    return;
  }

  if (!weight || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please provide a valid weight.";
    result.style.color = "red";
    return;
  }

  // Calculate BMI
  const BMI = (weight / ((height * height) / 10000)).toFixed(2);
  result.innerHTML = `<span>${BMI}</span>`;

  // Feedback on BMI range
  const messages = document.querySelectorAll(".weight-guide p");
  messages.forEach((msg) => {
    msg.style.backgroundColor = "";
    msg.style.padding = "";
  });

  if (BMI < 18.6) {
    messages[0].style.backgroundColor = "yellow";
    messages[0].style.padding = "5px";
    result.style.color = "yellow";
  } else if (BMI >= 18.6 && BMI <= 24.9) {
    messages[1].style.backgroundColor = "green";
    messages[1].style.padding = "5px";
    result.style.color = "green";
  } else {
    messages[2].style.backgroundColor = "red";
    messages[2].style.padding = "5px";
    result.style.color = "red";
  }
});
