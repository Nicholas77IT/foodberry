"use strict"

function openMen(){
    
    document.getElementById('nav-menu').style.display='block';
    document.getElementById('header').style.position='fixed';
    document.getElementById('header').style.zIndex='1000';
    document.getElementById('header').style.background='white';
    document.getElementById('header').style.scrollBehavior='none';
    document.getElementById('openMenu').style.display='none';
    document.getElementById('closeMenu').style.display='block';
    return;
}

function closeMen(){
    document.getElementById('nav-menu').style.display='none';
    document.getElementById('openMenu').style.display='block';
    document.getElementById('closeMenu').style.display='none';
    return;
}