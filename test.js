function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  // function myFunction(x) {
  //   if (x.matches) {
  //     // If media query matches
  
  //     var list = elContent.classList;
  //     if (!list.contains("is-hidden")) {
  //       elContent.classList.add("is-hidden");
  //     }
  //   }
  // }
  
  // // Create a MediaQueryList object
  // var x = window.matchMedia("(max-width: 991px)");
  
  // // Call listener function at run time
  // myFunction(x);
  
  // // Attach listener function on state changes
  // x.addEventListener("change", function () {
  //   myFunction(x);
  // });
