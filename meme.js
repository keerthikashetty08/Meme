let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
// api url
let url= " https://meme-api.com/gimme/";
//Array of subreddits of your choise
let subreddits= ["catmemes","wholesomemes","dogmemes","me_irl"];

//function to get random meme
let getMeme = () => {
    //CHoose a random subreddit from the subreddits array
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    //fetch data from the api
    fetch(url+randomSubreddit).then(resp => resp.json()).then(data => {
        console.log(data);
        let memeImg = new Image();
        //display meme image and title only after the image loads 
        memeImg.onload = () =>{
            meme.src = data.url;
        }
        memeImg.src = data.url;
        title.innerHTML= data.title;
    });
};

//call the getMeme() on buttons click and on window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load",getMeme);