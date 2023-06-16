let postsElem = document.getElementsByClassName('user-posts')[0];
let backButton = document.getElementsByClassName('back')[0];

const urlSearchParams = new URLSearchParams(window.location.search);
const userId = urlSearchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        buildArrOfObjectBlock(posts);
    });

function buildArrOfObjectBlock(arr) {
    for (const post of arr) {
        let userWrapper = document.createElement('div');
        let link = document.createElement('button');
        link.innerText = 'show post';
        link.onclick = function () {
            document.location = `user-postDetails.html?id=${post.id}`;
        };
        postsElem.append(userWrapper);
        let postDiv = document.createElement('div');
        postDiv.innerHTML = `id - ${post.id} <br/> title - ${post.title}`;
        userWrapper.append(postDiv, link);
    }
}

let back = document.createElement('button');
back.innerText = 'back to user';
back.onclick = function () {
    history.back();
};
let backToUsersButton = document.createElement('button');
backToUsersButton.innerText = 'back to users page';
backToUsersButton.onclick = function () {
    document.location = `index.html`;
};
backButton.append(back, backToUsersButton);