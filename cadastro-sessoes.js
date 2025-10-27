document.addEventListener('DOMContentLoaded', () => {
    
    const selectFilme = document.getElementById('filme');
    const selectSala = document.getElementById('sala');
    const form = document.getElementById('form-sessao');

    // --- Carregar Filmes e Salas nos <select> ---
    
    const filmes = JSON.parse(localStorage.getItem('filmes')) || []; [cite: 41]
    filmes.forEach(filme => {
        const option = document.createElement('option');
        option.value = filme.id;
        option.textContent = filme.titulo; // O texto que o usuário vê
        selectFilme.appendChild(option);
    });

    const salas = JSON.parse(localStorage.getItem('salas')) || []; [cite: 42]
    salas.forEach(sala => {
        const option = document.createElement('option');
        option.value = sala.id;
        option.textContent = sala.nome; // O texto que o usuário vê
        selectSala.appendChild(option);
    });

    // --- Salvar a Sessão ---
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const filmeId = document.getElementById('filme').value;
        const salaId = document.getElementById('sala').value;
        const dataHora = document.getElementById('dataHora').value;
        const preco = parseFloat(document.getElementById('preco').value);
        const idioma = document.getElementById('idioma').value;
        const formato = document.getElementById('formato').value;

        const sessao = {
            id: new Date().getTime(),
            filmeId,
            salaId,
            dataHora,
            preco,
            idioma,
            formato
        };

        const sessoes = JSON.parse(localStorage.getItem('sessoes')) || []; [cite: 48]
        sessoes.push(sessao);
        localStorage.setItem('sessoes', JSON.stringify(sessoes)); [cite: 48]
        
        alert('Sessão salva com sucesso!');
        form.reset();
        
        selectFilme.value = "";
        selectSala.value = "";
    });
});