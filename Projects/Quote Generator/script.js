document.addEventListener("DOMContentLoaded",()=>{
    generateQuote();
});

function changeColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.documentElement.style.setProperty('--primary',`#${randomColor}`);
}

async function generateQuote() {
    changeColor();
    let now = new Date();
    let hr = now.getHours();

    let timeday = document.querySelector('span');
    var text = "";
    if(hr >= 0 && hr < 12) {
        text = "morning";
    }else if(hr >= 12 && hr < 17) {
        text = "afternoon";
    }else{
        text = "evening";
    }

    timeday.innerHTML = text;
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        const quoteEle = document.querySelector(".quote");
        const authorEle = document.querySelector(".author");
        quoteEle.innerHTML = `<h1>${data["content"]}</h1>`;
        authorEle.innerHTML=`<h3>~${data["author"]} </h3>`;
        console.log(data);
    } else {
        console.error("Error occurred");
    }
}