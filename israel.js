let myButton =  document.querySelector('.konBtn'),
    mymenu = document.querySelector('.menu');

    myButton.addEventListener('click', () => {
        console.log('you click me');
        mymenu.classList.toggle('shownav');
    });

window.onclick = (event) => {
    if(event.target.matches('.konBtn')){
        console.log('the event matches the button');
    }else {
        console.log('the event you click is not the Button');
        mymenu.classList.remove('shownav');
    }
}