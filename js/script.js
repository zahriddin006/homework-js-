
var normalAge = 18;
var userAge = parseInt(prompt("Yoshingizni kiriting"));
var bodyText = document.createElement("h1");
bodyText.style.textAlign = "center";
bodyText.style.color = "white";
bodyText.style.fontWeight = "bold";

if(userAge >= normalAge){
  document.body.style.backgroundColor = "lightgreen";
  bodyText.textContent = "Tabriklaymiz musobaqada qatnasha olasiz";
  document.body.append(bodyText);
} else{
  document.body.style.backgroundColor = "red";
  bodyText.textContent = "kechirasiz yoshingiz ozgina kichik";
  document.body.append(bodyText);
}
