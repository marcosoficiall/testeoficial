const projetos = [
    {
        titulo: "MVP Portfólio",
        descricao: "Este portfólio foi desenvolvido como Produto Mínimo Viável usando apenas HTML5, CSS3 e JavaScript.",
        imagem: "img/projeto2.jpg",
        tags: ["HTML5", "CSS", "JavaScript"],
        link: "#"
    },
    {
        titulo: "Prestadores de Serviço",
        descricao: "Sistema simples de prestatores de serviço local em José de Freiats - PI.",
        imagem: "img/jfservice.png",
        tags: ["JavaScript", "WhatsApp API", "Design Responsivo"],
        link: "#"
    },
    
];

function renderizarProjetos() {
    const container = document.getElementById('projetos-container');
    if (!container) return; // Segurança caso o ID não exista

    container.innerHTML = '';

    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.classList.add('card-projeto');

        // Correção das chaves ${} e remoção dos parênteses extras
        card.innerHTML = `
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
            <div class="conteudo">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="tags">
                    ${projeto.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${projeto.link}" class="btn-projeto">Ver Projeto</a>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProjetos);
