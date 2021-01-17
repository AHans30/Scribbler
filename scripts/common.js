//div containing header ie 'ScriBBler' heading and subheading and two buttons for sign-up and sign-in buttons
var heading =
  '<div class="head-left">' +
  '<h1 class="heading">ScriBBler</h1>' +
  'Explore, Imagine, Create' +
  '</div>' +
  '<div class="head-right">' +
  '<div class="sign-button-div">' +
  '<button class="headbutton" onclick = "toggleSignUp(\'block\')" type="button">Sign Up</button>' +
  '<button class="headbutton" onclick="toggleSignIn(\'block\')" type="button">Sign In</button>' +
  '</div>' +
  '</div>'

//div containing sign-up modal form. As defined in common.css - this is hidden (display:none) by default
var signUp =
  '<div id="signup" class="modal1">' +
  '<form class="form1">' +
  '<div class="headmod">' +
  '<div class="headmodleft">' +
  '<h3>Get Started</h3>' +
  '</div>' +
  '<div class="headmodright">' +
  '<i class="fa fa-times" aria-hidden="true" onclick="toggleSignUp(\'none\')"></i>' +
  '</div>' +
  '</div>' +
  '<label><b>Name</b></label>' +
  '<input type="text" placeholder="Enter your name" required>' +
  '<label><b>Username</b></label>' +
  '<input type="text" placeholder="Enter your username"  required>' +
  '<label><b>Password</b></label>' +
  '<input type="password" placeholder="Enter your password"  required>' +
  '<label><b>Confirm Password</b></label>' +
  '<input type="password" placeholder="Re-enter your password" required>' +
  '<button  class="buttonmodal">Sign Up</button>' +
  '</form>' +
  '</div>'

//div containing sign-in modal form. As defined in common.css - this is hidden (display:none) by default
var signIn =
  '<div id="signin" class="modal">' +
  '<form class="form1">' +
  '<div class="headmod">' +
  '<div class="headmodleft">' +
  '<h3>Welcome Back!</h3>' +
  '</div>' +
  '<div class="headmodright">' +
  '<i class="fa fa-times" aria-hidden="true" onclick="toggleSignIn(\'none\')"></i>' +
  '</div>' +
  '</div>' +
  '<label><b>Username</b></label>' +
  '<input type="text" placeholder="Enter your username" required>' +
  '<label><b>Password</b></label>' +
  '<input type="password" placeholder="Enter your password" required>' +
  '<button  class="buttonmodal">Sign In</button>' +
  '<div class="footmod">Not a member?<span class="highlight" onclick="toggleSignUp(\'block\')" style="width:auto;">Sign Up</span></div>' +
  '</form>' +
  '</div>'

//we define a div containing elements of header ie heading + sign up modal + sign in modal
const headerContainer = document.createElement('div')
headerContainer.id = 'header-container'
headerContainer.innerHTML = heading + signUp + signIn
document.body.prepend(headerContainer)

//Function to toggle sign up modal from display:none to display:block or vice-versa
function toggleSignUp (displayMode) {
  toggleSignIn('none')
  var modal = document.getElementById('signup')
  modal.style.display = displayMode
}

//Function to toggle sign in modal from display:none to display:block or vice-versa
function toggleSignIn (displayMode) {
  var modal = document.getElementById('signin')
  modal.style.display = displayMode
}
