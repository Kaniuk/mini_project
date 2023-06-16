let div = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => buildArrOfObjectBlock(users));

function buildArrOfObjectBlock(arr) {
    for (const user of arr) {
        let userWrapper = document.createElement('div');
        let link = document.createElement('button');
        link.innerText = 'show details';
        link.onclick = function () {
            document.location = `user-details.html?id=${user.id}`;
        };
        div.append(userWrapper);
        let userDiv = document.createElement('div');
        userDiv.innerHTML = `Name -  ${user.name} <br> UserName - ${user.username} <br> id - ${user.id}`;
        userDiv.style.fontSize = '25px';
        userWrapper.append(userDiv, link);

    }
}