var rules_button = document.querySelector('.rulesButton');
var rules_modal_bg = document.querySelector('.rulesModal-bg');
var rules_modal_close = document.querySelector('.rulesModal img')
var loader = document.querySelector('.loader');

rules_button.addEventListener('click', function(){
    rules_modal_bg.classList.add('bg-active');
    rules_modal_bg.classList.remove('bg-inactive');
});

rules_modal_close.addEventListener('click', function(){
    rules_modal_bg.classList.add('bg-inactive');
    rules_modal_bg.classList.remove('bg-active');
});

window.addEventListener("load", function(){
    loader.classList.add('hidden');
});