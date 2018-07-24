function handleMenu() {
    menuToggle();
    menuShow();
    if (window.matchMedia("(min-device-width: 320px) and (max-device-width: 480px)").matches) {
        var websiteTitle = document.getElementById('title');
        websiteTitle.classList.toggle('hidden');
    }
 }

 function menuShow() {
    var menu = document.getElementById("sideMenu");
    menu.classList.toggle("is-active");
    
 }


 function menuToggle() {
    var element = document.getElementById("menu-btn");
    element.classList.toggle("is-active");
 }

 

  function websiteShow() {
    var menu = document.getElementById("website-slide");
    menu.classList.toggle("active");
    menu.classList.remove('closed');
 }
 function websiteClose() {
    var menu = document.getElementById("website-slide");
    menu.classList.toggle("active");
    menu.classList.add('closed');
 }
 function crudShow() {
    var menu = document.getElementById("crud-slide");
    menu.classList.toggle("active");
    menu.classList.remove('closed');
 }
 function crudClose() {
    var menu = document.getElementById("crud-slide");
    menu.classList.toggle("active");
    menu.classList.add('closed');
 }
 function modelingShow() {
    var menu = document.getElementById("modeling-slide");
    menu.classList.toggle("active");
    menu.classList.remove('closed');
 }
 function modelingClose() {
    var menu = document.getElementById("modeling-slide");
    menu.classList.toggle("active");
    menu.classList.add('closed');
 }



function toggleSkillsMenu() {
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
        for (var v=0; v<elements.length; v++) {
            elements[v].className = "project-slide";
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
/*
var autoCadSlides = document.getElementById('autocad-slides');
var aspnetSlides = document.getElementById('aspnet-slides');
var csharpSlides = document.getElementById('csharp-slides');
var mssqlSlides = document.getElementById('mssql-slides');
var webSlides = document.getElementById('web-slides');
var wformsSlides = document.getElementById('wforms-slides');

document.getElementById('auto-cad').addEventListener('click',function(){
    document.getElementById('skill-slides').classList.toggle('active');
    autoCadSlides.classList.toggle('active');
});

document.getElementById('aspnet').addEventListener('click',function(){
    document.getElementById('skill-slides').classList.toggle('active');
    aspnetSlides.classList.toggle('active');
});

document.getElementById('csharp').addEventListener('click',function(){
    document.getElementById('skill-slides').classList.toggle('active');
    csharpSlides.classList.toggle('active');
});

document.getElementById('mssql').addEventListener('click',function(){
    document.getElementById('skill-slides').classList.toggle('active');
    mssqlSlides.classList.toggle('active');
});

document.getElementById('webskills').addEventListener('click',function(){
    document.getElementById('skill-slides').classList.toggle('active');
    webSlides.classList.toggle('active');
});

document.getElementById('winforms').addEventListener('click',function(){
    document.getElementById('skill-slides').classList.toggle('active');
    wformsSlides.classList.toggle('active');
});

document.getElementById('skills-close').addEventListener('click',function(){
    document.getElementById('skill-slides').classList.remove('active');
    autoCadSlides.classList.remove('active');
    wformsSlides.classList.remove('active');
    webSlides.classList.remove('active');
    csharpSlides.classList.remove('active');
    aspnetSlides.classList.remove('active');
    mssqlSlides.classList.remove('active');
});
*/


var skillsButton = document.querySelectorAll('#skills-menu li a');

for (let i = 0; i < skillsButton.length; i++) {
    skillsButton[i].onclick = function() {
        var skillsSlide = document.querySelectorAll('.right_side .skills-wrapper');
        for ( let i = 0; i < skillsSlide.length; i++) {
            skillsButton[i].className = 'slide';
            skillsSlide[i].className = 'right_side skills-wrapper';


            
                
        }
        this.className = "active";
        skillsSlide[i].className = "right_side skills-wrapper active";
        
    }
}