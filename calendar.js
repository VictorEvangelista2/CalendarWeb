function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[(parseInt(days) + 2)];

    if (days <= 0 || isNaN(days) || days > 31) {
        alert("Digite um número que esteja de acordo com o calendário");
        return;
    }

    
    let usedColors = Array.from(calendar.getElementsByTagName('td'))
                        .filter(day => day.style.backgroundColor === color)
                        .length > 0;

    if (usedColors) {
        alert(`A cor "${color}" já foi usada para um frete. Escolha outra cor.`);
        return;
    }

    document.getElementById('meuBotao').addEventListener('click', function() {
            colorirDia();
            alert("Seu frete foi marcado !!! Aguarde o dia selecionado para realização do frete.");
        });

    td.style.backgroundColor = color;
}



    