document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-sala');

    form.addEventListener('submit', (evento) => {
        evento.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const capacidade = parseInt(document.getElementById('capacidade').value);
        const tipo = document.getElementById('tipo').value;

        const sala = {
            id: new Date().getTime(),
            nome,
            capacidade,
            tipo
        };

        const salas = JSON.parse(localStorage.getItem('salas')) || []; [cite: 39]
        salas.push(sala);
        localStorage.setItem('salas', JSON.stringify(salas)); [cite: 39]

        alert('Sala salva com sucesso!');
        form.reset();
    });
});