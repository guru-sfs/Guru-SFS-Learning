//For Reflactor File

export function fillinput(input) {
  document.getElementById("display").value += input;
}

export function calculate() {
  const display = document.getElementById("display");
  display.value = eval(display.value);
}

export function clearr() {
  document.getElementById("display").value = "";
}

//For Validation.html file
export function email_match(mail) {
  let a = /\S+@\S+\.\S+/.test(mail);
  return a;
}

export function pass_check(pass) {
  if (pass.length >= 6) {
    return true;
  } else {
    return false;
  }
}

export function pass_match(pass, cpass) {
  if (pass === cpass) {
    return true;
  } else {
    return false;
  }
}
export function validate() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("confirmpass").value;
  console.log(email, pass, cpass);
  if (email_match(email) && pass_check(pass) && pass_match(cpass)) {
    document.getElementById("rslt").textContent = "Sucessfull";
  }
}
