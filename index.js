let menuicon = document.querySelector('#menuicon')
let navbar = document.querySelector('.navbar')

menuicon.addEventListener('click',()=>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
    
  })

// ----------------------------------------------------------------------
window.onscroll=()=>{
    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')
}
// ----------------------------------------------------------------------

const typed = new Typed('.type-text', {
  strings: ['Frontend Developer','Web Developer','React Developer'],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
  loop:true  
});

// ------------------------------------------------------------------------

ScrollReveal({ 
  reset: true,
  distance:'20px',
  duration:1000,
  delay:100
});

ScrollReveal().reveal('.top', { origin:'top',distance:'40px'});
ScrollReveal().reveal('.left', { origin:'left'});
ScrollReveal().reveal('.right', { origin:'right'});
ScrollReveal().reveal('.bottom', { origin:'bottom',distance:'40px'});

// ------------------------------------------------------------------------
function sendMail(){
  var params = {
    name : document.querySelector('#name').value,
    email :document.querySelector('#email').value,
    phone:document.querySelector('#phone').value,
    subject:document.querySelector('#subject').value,
    message:document.querySelector('#message').value,
  };


const ServiceID= "service_742yzz5";
const TemplateID= "template_607qt15";
emailjs
  .send(ServiceID, TemplateID, params)
  .then((res) => {
      document.querySelector('#name').value = "";
      document.querySelector('#email').value = "";
      document.querySelector('#phone').value = ""
      document.querySelector('#subject').value = ""
      document.querySelector('#message').value = ""
      document.querySelector('.alert').style.display = 'block'
      setTimeout(() => {
        document.querySelector('.alert').style.display = 'none'
      }, 10000);
  })
  .catch((err) => console.log(err));
    }
// ------------------------------------------------------------------------
