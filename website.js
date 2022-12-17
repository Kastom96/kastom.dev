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


//Email copy function
var copyEmailbutton = document.querySelector('.copy-link-button');

copyEmailbutton.addEventListener('click', function(event)
{
    var copyTextarea = document.querySelector('.copy-link-input');
    copyTextarea.focus();
    copyTextarea.select();

    try 
    {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    }   
    catch (err)
    {
        console.log('Oops, unable to copy');
    }
});


