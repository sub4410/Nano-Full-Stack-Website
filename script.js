const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordian =>{
    const img = accordian.querySelector(".img");
    const answer = accordian.querySelector(".faq-answer");

    accordian.addEventListener('click',() => {
        img.classList.toggle("active");
        answer.classList.toggle("active");
    })
})