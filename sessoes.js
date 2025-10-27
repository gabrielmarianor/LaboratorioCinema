document.addEventListener('DOMContentLoaded', () => {
    
    const tabelaCorpo = document.getElementById('tabela-sessoes');

    // --- Carregar Todos os Dados ---
    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    const salas = JSON.parse(localStorage.getItem('salas')) || [];

    // --- Limpar a tabela antes de preencher ---
    tabelaCorpo.innerHTML = '';

    // --- Iterar e Renderizar as Sessões ---
    sessoes.forEach(sessao => {
        // Encontrar os nomes correspondentes [cite: 15]
        const filme = filmes.find(f => f.id == sessao.filmeId);
        const sala = salas.find(s => s.id == sessao.salaId);

        // Só renderiza se encontrar os dados
        if (filme && sala) {
            const tr = document.createElement('tr');

            // Formatar Data e Preço
            const dataHora = new Date(sessao.dataHora).toLocaleString('pt-BR');
            const preco = `R$ ${sessao.preco.toFixed(2)}`;

            tr.innerHTML = `
                <td>${filme.titulo}</td>
                <td>${sala.nome}</td>
                <td>${dataHora}</td>
                <td>${preco}</td>
                <td>
                    [cite: 63]
                    <a href="venda-ingressos.html?sessaoId=${sessao.id}" class="btn-comprar">
                        Comprar Ingresso
                    </a>
                </td>
            `;
            
            tabelaCorpo.appendChild(tr);
        }
    });

    if (sessoes.length === 0) {
        tabelaCorpo.innerHTML = '<tr><td colspan="5">Nenhuma sessão cadastrada.</td></tr>';
    }
});