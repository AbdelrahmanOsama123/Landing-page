/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const sections = document.getElementsByTagName('section');
const navList = [];
const unOrderedList = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();
for(const section of sections){
    const data_nav= section.getAttribute('data-nav')
    navList.push(data_nav);
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${section.id}`;
    a.textContent = data_nav;
    a.className = 'menu__link';
    a.addEventListener('click',function(event){
        event.preventDefault();
        section.scrollIntoView({behavior:'smooth'});
    });
    li.appendChild(a);
    fragment.appendChild(li);
    
} 
unOrderedList.appendChild(fragment);
window.addEventListener('scroll',()=>{
    for(const section of sections){
        if(section.getBoundingClientRect().top>=-400 && 
            section.getBoundingClientRect().top<=200){
                section.classList.add('your-active-class');
            }
        else{
            section.classList.remove('your-active-class');
        }
    }
});