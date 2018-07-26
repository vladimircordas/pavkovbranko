function handleMenu() 
{
    menuToggle();
    menuShow();
    if (window.matchMedia("(min-device-width: 320px) and (max-device-width: 823px)").matches) 
    {
        var websiteTitle = document.getElementById('title');
        websiteTitle.classList.toggle('hidden');
    }
}
function menuShow() 
{
var menu = document.getElementById("sideMenu");
menu.classList.toggle("is-active");
}
function menuToggle() 
{
    var element = document.getElementById("menu-btn");
    element.classList.toggle("is-active");
}
function websiteShow() 
{
    var menu = document.getElementById("website-slide");
    menu.classList.toggle("active");
    menu.classList.remove('closed');
}
function websiteClose() 
{
    var menu = document.getElementById("website-slide");
    menu.classList.toggle("active");
    menu.classList.add('closed');
}
function crudShow() 
{
    var menu = document.getElementById("crud-slide");
    menu.classList.toggle("active");
    menu.classList.remove('closed');
    
}
function crudClose() 
{
    var menu = document.getElementById("crud-slide");
    menu.classList.toggle("active");
    menu.classList.add('closed');
}
function modelingShow() 
{
    var menu = document.getElementById("modeling-slide");
    menu.classList.toggle("active");
    menu.classList.remove('closed');
    var body = document.getElementsByTagName('body');
    body.scrollTo = 0;

}
function modelingClose() 
{
    var menu = document.getElementById("modeling-slide");
    menu.classList.toggle("active");
    menu.classList.add('closed');
}
function toggleSkillsMenu() 
{
    var skillsMenu = document.getElementById('skills-menu');
    skillsMenu.classList.toggle('active');
}
var el = document.querySelectorAll('.button-group button');
for (let i = 0; i < el.length; i++) 
{
    el[i].onclick = function() 
    {
        var section = document.querySelectorAll('.main section');
        var sideMenuButtons = document.querySelectorAll("#sideMenu ul li button");
        console.log(sideMenuButtons.length);
        for ( let i = 0; i < el.length; i++) 
        {
            el[i].className = 'slide';
            section[i].className = 'slide';
            sideMenuButtons[i].className = 'slide';
            var elements = document.querySelectorAll(".project-slide");
            for (var v=0; v<elements.length; v++) 
            {
                elements[v].className = "project-slide";
            }  
        }
        el[i].className = "active";
        section[i].className = "active";
        sideMenuButtons[i].className = 'active';
        var elements = document.querySelectorAll(".project-slide");
        console.log(elements.length);
        for (var j=0; j<elements.length; j++) {
            elements[j].className = "project-slide";
        }
    }
}
var sideMenuButtons = document.querySelectorAll("#sideMenu ul li button");
for (let i = 0; i < el.length; i++) 
{
    sideMenuButtons[i].onclick = function() 
    {
        var section = document.querySelectorAll('.main section');
        var el = document.querySelectorAll('.button-group button');
        console.log(sideMenuButtons.length);
        for ( let i = 0; i < el.length; i++) 
        {
            el[i].className = 'slide';
            section[i].className = 'slide';
            sideMenuButtons[i].className = 'slide';
            var elements = document.querySelectorAll(".project-slide");
            for (var v=0; v<elements.length; v++) 
            {
                elements[v].className = "project-slide";
            }
        }
        el[i].className = "active";
        section[i].className = "active";
        sideMenuButtons[i].className = 'active';
        var elements = document.querySelectorAll(".project-slide");
        console.log(elements.length);
        for (var v=0; v<elements.length; v++) {
            elements[v].className = "project-slide";
        }
    }
}
var skillsButton = document.querySelectorAll('#skills-menu li a');
for (let i = 0; i < skillsButton.length; i++) 
{
    skillsButton[i].onclick = function() 
    {
        var skillsSlide = document.querySelectorAll('.right_side .skills-wrapper');
        for ( let i = 0; i < skillsSlide.length; i++) 
        {
            skillsButton[i].className = 'slide';
            skillsSlide[i].className = 'skills-wrapper slide';         
        }
        this.className = "active";
        skillsSlide[i].className = "skills-wrapper active"; 
    }
}




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}