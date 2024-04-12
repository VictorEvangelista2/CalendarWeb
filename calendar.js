function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[(parseInt(days) + 2)];

    if (days <= 0 || isNaN(days) || days > 31) {
        alert("Digite um número que esteja de acordo com o calendário");
        return;
    }

    // Verifica se a cor já foi usada anteriormente
    let usedColors = Array.from(calendar.getElementsByTagName('td'))
                        .filter(day => day.style.backgroundColor === color)
                        .length > 0;

    if (usedColors) {
        alert(`A cor "${color}" já foi usada para um frete. Escolha outra cor.`);
        return;
    }

    // Aplica a cor selecionada ao dia escolhido
    td.style.backgroundColor = color;
}



    