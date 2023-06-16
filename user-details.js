let userElem = document.getElementsByClassName('user-details')[0];

const urlSearchParams = new URLSearchParams(window.location.search);
const userId = urlSearchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        buildObjectBlock(user);

        let userPostsButton = document.createElement('button');
        userPostsButton.innerText = 'post of current user';
        userPostsButton.onclick = function () {
            document.location = `user-posts.html?id=${user.id}`;
        };
        userElem.append(userPostsButton);
    });

function buildObjectBlock(object) {
    for (const key in object) {
        if (!object[key]) continue;

        if (typeof object[key] === 'object') {
            let div = document.createElement('div');
            div.innerText = `${key} : `;
            buildObjectBlock(object[key]);
        } else {
            let userDiv = document.createElement('div');
            userDiv.innerText = `${key} - ${object[key]} `;
            userElem.append(userDiv, back);
        }
    }
}

let back = document.createElement('button');
back.innerText = 'back';
back.onclick = function () {
    history.back();
};
