function mySubmit() {
  let username = document.getElementById("input").value;
  let text = document.getElementById("text");
  text.innerHTML = "Hello Welcome To This Website" + " " + username;
}