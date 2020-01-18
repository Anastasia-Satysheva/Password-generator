var clipboard = new Clipboard('.copy')
var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  spcharacters = "`~!@#$%^&*()_+-={}|[]",
  lowercaseInput = document.querySelector("#lowercase"),
  uppercaseInput = document.querySelector("#uppercase"),
  spcharactersInput = document.querySelector("#spcharacters"),
  numbersInput = document.querySelector("#numbers"),
  passwordField = document.querySelector("#passwordfield"),
  generateButton = document.querySelector("#generate"),
  copyButton = document.querySelector("#copy"),
  passwordlength,
  finalPassword,
  passwordSet;

  var condition= false;
    do {
        var passwordlength= prompt("Hey! We are going to make fancy and secure password for you! Please, enter your password length number from 8 to 128! Don't cheat!");
            if ((isNaN(passwordlength) === true) || passwordlength<8 || passwordlength>128) {
               condition=false;
               alert("Be careful! Enter a number from 8-128!")
              } else {
              condition=true;
              document.getElementById("demo").innerHTML =
              "Perfect! Your password will have "+ passwordlength + " symbols! Now, please, select following options and click Ready to generate!";
  }
    } while(condition===false);
    
console.log(passwordlength)

function generate() {
  finalPassword = "";
  passwordSet = "";
  if (lowercaseInput.checked) {
    passwordSet = passwordSet + lowercase;
  }
  if (uppercaseInput.checked) {
    passwordSet = passwordSet + uppercase;
  }
  if (spcharactersInput.checked) {
    passwordSet = passwordSet + spcharacters;
  }
  if (numbersInput.checked) {
    passwordSet = passwordSet + numbers;
  }


  if (8 > passwordlength) {
    alert("Password is too short :( ");
    return;
} else if (passwordlength > 128) {
    alert("Password length too large");
    return;
}
 
  for (let i = 0; i < passwordlength; i++) {
    finalPassword = finalPassword + passwordSet.charAt(Math.floor(Math.random() * passwordSet.length)
    );
  }

  if (finalPassword == "") {
    alert("Please select an option before generating!");
  } else {
    passwordField.innerHTML = finalPassword;
  }
  copyButton.setAttribute("data-clipboard-text", finalPassword)
}
generateButton.addEventListener("click", generate);


clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  let alertbox = document.getElementById('alert');
  alertbox.innerHTML = "Copied!"
  alertbox.classList.add('success');
  setTimeout(function(){ 
    alertbox.classList.remove('success');
  }, 3000);
  
  e.clearSelection();
});

