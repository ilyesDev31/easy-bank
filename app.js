const burger = document.querySelector('.burger');
const menu = document.querySelector('.container ul');
const overflow = document.querySelector('.overflow');

window.onload = function(){
    this.scrollTo(0,0)
}


burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    overflow.classList.toggle('active');
});

window.addEventListener('resize', function(){
    burger.classList.remove('active');
    menu.classList.remove('active');
    overflow.classList.remove('active');
})