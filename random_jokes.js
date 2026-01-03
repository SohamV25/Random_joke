let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    console.log("button clicked");
    let joke = await getRandomJoke();
    console.log(joke);
    fillSetup(joke.setup);
    fillPunchline(joke.punchline)
})

const url = "https://official-joke-api.appspot.com/jokes/random/1"

async function getRandomJoke(){
    let data = await fetch(url)
    let json_data = await data.json();
    return json_data[0];
}

function fillSetup(data){
    let setup_line_span = document.getElementById("getSetup");
    let h3 = document.querySelector("h3");
    setup_line_span.textContent = data;
    h3.classList.remove("blink-css");
}

function fillPunchline(data){
    let punch_line_span = document.getElementById("getPunchline");
    punch_line_span.textContent = data;
}