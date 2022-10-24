    ///Define navList variable to store the list to fill it with sections links.
    const navList = document.getElementById('navbar__list'); 
    ///Define fragment variable to create docuent fragment to append the navList to it.
    const fragment = document.createDocumentFragment();
    ///Define sections variable to store the list of all sections that are in the page.
    const sections = document.querySelectorAll('section');
    /// function to build the nav bar with tha sections that are existed and added to the page.
    function buildNavBar()
    {
        for(const section of sections)
        {
             const navListItem = document.createElement('li');
             const sectionId = section.getAttribute('id');

             const navlistLink = document.createElement('a'); 
             navlistLink.href = `#${sectionId}` ;

             const dataNav = section.getAttribute('data-nav');
             navlistLink.textContent = dataNav;
             navlistLink.className = 'menu__link';
             /// Making smooth scrolling to the section when clicking on each link refer to this section. 
             navlistLink.addEventListener('click',(event)=>{
                 event.preventDefault();
                 section.scrollIntoView({behavior:'smooth'});
            });
             navListItem.appendChild(navlistLink);
             fragment.appendChild(navListItem);
        }
        navList.appendChild(fragment);
    }
    ///when the page is completely loaded , build the navbar.
    window.addEventListener('load',buildNavBar());
    
    ///while scrolling the window , implement this function to add active class to currently active section for the user. 
    window.addEventListener('scroll',()=>{
        sections.forEach(function(activeSection)
            {
                if(activeSection.getBoundingClientRect().top>=-400 && activeSection.getBoundingClientRect().top<=150)
                {
                    activeSection.classList.add('your-active-class');
                }
                else
                {
                    activeSection.classList.remove('your-active-class');
                }
            });
    })  
