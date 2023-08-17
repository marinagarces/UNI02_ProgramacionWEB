document.addEventListener('DOMContentLoaded', function() {

    // Cuando se haga clic en cualquier botón con la clase 'btn', se mostrará el modal
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            let modal = bootstrap.Modal.getInstance(document.getElementById('bookModal'));
            if(!modal) {
                modal = new bootstrap.Modal(document.getElementById('bookModal'));
            }
            modal.show();
        });
    });

    const enviarBtn = document.getElementById('enviarBtn');

    // Agrega un controlador de eventos 'click'
    enviarBtn.addEventListener('click', function() {
        // Simula que se inserta en una BD
        alert("Solicitud Exitosa!");

        // Cierra el modal después de mostrar el mensaje
        let modal = bootstrap.Modal.getInstance(document.getElementById('bookModal'));
        modal.hide();
    });

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulario enviado');
    });

});