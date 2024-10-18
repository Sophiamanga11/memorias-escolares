function showInfo(photoId) {
    const messages = {
        1: '🌨️ Belle no Inverno: Uma aventura mágica no mundo do frio.',
        2: '👽 ET Caminhante: Um visitante alienígena desbravando as salas de aula!',
        3: '🌊 Pés Próximos ao Lago Místico: Uma jornada inesquecível perto das águas encantadas.',
        4: '💤 Efeitos de Magia Poderosa: O feitiço do sono que encantou a sala de aula.',
        5: '🧙‍♂️ Hacker em Movimento: Um mágico digital em busca de segredos!',
        6: '👾 Novo Monstro Revelado: Uma criatura mágica foi descoberta em nosso mundo!'
    };
    
    alert(messages[photoId] || '⚠️ Informação não disponível.');
}

function showSection(section) {
    const sections = document.querySelectorAll('#content > section');
    sections.forEach(s => {
        s.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}
