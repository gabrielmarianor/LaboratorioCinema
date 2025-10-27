// Este script tem DUAS responsabilidades:
// 1. Carregar os filmes e salas nos <select>
// 2. Salvar a nova sessão

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Responsabilidade 1: Carregar Dados nos <select> ---
    
    const selectFilme = document.getElementById('filme');
    const selectSala = document.getElementById('sala');

    // Carregar filmes [cite: 43]
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    filmes.forEach(filme => {
        // Criação dinâmica de elementos <option> 
        const option = document.createElement('option');
        option.value = filme.id;
        option.textContent = filme.titulo; // O texto que o usuário vê
        selectFilme.appendChild(option);
    });

    // Carregar salas [cite: 44]
    const salas = JSON.parse(localStorage.getItem('salas')) || [];
    salas.forEach(sala => {
        const option = document.createElement('option');
        option.value = sala.id;
        option.textContent = sala.nome; // O texto que o usuário vê
        selectSala.appendChild(option);
    });

    
    // --- Responsabilidade 2: Salvar a Sessão ---
    
    const form = document.getElementById('form-sessao');

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        // 1. Capturar dados
        // (Aqui pegamos o ID do filme/sala que foi selecionado)
        const filmeId = document.getElementById('filme').value;
        const salaId = document.getElementById('sala').value;
        const dataHora = document.getElementById('dataHora').value;
        const preco = parseFloat(document.getElementById('preco').value);
        const idioma = document.getElementById('idioma').value;
        const formato = document.getElementById('formato').value;

        // 2. Criar objeto
        const sessao = {
            id: new Date().getTime(),
            filmeId, // Armazenamos o ID para "encadear" os dados [cite: 17]
            salaId,  // Armazenamos o ID para "encadear" os dados [cite: 17]
            dataHora,
            preco,
            idioma,
            formato
        };

        // 3. Salvar no localStorage (chave: 'sessoes') [cite: 50]
        const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
        sessoes.push(sessao);
        localStorage.setItem('sessoes', JSON.stringify(sessoes));
        
        // 4. Limpar e avisar
        alert('Sessão salva com sucesso!');
        form.reset();
        
        // Recarrega os <select> para o estado inicial
        // (Opcional, mas boa prática)
        selectFilme.value = "";
        selectSala.value = "";
    });
});