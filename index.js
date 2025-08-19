// JavaScript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://5zk455wmd4cjqzv6arqi3fi3b40dwthb.lambda-url.us-east-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}
 
updateCounter();