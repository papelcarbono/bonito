function calcularTotal() {
    var precoCafeManha = 0.70;
    var precoAlmoco = 1.45;

    var qtdCafeManha = parseInt(document.getElementById('cafeManha').value) || 0;
    var qtdAlmoco = parseInt(document.getElementById('almoco').value) || 0;

    var total = (qtdCafeManha * precoCafeManha) + (qtdAlmoco * precoAlmoco);

    document.getElementById('total').textContent = 'Total: R$ ' + total.toFixed(2);
}

document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var total = document.getElementById('total').textContent;
    var totalValue = total.split('R$ ')[1];

    // Gera o QR Code com o valor total
    GerarQRCode(totalValue);

    // Define o valor total no modal
    document.getElementById('modalTotal').textContent = total;

    // Exibe o modal
    document.getElementById('qrModal').style.display = "block";
});

function GerarQRCode(data) {
    var QuickChartAPI = 'https://quickchart.io/qr?text=';
    var conteudoQRCode = QuickChartAPI + encodeURIComponent("Total: R$ " + data);
    document.querySelector('#QRCodeImage').src = conteudoQRCode;
}

function closeModal() {
    document.getElementById('qrModal').style.display = "none";
}
