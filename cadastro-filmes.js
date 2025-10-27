// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {

    // Pega o formulário
    const form = document.getElementById('form-filme');

    // Adiciona um "ouvinte" para o evento de 'submit' (envio)
    form.addEventListener('submit', (evento) => {
        // Impede o comportamento padrão de recarregar a página
        evento.preventDefault(); 

        // 1. Capturar os dados do formulário
        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const genero = document.getElementById('genero').value;
        const classificacao = document.getElementById('classificacao').value;
        const duracao = parseInt(document.getElementById('duracao').value);
        const dataEstreia = document.getElementById('dataEstreia').value;

        // 2. Criar o objeto "filme"
        const filme = {
            id: new Date().getTime(), // (Um ID único baseado no tempo)
            titulo,
            descricao,
            genero,
            classificacao,
            duracao,
            dataEstreia
        };

        // 3. Salvar no localStorage [cite: 34]
        
        // Pega a lista de filmes já salva (ou cria uma lista vazia)
        // Usamos JSON.parse para transformar a string de volta em um array [cite: 16]
        const filmes = JSON.parse(localStorage.getItem('filmes')) || [];

        // Adiciona o novo filme na lista
        filmes.push(filme);

        // Salva a lista ATUALIZADA de volta no localStorage
        // Usamos JSON.stringify para transformar o array em uma string [cite: 16]
        localStorage.setItem('filmes', JSON.stringify(filmes));

        // 4. Limpar o formulário e avisar o usuário
        alert('Filme salvo com sucesso!');
        form.reset();
    });
});