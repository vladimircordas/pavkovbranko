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

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
var j;
var slides2 = document.getElementsByClassName("mySlides2");
var dots2 = document.getElementsByClassName("demo2");
var captionText2 = document.getElementById("caption2");
    if (m > slides2.length) {slideIndex2 = 1}
    if (m < 1) {slideIndex2 = slides2.length}
    
    for (j = 0; j < slides2.length; j++) {
        slides2[j].style.display = "none";
        
    }
    for (j = 0; j < dots2.length; j++) {
        dots2[j].className = dots2[j].className.replace(" active", "");
        
    }
    slides2[slideIndex2-1].style.display = "block";
    dots2[slideIndex2-1].className += " active";
    captionText2.innerHTML = dots2[slideIndex2-1].alt;
}


var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(k) {
  showSlides3(slideIndex3 += k);
}

function currentSlide3(k) {
  showSlides3(slideIndex3 = k);
}

function showSlides3(k) {
var l;
var slides3 = document.getElementsByClassName("mySlides3");
var dots3 = document.getElementsByClassName("demo3");
var captionText3 = document.getElementById("caption3");
    if (k > slides3.length) {slideIndex3 = 1}
    if (k < 1) {slideIndex3 = slides3.length}
    
    for (l = 0; l < slides3.length; l++) {
        slides3[l].style.display = "none";
        
    }
    for (l = 0; l < dots3.length; l++) {
        dots3[l].className = dots3[l].className.replace(" active", "");
        
    }
    slides3[slideIndex3-1].style.display = "block";
    dots3[slideIndex3-1].className += " active";
    captionText3.innerHTML = dots3[slideIndex3-1].alt;
}