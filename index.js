// let errorText = document.querySelector('.error-text');
// let main =  document.querySelector('.main');
// let userLink = document.querySelector('.user-link');
// let userImage = document.querySelector('.user-img');
// let person = document.querySelector('.person-text');
// let userNameElement = document.querySelector('.text-username'); 
// let errorMessage = document.querySelector('.error');
// let input = document.querySelector('.type-username');
// let bio = document.querySelector('.bio-text');
// let blogLinkElement = document.querySelector(".detail-text-link");
// let xLinkElement = document.querySelector(".x-link");
// let locSvgElement = document.querySelector(".loc-svg");
// let locTextElement = document.querySelector(".loc-text");
// let blogSvgElement = document.querySelector(".blog-svg");
// let blogTextElement = document.querySelector(".detail-text");
// let xSvgElement = document.querySelector(".x-svg");
// let xTextElement = document.querySelector(".x-text");
// let totalStarsTextElement = document.querySelector(".total-stars-text");
// let totalForksTextElement = document.querySelector(".total-forks-text");
// let totalWatchersTextElement = document.querySelector(".total-watchers-text");
// let errorMessageElement = document.querySelector(".error-message");
// let usernameInputElement = document.querySelector(".username-input");

// function generateUser(event) {
//     event.preventDefault();
//     let userName = input.value;
//     let userApi = `https://api.github.com/users/${userName}`;
//     let repoApi = `https://api.github.com/users/${userName}/repos`;

//     axios.get(userApi)
//     .then(function(response) {
//         errorText.textContent = "";
//         // main.classList.replace("main", "main");
//         userLink.setAttribute("href", response.data.html_url);
//         userImage.setAttribute("src", response.data.avatar_url);
//         userImage.setAttribute("alt", response.data.name);
//         userImage.setAttribute("title", response.data.name);
//         person.textContent = response.data.name;
//         userNameElement.textContent = response.data.login; 
//         bio.textContent = response.data.bio;

//         if (response.data.location == null) {
//             locSvgElement.classList.remove("d-block");
//             locSvgElement.classList.add("d-none");
//             locTextElement.textContent = "";
//         } else {
//             locSvgElement.classList.replace("d-none", "d-block");
//             locTextElement.textContent = " " + response.data.location;
//         }

//         if (response.data.blog == null || response.data.blog === "") {
//             blogSvgElement.classList.remove("d-block");
//             blogSvgElement.classList.add("d-none");
//             blogTextElement.textContent = "";
//         } else {
//             blogSvgElement.classList.replace("d-none", "d-block");
//             blogTextElement.textContent = " " + response.data.blog;
//             blogLinkElement.setAttribute("href", `https://${response.data.blog}`);
//         }

//         if (response.data.x_username == null) {
//             xSvgElement.classList.remove("d-block");
//             xSvgElement.classList.add("d-none");
//             xTextElement.textContent = "";
//         } else {
//             xSvgElement.classList.replace("d-none", "d-block");
//             xTextElement.textContent = " " + "@" + response.data.x_username;
//             xLinkElement.setAttribute("href", `https://x.com/${response.data.x_username}`);
//         }
//     })
//     .catch(function(error) {
//         if (error.response.status === 404) {
//             errorMessageElement.textContent = "User not found";
//         } else if (error.response.status === 403) {
//             errorMessageElement.textContent = "Access to GitHub API forbidden";
//         }
//         errorMessageElement.classList.replace("d-none", "d-block");
//     });

//     axios.get(repoApi)
//     .then(function(response) {
//         let repositoryDetailsElement = document.querySelector(".repository-details");
//         let reposList = response.data;
//         let numberOfRepos = 0;
//         let totalStars = 0;
//         let totalForks = 0;
//         let totalWatchers = 0;

//         repositoryDetailsElement.innerHTML = "";

//         reposList.forEach(function(item) {
//             totalStars += item.stargazers_count;
//             totalForks += item.forks_count;
//             totalWatchers += item.watchers_count;
//         });

//         totalStarsTextElement.textContent = totalStars;
//         totalForksTextElement.textContent = totalForks;
//         totalWatchersTextElement.textContent = totalWatchers;

//         for (let i = 0; i < reposList.length; i++) {
//             let reposElement = `<div class="repos repos${numberOfRepos}"><div class="title"><h3 class="repos-title${numberOfRepos}"></h3></div><div class="description"><p class="repos-paragraph${numberOfRepos}"></p></div><div class="topics"></div></div>`;

//             repositoryDetailsElement.innerHTML += reposElement;
//             let reposTitleSelector = document.querySelector(`.repos-title${numberOfRepos}`);
//             let reposParagraphSelector = document.querySelector(`.repos-paragraph${numberOfRepos}`);
//             let topicParentElement = document.querySelector(`.repos${numberOfRepos} .topics`);

//             reposTitleSelector.textContent = reposList[i].name;
//             reposParagraphSelector.textContent = reposList[i].description;

//             for (let j = 0; j < reposList[i].topics.length; j++) {
//                 let topicElement = `<span class="topic topic${numberOfRepos}">${reposList[i].topics[j]}</span>`;
//                 topicParentElement.innerHTML += topicElement;
//             }

//             numberOfRepos++;
//         }
//     });
// }


// function generateUser(event) {
//     event.preventDefault();
//     let userName = input.value;
//     let userApi = `https://api.github.com/users/${userName}`;

//     axios.get(userApi)
//     .then(function(response) {
//         errorText.textContent = ""; // Clear any previous error messages
//         userLink.setAttribute("href", response.data.html_url);
//         userImage.setAttribute("src", response.data.avatar_url);
//         userImage.setAttribute("alt", response.data.name);
//         userImage.setAttribute("title", response.data.name);
//         userNameElement.textContent = response.data.login; 
//         // Hide other elements
//         bio.textContent = "";
//         locSvgElement.classList.replace("d-block", "d-none");
//         blogSvgElement.classList.replace("d-block", "d-none");
//         xSvgElement.classList.replace("d-block", "d-none");
//         // Hide repository details
//         repositoryDetailsElement.innerHTML = "";
//     })
//     .catch(function(error) {
//         if (error.response.status === 404) {
//             // Show error message for user not found
//             errorText.textContent = "User not found";
//             // Clear user information and hide other elements
//             userLink.removeAttribute("href");
//             userImage.removeAttribute("src");
//             userNameElement.textContent = ""; 
//             bio.textContent = "";
//             locSvgElement.classList.replace("d-block", "d-none");
//             blogSvgElement.classList.replace("d-block", "d-none");
//             xSvgElement.classList.replace("d-block", "d-none");
//             // Hide repository details
//             repositoryDetailsElement.innerHTML = "";
//         } else if (error.response.status === 403) {
//             // Show error message for forbidden access
//             errorText.textContent = "Access to GitHub API forbidden";
//         }
//     });
// }

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
