const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach((button) => {

    button.addEventListener('click', (e) => {

        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        
    })
});
