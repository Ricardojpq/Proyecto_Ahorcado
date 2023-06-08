const button = document.getElementById("test");

const jsConfeti = new JSConfetti();

button.addEventListener("click",(e)=>{
    e.preventDefault();
    setTimeout(() => {
        jsConfeti.addConfetti({
            confettiColors: [
                '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
              ]
        });
      }, 500)
 
});
