document.addEventListener('DOMContentLoaded', () => {

    const selectSessao = document.getElementById('sessao');
    const form = document.getElementById('form-venda');

    // --- Carregar Dados ---
    // Precisamos de todos os dados para criar o nome da sessão
    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    const salas = JSON.parse(localStorage.getItem('salas')) || [];

    // --- Carregar Sessões no <select> ---
    sessoes.forEach(sessao => {
        // Encontrar o nome do filme e da sala [cite: 15]
        const filme = filmes.find(f => f.id === sessao.filmeId);
        const sala = salas.find(s => s.id === sessao.salaId);

        if (filme && sala) {
            const option = document.createElement('option');
            option.value = sessao.id;
            
            // Formata a data para ficar legível
            const dataHora = new Date(sessao.dataHora).toLocaleString('pt-BR');
            
            option.textContent = `${filme.titulo} - ${sala.nome} (${dataHora})`;
            selectSessao.appendChild(option);
        }
    });

    // --- Verificar se a sessão veio pré-selecionada (via URL) --- [cite: 63]
    const urlParams = new URLSearchParams(window.location.search);
    const sessaoIdQuery = urlParams.get('sessaoId');
    if (sessaoIdQuery) {
        selectSessao.value = sessaoIdQuery;
    }

    // --- Salvar Venda ---
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const ingresso = {
            id: new Date().getTime(),
            sessaoId: selectSessao.value,
            nomeCliente: document.getElementById('cliente').value,
            cpf: document.getElementById('cpf').value,
            assento: document.getElementById('assento').value,
            tipoPagamento: document.getElementById('pagamento').value
        };

        const ingressos = JSON.parse(localStorage.getItem('ingressos')) || []; [cite: 57]
        ingressos.push(ingresso);
        localStorage.setItem('ingressos', JSON.stringify(ingressos)); [cite: 57]

        alert('Ingresso vendido com sucesso!');
        form.reset();
        selectSessao.value = "";
    });
});