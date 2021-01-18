//This functions switches / toggles between edit and save mode for post in post.html

function toggleEditSaveMode() {
    var editSaveIcon;

    //If the title is NOT in editable mode - switch to edit mode
    if (document.getElementById("blog-title").contentEditable == "false") {
        //Set contentEditable = true for post title and body
        //This allows user to be able to edit title and body content
        document.getElementById("blog-title").contentEditable = "true";
        document.getElementById("post-body").contentEditable = "true";

        //Change icon from 'edit' to 'save'
        editSaveIcon = 'Save <i style="font-size: 14px;" class="fa fa-save" id="edit-save-icon"></i>';
        document.getElementById("post-edit").innerHTML = editSaveIcon;

        //Draw a boundary around editable itmes to highlight user which elements / items
        // can be editted.
        document.getElementById('blog-title').style.border = '2px solid pink';
        document.getElementById('post-body').style.border = '2px solid pink';
    } 
    //If the title IS in editable mode - switch to non EDIT mode ie SAVE mode
    else {
        //Set contentEditable = false for post title and body
        //This allows user to be able to save editted title and body content
        document.getElementById("blog-title").contentEditable = "false";
        document.getElementById("post-body").contentEditable = "false";

        //Change icon from 'edit' to 'save'
        editSaveIcon = 'Edit <i style="font-size: 14px;" class="fa fa-edit" id="edit-save-icon"></i>';
        document.getElementById("post-edit").innerHTML = editSaveIcon;

        //Remove boundary around editable itmes to highlight user that the changes have taken place
        document.getElementById('blog-title').style.border = 'none';
        document.getElementById('post-body').style.border = 'none';
    }
}

//Default number of likes
var likes = 0;

function incrementLikeCounter(){
    //increment counter by 1
    likes += 1;
    //icon change from 'Like' to 'Liked!'
    //Since editting innerHTML is slow we only do this step when likes==1 (in place of likes>=1)
    //The icon changes from 'Like' to 'Liked' and becomes static there on. 
    if(likes == 1){
        document.getElementById("like-post").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    }
    displayLikeCounter();
}

//Function for displaying total likes (default text in case of 0 likes) and dynamically changing icon on being liked by user
function displayLikeCounter() {

    //If likes == 0 then display default text as per requirement
    if ( likes == 0 ) {
        document.getElementById('like-counter').innerHTML =  "Be the first one to like this!";
    }
    //If likes == 1 then display "1 person likes this!" text as per requirement
    else if ( likes == 1 ) {
        document.getElementById('like-counter').innerHTML = likes + " person likes this!";
    }
    //If likes > 1 then display #likes as per requirement
    else {
        document.getElementById('like-counter').innerHTML = likes + " people like this!";
    }
}

displayLikeCounter() 

//Function to handle adding of comments when the user enters a comment below the blog
// and showing it in lastest first on the top order
function addComment() {
    // returning incase user clicks comment button but doesnt add any information
    if (document.getElementById("userComments").value == "") {
        return;
    }

    // change the background to gray color :
    document.getElementById("add-comments-to-list").style['background-color'] = 'lightgray';

    // pre-pend the new comment
    var commentList = document.getElementById("userComments").value;
    var newComment = '<p class="each-comment">'+ commentList + '</p>';
    var getDiv = document.getElementById('add-comments-to-list');
    getDiv.innerHTML = newComment + getDiv.innerHTML;
    
    // Making the input field blank
    document.getElementById("userComments").value = "";
}