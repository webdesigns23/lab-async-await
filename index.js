// Write your code here!
//1. Fetch data from an API
//Fetch Data with.then
//fetch('https://jsonplaceholder.typicode.com/posts')
// displayPosts();
//       .then(response => response.json())
//       .then(json => console.log(json))

//       displayPosts()


//2.Display Posts
function displayPosts(posts) {
    //pass in the array of posts and loop through the posts list
    posts.forEach((post) => {
        const postList = document.querySelector("#post-list");

        const li = document.createElement('li');      
        const h1 =  document.createElement('h1');
        h1.textContent = post.title
        const p = document.createElement('p');
        p.textContent = post.body

        li.append(h1, p);
        postList.append(li);

    });
    };

//Refactor with asyn/await
async function fetchAndDisplayPosts() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);

    }catch (error) {
        console.error("Error fethcing user data:", error);
    }
    
};

fetchAndDisplayPosts();


