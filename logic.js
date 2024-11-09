let profile = document.getElementById("pro");
profile.addEventListener("mouseover", () => {
    profile.style.backgroundColor = "#cd5500";
});
profile.addEventListener("mouseout", () => {
    profile.style.backgroundColor = "#FFC72C";
});

let lol = document.getElementById("lol");
lol.addEventListener("mouseover", () => {
    lol.style.backgroundColor = "#fb832e";
});
lol.addEventListener("mouseout", () => {
    lol.style.backgroundColor = "#FFFF00";
});
let button = document.getElementById("view");
button.addEventListener("click", () => {
    window.location.href = "https://tanmaykundu2006.github.io/PRODIGY_WD_02/";
});
let button1 = document.getElementById("toe");
button1.addEventListener("click", () => {
    window.location.href = "https://tanmaykundu2006.github.io/PRODIGY_WD_03/";
});
let button2 = document.getElementById("toe");
button2.addEventListener("mouseover", () => {
    button2.innerText="CLICK TO PLAY TIC-TAC-TOE";
});
button2.addEventListener("mouseout", () => {
    button2.innerText="VIEW PROJECT";
});
let button3 = document.getElementById("view");
button3.addEventListener("mouseover", () => {
    button3.innerText="CLICK TO OPEN THE STOPWATCH";
});
button3.addEventListener("mouseout", () => {
    button3.innerText="VIEW PROJECT";
});



