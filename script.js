document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Coleta os dados do formulário
    const username = document.getElementById('username').value;
    const platform = document.getElementById('platform').value;
    const service = document.getElementById('service').value;
    const duration = document.getElementById('duration').value;

    // Mensagem de confirmação
    const confirmationMessage = `
        Teste iniciado para ${username} na plataforma ${platform}. 
        Tipo de serviço: ${service}. Duração: ${duration} dia(s).
    `;

    document.getElementById('confirmationMessage').innerText = confirmationMessage;
});
