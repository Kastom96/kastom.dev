
// Define the first animation function
var i = 0;
var txt1 = "Hi :) I'm Thomas,";
var speed = 100;

function typeWriter() 
{   
    if (i < txt1.length) 
    {
        document.getElementById("first-line").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

  // Define the second animation function
var j = 0;
var txt2 = "Welcome to my Website.";
var speed = 100;

function typeWriter2() 
{
    if (j < txt2.length) 
    {
      document.getElementById("second-line").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
}
  
  // Start the first animation when the page has finished loading
  window.onload = typeWriter;
  
  // Start the second animation after the first animation has finished
  setTimeout(typeWriter2, txt1.length * speed);


document.addEventListener('DOMContentLoaded', function(){

  const toggle = document.getElementById('language-button');
  const dropdownMenu = document.getElementById('language-menu');

  //closes the language dropdown menu by clicking anywhere but the icon
  document.onclick = function(e)
  {
    if(e.target.id !== 'language-menu' && e.target.id !== 'language-button' && e.target.id !== 'language-icon')
    {
        dropdownMenu.classList.remove('new-class');
        dropdownMenu.classList.remove('active') 
    }
  }
  //opens and closes the language dropdown menu by clicking on the icon
  toggle.onclick = function()
  {
    dropdownMenu.classList.toggle('active');
    dropdownMenu.classList.toggle('new-class');
  }
  
document.querySelector("#copy").addEventListener("click", copy); //adds to the copyMail() function
});

function copyMail()
{
    var copyText = document.querySelector("#copymail");
    copyText.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(document.createRange());
    var notification = document.querySelector("#notification");
    notification.innerHTML = "Copied!";
    notification.classList.add("show");
    setTimeout(function() {
        notification.classList.remove("show");
      }, 3000);
}

/*window.onload = function() {
    // Get the body element
    const body = document.body;
  
    // Set an interval to update the body every 100 milliseconds
    setInterval(() => {
      // Generate a random number between 0 and 1
      const randomNumber = Math.round(Math.random());
  
      // Set the body's background color based on the random number
      if (randomNumber === 0) {
        body.style.backgroundColor = "white";
      } else {
        body.style.backgroundColor = "black";
      }
    }, 100);
  };*/