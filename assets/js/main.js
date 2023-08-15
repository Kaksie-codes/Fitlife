/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav--toggle');
const navClose = document.getElementById('nav-close')

// MENU SHOW
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// MENU HIDE
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}

navLink.forEach((link) =>  link.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((currentSection) => {
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 58;
        const sectionId = currentSection.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId +']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link');            
        }else{
            sectionClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollup = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    dealy: 400,
})
sr.reveal('.home__data, .footer__container, .footer__group');
sr.reveal('.home__image', {delay: 700, origin: 'bottom'});
sr.reveal('.logos__img, .program__card, .pricing__card', {interval: 100});
sr.reveal('.choose__img, .calculate__content', {origin: 'left'});
sr.reveal('.choose__content, .calculate__img', {origin: 'right'})

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMessage = document.getElementById('calculate-message');


const calculateBmi = (e) => {
    e.preventDefault();

    // check if fields hava a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        // Add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        // show message
        calculateMessage.textContent = 'Fill in the height and weight!!';

        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000)
    }else{
        const cm = calculateCm.value/100;
        const Kg = calculateKg.value;
        const bmi = Math.round(Kg/(cm * cm));

        if(bmi < 18.5){
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`;
        }else if(bmi < 25){
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 😇`;
        }else{
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😔`;
        }

        calculateCm.value = '';
        calculateKg.value = '';
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000)
    }

    
}
calculateForm.addEventListener('submit', calculateBmi);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const contactUser = document.getElementById('contact-user');

const sendEmail = (e) => {
    e.preventDefault();

    if(contactUser.value === ''){
        contactMessage.classList.add('color-red');
        contactMessage.classList.remove('color-green');

        contactMessage.textContent = 'You must enter your email ☝️'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    }else{
        emailjs.sendForm('service_5oy3zuo','template_jratt27','#contact-form','FDLG_ptP-L8QgQ9SE')
        .then(() => {
            contactMessage.classList.add('color-green');
            contactMessage.textContent = 'You registered successfully 💪';
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 3000)
        }, (error) => {
            alert('OOPS! SOMETHING HAS FAILED...', error)
        })
        contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)
