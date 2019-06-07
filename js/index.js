// Your code goes here

// Let's mess with the buttons 
const btn1 = document.getElementsByClassName("btn")[0];
const btn2 = document.getElementsByClassName("btn")[1];
const btn3 = document.getElementsByClassName("btn")[2];

// Mouse Over 
btn1.addEventListener('mouseover',function(event){ 

    alert('Mouse attacked me!');

});

// Double Click 
btn2.addEventListener('dblclick',function(event){ 

    alert('You double clicked me!');

});

// Click 
btn3.addEventListener('click',function(event){ 

    alert('You clicked me!');

});

// Let's play with the Nav bar 
const nav1 = document.getElementsByClassName("nav-link")[0];
const nav2 = document.getElementsByClassName("nav-link")[1];
const nav3 = document.getElementsByClassName("nav-link")[2];
const nav4 = document.getElementsByClassName("nav-link")[3];

let newLink = document.createElement("a");
const navigation = document.querySelector('nav');

// Clicking Home will append a Support button to the Nav bar. 
nav1.addEventListener('dblclick',function(event){

    newLink.innerHTML = 'Support';
    newLink.setAttribute('href','#');
    newLink.style.color = '#212529';
    newLink.style.fontSize = '1.6rem';
    navigation.appendChild(newLink);

});
// Clicking Home will append a Map button to the Nav bar. 
nav2.addEventListener('dblclick',function(event){

    newLink.innerHTML = 'Map';
    newLink.setAttribute('href','#');
    newLink.style.color = '#212529';
    newLink.style.fontSize = '1.6rem';
    navigation.appendChild(newLink);

});

// Clicking load an alert 
nav3.addEventListener('click',function(event){

    alert('Watch where you are clicking bro!');

});
// dbl click event 
nav4.addEventListener('dblclick',function(event){

    alert('Fun Bus time!');
    newLink.innerHTML = 'Fun Bus!';
    newLink.setAttribute('href','#');
    newLink.style.color = '#212529';
    newLink.style.fontSize = '1.6rem';
    navigation.prepend(newLink);
});

const img = document.querySelector('img');

// clicking top image. 
img.addEventListener('dblclick', function(event){

    alert('Being clicked!');

});

// nested events
img.addEventListener('mouseover',function(event){
    
       img.style.transition = '.5s'; 
       img.style.display = 'none';
       event.preventDefault();   
        
       //event.stopPropagation();
     img.addEventListener('mouseleave',function(event){
        
        img.style.transition = '.5s';
        img.style.display = 'flex'; 
        event.preventDefault(); 
       

        
     });


 });

 
