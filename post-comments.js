let commentsElem = document.getElementsByClassName('comments')[0];
let backButton = document.getElementsByClassName('back')[0];

const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        buildArrOfObjectBlock(comments);
    });

function buildArrOfObjectBlock(arr) {
    for (const comment of arr) {
        let wrapper = document.createElement('div');
        commentsElem.append(wrapper);
        for (const key in comment) {
            let commentDiv = document.createElement('div');
            commentDiv.innerText = `${key} - ${comment[key]}`;
            wrapper.append(commentDiv);
        }

    }
}

let back = document.createElement('button');
back.innerText = 'back to post';
back.onclick = function () {
    history.back();
};
let backToUsersButton = document.createElement('button');
backToUsersButton.innerText = 'back to users page';
backToUsersButton.onclick = function () {
    document.location = `index.html`;
};

backButton.append(back, backToUsersButton);