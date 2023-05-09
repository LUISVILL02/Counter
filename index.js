const btnIncrease = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const btnDecrease = document.querySelector(".decrease");

const total = document.querySelector(".total");

let count = 0;


btnIncrease.addEventListener("click", (e) => {
    e.preventDefault();
    count++;
    total.innerHTML = count;
    console.log(total.innerHTML)
})

btnDecrease.addEventListener("click", (e) => {
    e.preventDefault();
    (count === 0) ? res : count--;
    total.innerHTML = count;
    console.log(total.innerHTML)
})

const res = reset.addEventListener("click", (e) =>{
    e.preventDefault();
    count = 0;
    total.innerHTML = count;
})
