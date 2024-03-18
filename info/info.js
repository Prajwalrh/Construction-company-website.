document.getElementById("src").addEventListener("click", function() {
    var ul = document.querySelector(".ul");
    ul.classList.toggle("navbaractive");
    // ul.style.visibility = ul.style.visibility === "visible" ? "hidden" : "visible";
});

document.getElementById("animatedButton").addEventListener("click", function() {
    
    var button = this;
    var clicked = true;
    if (clicked === true)
    {
        var bt = document.getElementById("fname");
        button.innerHTML= 'Booked!!';
        bt.value  ='';
        
    }
    // Add rotation animation
    button.style.animation = "rotate 1s ease-in-out";
  
    // Add scale animation
    setTimeout(function() {
      button.style.animation = "scale 1s ease-in-out";
    }, 1000);
  
    // Add color change animation
    setTimeout(function() {
      button.style.animation = "color-change 1s ease-in-out";
    }, 2000);
  
    // Reset animation after completion
    setTimeout(function() {
      button.style.animation = "none";
    }, 3000);
  });