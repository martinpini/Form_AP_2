
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        const estado = document.getElementById('estado').value;
        alert('Estado seleccionado: ' + estado);
        // Aquí puedes realizar otras acciones, como enviar los datos a un servidor.
    });

