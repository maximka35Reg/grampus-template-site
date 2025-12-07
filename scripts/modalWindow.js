Fancybox.bind("[data-fancybox]")
const feedback = document.getElementById('feedback');

function transition(event) {
    event.preventDefault(); 
    Fancybox.close(); 
    Fancybox.show([{ src: "#success", type: "inline" }]);
  
    feedback.reset(); 
}

feedback.addEventListener('submit', transition);