let btn = document.querySelector(".oth");
let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

btn.addEventListener("click", async () => {
    let link = await meya();
    let ul=document.querySelector("ul")
    
    let li=document.createElement("li");
    li.innerText=link;
    ul.appendChild(li);
    
});

async function meya() {
    try {
        let res = await axios.get(url);
        return res.data.delivery; // Corrected 'message' typo here
    } catch (e) {
        return "/";
    }
}
