const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMaxima = target.getAttribute('maxlength');
    const longitudActual = target.value.length;
    
    contador.innerHTML = `${longitudActual}/${longitudMaxima}`;
});