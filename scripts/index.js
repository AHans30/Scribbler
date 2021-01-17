document.getElementById("all-post-btn").onclick = function () {
    location.href = './html/postslist.html';
}

function toggleCreatPost(displayMode) {
    var modal = document.getElementById('create-post');
    modal.style.display = displayMode;
}