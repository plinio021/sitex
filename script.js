document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formul�rio

    // Coleta os dados do formul�rio
    const username = document.getElementById('username').value;
    const platform = document.getElementById('platform').value;
    const service = document.getElementById('service').value;
    const duration = document.getElementById('duration').value;

    // Mensagem de confirma��o
    const confirmationMessage = `
        Teste iniciado para ${username} na plataforma ${platform}. 
        Tipo de servi�o: ${service}. Dura��o: ${duration} dia(s).
    `;

    document.getElementById('confirmationMessage').innerText = confirmationMessage;
});
