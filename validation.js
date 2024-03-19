const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const Phone = document.getElementById("Phone");
const password = document.getElementById("password");
const cpasssword = document.getElementById("cpasssword");

// add Events
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const sendData = (count,sRate,usernameVal) => {
  if(count === sRate){
   alert("registration succesfull") ;
   swal("Welcome! " + usernameVal, "registration succesfull", "success") ;
   location.href = `welcome.html?username = ${usernameVal}`
  }
};

// for final data validate

const SuccessMsg = (usernameVal) => {
  let formCon = document.getElementsByClassName("form-control");
  var count = formCon.length - 1;
  for (var i = 0; formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      var sRate = 0 + i;
      console.log(sRate);
      sendData(count, sRate,usernameVal);
    } else {
      return false;
    }
  }
};
// more email validate
const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf(".");
  if (dot < atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};
// define the validate function

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const PhoneVal = Phone.value.trim();
  const passwordVal = password.value.trim();
  const cpassswordVal = cpasssword.value.trim();

  // validate username
  if (usernameVal === "") {
    setErrorMsg(username, "username cannot be blank");
  } else if (usernameVal.length < 2) {
    setErrorMsg(username, "username min 3 char");
  } else {
    SetSuccessMsg(username);
  }

  // validate email
  if (emailVal === "") {
    console.log('email empty')
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not a Valid Email");
  } else {
    SetSuccessMsg(email);
  }

  // validate phone
  if (PhoneVal === "") {
    setErrorMsg(Phone, "phone cannot be blank");
  } else if (PhoneVal.length < 10) {
    setErrorMsg(Phone, "Not a Valid phone number");
  } else {
    SetSuccessMsg(Phone);
  }

  // validate password
  if (passwordVal === "") {
    setErrorMsg(password, "password cannot be blank");
  } else if (passwordVal.length < 5) {
    setErrorMsg(password, "Minimum 6 Characters");
  } else {
    SetSuccessMsg(password);
  }

  // validate Cpassword
  if (cpassswordVal === "") {
    setErrorMsg(cpasssword, "confirm password cannot be blank");
  } else if (cpassswordVal < cpassswordVal) {
    setErrorMsg(cpasssword, "cpasssword are not maching");
  } else {
    SetSuccessMsg(cpasssword);
  }
  SuccessMsg(usernameVal);
};

function setErrorMsg(input, errormsgs) {

  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
  small.textContent = errormsgs;
}

function SetSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
