let errorText = document.querySelector('.error-text');
let userLink = document.querySelector('.user-link');
let userImage = document.querySelector('.user-img');
let userNameElement = document.querySelector('.text-username'); 
let input = document.querySelector('.type-username');

function generateUser(event) {
    event.preventDefault();
    let userName = input.value;
    let userApi = `https://api.github.com/users/${userName}`;

    axios.get(userApi)
    .then(function(response) {
        errorText.textContent = ""; 
        userLink.setAttribute("href", response.data.html_url);
        userImage.setAttribute("src", response.data.avatar_url);
        userImage.setAttribute("alt", response.data.name);
        userImage.setAttribute("title", response.data.name);
        userNameElement.textContent = response.data.login; 
        
    })
    .catch(function(error) {
        if (error.response.status === 404) {
            errorText.textContent = "User not found";
            userLink.removeAttribute("href");
            userImage.removeAttribute("src");
            userNameElement.textContent = ""; 
        } else if (error.response.status === 403) {
            errorText.textContent = "Access to GitHub API forbidden";
        }
    });
}
