var main = document.getElementById('main-container').innerHTML;

var header = '<div class="head-left">' + 
'<h1 class="heading">ScriBBler</h1>' + 
'Explore, Imagine, Create' +
'</div>' +
'<div class="head-right">' +
'<div class="sign-button-div">' +
'<button class="headbutton" onclick = "toggleSignUp(\'block\')" type="button">Sign Up</button>' +
'<button class="headbutton" type="button">Sign In</button>' +
'</div>' +
'</div>';

var signUp = '<div id="signup" class="modal1">' +
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
'</div>';

document.getElementById('main-container').innerHTML = header + signUp + document.getElementById('main-container').innerHTML;

function toggleSignUp(displayMode) {
    var modal = document.getElementById('signup');
    modal.style.display = displayMode;
}

function toggleSignIn(displayMode) {
    var modal = document.getElementById('signin');
    modal.style.display = displayMode;
}
