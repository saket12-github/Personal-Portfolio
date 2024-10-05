//----- About me Section -----
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

//----- Back to Top functionality -----
let backtotop = document.querySelector(".backtotop");
backtotop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//----- Smooth Scrolling -----
let scrollabout = document.querySelector("#navabout");
let scrollservices = document.querySelector("#navservices");
let scrollportfolio = document.querySelector("#navportfolio");
let scrollcontact = document.querySelector("#navcontacts");

scrollabout.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default link behavior
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});
scrollservices.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({
        behavior: 'smooth'
    });
});
scrollportfolio.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({
        behavior: 'smooth'
    });
});
scrollcontact.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// ------ Typewriter effect implementation -----
function typeWriterEffect(text, elementId, delay = 100) {
    const element = document.getElementById(elementId);
    let index = 0;
    
    // Recursive function to display each letter
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);  // Add next character
            index++;
            setTimeout(type, delay);  // Delay between characters
        }
    }
    
    // Start the typing effect
    type();
}

// Call the typewriter function on page load
window.onload = function() {
    typeWriterEffect("Front-End Web Developer", "typewriter", 150);  // Customize text and speed
};

// ----- Get all filter buttons and portfolio items -----
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.work-list .work');

// Function to filter portfolio items
function filterPortfolio(category) {
    portfolioItems.forEach(item => {
        // If category is 'all', show all items, else match the category
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

// Add event listeners to all filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons and add to the clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Get the filter category from the clicked button's data-filter attribute
        const category = this.getAttribute('data-filter');
        
        // Call the filter function with the selected category
        filterPortfolio(category);
    });
});

// Show all items on page load
filterPortfolio('all');


// ----- contact form -----

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyCfNT0dD_snbMbWjfMLC3x48O_ECpI3XUD25Mjhu4RztufakG0fx-AXm4uxUuWGg0F/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response);
        msg.innerText = "Form Submitted";
        setTimeout(function(){
            msg.innerText = "";
        },5000)
        form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  })
