let postElem = document.getElementsByClassName('post')[0];

const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        buildObjectBlock(post);

        let postCommentsButton = document.createElement('button');
        postCommentsButton.innerText = 'comments of current post';
        postCommentsButton.onclick = function () {
            document.location = `post-comments.html?id=${post.id}`;
        };
        postElem.append(postCommentsButton);

    });

function buildObjectBlock(object) {
    for (const key in object) {
        let postDiv = document.createElement('div');
        postDiv.innerText = `${key} - ${object[key]} `;
        postElem.append(postDiv, back, backToUsersButton);
    }
}

let back = document.createElement('button');
back.innerText = 'back to posts';
back.onclick = function () {
    history.back();
};
let backToUsersButton = document.createElement('button');
backToUsersButton.innerText = 'back to users page';
backToUsersButton.onclick = function () {
    document.location = `index.html`;
};
