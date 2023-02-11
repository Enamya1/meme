
const btn =document.getElementById('btn');
const image=document.getElementById('image');
btn.addEventListener('click',async function x() {
    let a= await fetch('https://meme-api.com/gimme');
    let b=await a.json();
    console.log(b.url);
    document.getElementById('image').setAttribute('src',b.url)
})
