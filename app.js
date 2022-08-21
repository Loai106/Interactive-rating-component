const rates = document.querySelectorAll('.rate');

const resultContainer = document.querySelector('.result');

const submissionBtn = document.querySelector('.btn');

const mainContainer = document.querySelector('.card__wrapper');

const thankYouContainer =document.querySelector('.thankYou__wrapper');









rates.forEach(rate => {
    rate.addEventListener("click",()=>{
        console.log("got the rate")

        resultContainer.innerHTML = `<p>you selected ${rate.getAttribute('data')} out of 5</p>`
    })
    
});


submissionBtn.addEventListener('click',()=>{

    mainContainer.style.display = "none";

    thankYouContainer.classList.remove('hidden');

 


   

})