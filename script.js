let counter = document.querySelector(".numbers");
let count = 0;

document.querySelector(".increase_btn").onclick = function() {
    count++;
    counter.textContent = count;
}

document.querySelector(".decrease_btn").onclick = function() {
    count--;
    counter.textContent = count;
}

document.querySelector(".reset_btn").onclick = function() {
    count = 0;
    counter.textContent = count;
}