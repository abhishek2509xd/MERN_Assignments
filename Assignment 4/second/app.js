const form = document.getElementsByName("form")[0];
form.addEventListener("submit", (event) => {
  let valid = 1;
  let error = "";
  const name = document.querySelector("#name").value;
  if (name == "") {
    error = "Please enter your name.<br/>";
    valid = 0;
  }
  const email = document.querySelector("#email").value;
  if (email == "") {
    error += "Please enter your email.<br/>";
    valid = 0;
  }
  const phone = document.querySelector("#phone").value;
  if (phone == "") {
    error = +"Please enter your phone.<br>";
    valid = 0;
  }
  const genderValues = document.getElementsByName("Gender");
  let gender = "";
  for (let i = 0; i < genderValues.length; i++) {
    if (genderValues[i].checked) {
      gender = genderValues[i].value;
    }
  }
  if (gender == "") {
    error += "Please select your gender.<br/>";
    valid = 0;
  }
  const address = document.querySelector("#address").value;
  if (address == "") {
    error = +"Please enter your address.<br>";
    valid = 0;
  }
  const pincode = document.querySelector("#pincode").value;
  if (pincode == "") {
    error = +"Please enter your pincode.<br>";
    valid = 0;
  }
  const password = document.querySelector("#password").value;
  if (password == "") {
    error = +"Please enter your password.<br>";
    valid = 0;
  }
  const confirmPassword = document.querySelector("#Password1").value;
  if (confirmPassword == "") {
    error = +"Please confirm your password.<br>";
    valid = 0;
  }
  if (password != confirmPassword) {
    error += "Passwords do not match.<br/>";
  }
  const check = document.querySelector("#iagree").checked
    ? document.querySelector("#iagree").value
    : "";
  if (check == "") {
    error += "Please check the agree box.<br/>";
    valid = 0;
  }
  if (valid == 0) {
    document.querySelector("#msg").style.display = "block";
    document.querySelector("#msg").innerHTML = "error";
    document.querySelector("#msg").style.color = "red";
  }
  if (valid == 1) {
    document.querySelector("#msg").style.display = "block";
    document.querySelector("#msg").style.color = "blue";
    document.querySelector("#msg").innerText = "Submittted!";
    console.log(
      `Name-${name}\nEmail-${email}\nPhone-${phone}\nGender-${gender}\nAddress-${address}\nPincode-${pincode}\nPassword-${password}`
    );
  }
  event.preventDefault();
});