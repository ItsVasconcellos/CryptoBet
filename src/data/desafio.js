// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("fechar")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const date = params.get('date');
const desc = params.get('desc');
const cond_vic = params.get('cond_vic');

function exibeDesafios() {
    document.write(`Nome da aposta: ${name}<br>`);
    document.write(`Data da aposta: ${date}<br>`);
    document.write(`Descrição da aposta: ${desc}<br>`);
    document.write(`Condição de vitória da aposta: ${cond_vic}<br>`);
};

if (name == null && date == null && desc == null && cond_vic == null) {
    console.log("null")
} else {
    exibeDesafios();
}
