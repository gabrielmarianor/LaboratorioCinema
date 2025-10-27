document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-filme');

    form.addEventListener('submit', (evento) => {
        evento.preventDefault(); 

        // O código que faltava estava aqui:
        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const genero = document.getElementById('genero').value;
        const classificacao = document.getElementById('classificacao').value;
        const duracao = parseInt(document.getElementById('duracao').value);
        const dataEstreia = document.getElementById('dataEstreia').value;

        const filme = {
            id: new Date().getTime(),
            titulo,
            descricao,
            genero,
            classificacao,
            duracao,
            dataEstreia
        };

        // E aqui também:
        const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
        filmes.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmes));

        alert('Filme salvo com sucesso!');
        form.reset();
    });
});