//On clicking 'All Posts' button - user is redirected to postslist.html page
document.getElementById("all-post-btn").onclick = function () {
    location.href = './html/postslist.html';
}

//This functions toggles create post modal form
//This function accepts one parameter displayMode which can be 'none' or 'block'
//The passed value is set as respective modal's display style value.
function toggleCreatPost(displayMode) {
    var modal = document.getElementById('create-post');
    modal.style.display = displayMode;
}