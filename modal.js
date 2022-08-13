const modal = document.querySelector('.modal');
const email = document.querySelector('.email');
const card = document.querySelector('.card');
const form = document.querySelector('form');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.fa-times');


openBtn.addEventListener('click', () => {
    openModal();
} )

closeBtn.addEventListener('click', () => {
    closeModal();
} )

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        closeModal();
    }
} )


function openModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(email.value === ''){
        console.log('cannot be empty!');
        window.alert('field cannot be empty!')
    }
    else{
        card.innerHTML = '<h2>Thanks For Subscribing</h2>'
        setTimeout(()=>{
            closeModal();
            window.location.reload();
        }, 3000)
    }
})
