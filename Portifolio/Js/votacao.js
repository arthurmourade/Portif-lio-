document.addEventListener('DOMContentLoaded', () => {
    const votingForm = document.getElementById('voting-form');
    const votingMessage = document.getElementById('voting-message');
    const rankingList = document.getElementById('ranking-list');
    
    // Matérias que podem ser votadas
    const works = {
        'Linguagens': 0,
        'Natureza': 0,
        'Matematica': 0,
        'Humanas': 0,
        'Tecnico': 0
    };

    /**
     * Carrega os votos salvos no localStorage (simulação de banco de dados)
     */
    function loadVotes() {
        const storedVotes = localStorage.getItem('workVotes');
        if (storedVotes) {
            // Mescla os votos salvos com a estrutura works
            Object.assign(works, JSON.parse(storedVotes));
        }
        updateRankingDisplay();
    }

    /**
     * Salva os votos atualizados no localStorage
     */
    function saveVotes() {
        localStorage.setItem('workVotes', JSON.stringify(works));
    }

    /**
     * Atualiza o display do ranking
     */
    function updateRankingDisplay() {
        rankingList.innerHTML = '';
        
        // Converte o objeto works em um array e ordena por votos (do maior para o menor)
        const sortedWorks = Object.entries(works).sort(([, a], [, b]) => b - a);

        sortedWorks.forEach(([name, votes], index) => {
            const listItem = document.createElement('li');
            const workTitle = {
                'Linguagens': 'Linguagens',
                'Natureza': 'Ciências da Natureza',
                'Matematica': 'Matemática',
                'Humanas': 'Ciências Humanas',
                'Tecnico': 'Técnico/Profissionalizante'
            }[name]; // Mapeia o valor para o nome completo

            listItem.innerHTML = `
                <span>${index + 1}º - ${workTitle}</span>
                <span>${votes} Votos</span>
            `;
            rankingList.appendChild(listItem);
        });
    }

    // Lógica do formulário de votação
    votingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Verifica se o usuário já votou (usa uma chave no localStorage)
        if (localStorage.getItem('voted') === 'true') {
            votingMessage.textContent = 'Você já registrou seu voto! Obrigado.';
            votingMessage.style.color = '#dc3545'; // Cor de erro
            return;
        }

        const formData = new FormData(votingForm);
        const selectedWork = formData.get('trabalho');
        
        if (selectedWork && works.hasOwnProperty(selectedWork)) {
            // Incrementa o voto e salva
            works[selectedWork]++;
            saveVotes();
            
            // Marca que o usuário votou
            localStorage.setItem('voted', 'true');

            votingMessage.textContent = 'Voto registrado com sucesso! Atualizando ranking...';
            votingMessage.style.color = '#28a745'; // Cor de sucesso
            
            updateRankingDisplay();
        } else {
            votingMessage.textContent = 'Por favor, selecione um trabalho antes de votar.';
            votingMessage.style.color = '#ffc107'; // Cor de aviso
        }
    });

    // Inicializa o carregamento dos votos
    loadVotes();
});