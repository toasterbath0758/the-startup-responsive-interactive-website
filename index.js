const hamburgerMenuKnop = document.querySelector('.hamburgerMenuKnop');
const hamburgerNav = document.querySelector('.hamburgerNav');

const header = document.querySelector('header');

hamburgerMenuKnop.addEventListener('click', function(){
hamburgerNav.classList.toggle('active');
hamburgerMenuKnop.classList.toggle('active');
header.classList.toggle('active');
})

const hamburgerKnoppen = document.querySelectorAll('.hamburgerKnop');

hamburgerKnoppen.forEach(function (knop) {
  knop.addEventListener('click', function(){
    this.classList.toggle('active');
  })
})