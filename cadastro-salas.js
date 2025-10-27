document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form-sala');

    form.addEventListener('submit', (evento) => {
        evento.preventDefault(); 

        // 1. Capturar dados
        const nome = document.getElementById('nome').value;
        const capacidade = parseInt(document.getElementById('capacidade').value);
        const tipo = document.getElementById('tipo').value;

        // 2. Criar objeto
        const sala = {
            id: new Date().getTime(),
            nome,
            capacidade,
            tipo
        };

        // 3. Salvar no localStorage (chave: 'salas') [cite: 41]
        const salas = JSON.parse(localStorage.getItem('salas')) || [];
        salas.push(sala);
        localStorage.setItem('salas', JSON.stringify(salas));

        // 4. Limpar e avisar
        alert('Sala salva com sucesso!');
        form.reset();
    });
});