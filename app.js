document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("btn1");
    let main_h = document.getElementById("main_h");
    let boxx = document.getElementById("boxx");

    btn.addEventListener("click", () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let clr = `rgb(${r},${g},${b})`;

        let str = `Your Color is ${clr}`;
        main_h.innerText = str;
        boxx.style.backgroundColor = clr;
    });

    btn.addEventListener("dblclick", () => {
        let r = 255;
        let g = 255;
        let b = 255;
        let clr = `rgb(${r},${g},${b})`;
        let str = "Random Color Generator";
        main_h.innerText = str;
        boxx.style.backgroundColor = clr;
    });
});
