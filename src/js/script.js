let chave = 'cebcd482eda57fa9a6714c1c2ba91885'

function clickNoBotao() {
    /*
    Passo 2 - Pegar o que está dentro do input 
    value - Vai pegar o que tem dentro da classe
    */
    let cidade = document.querySelector('.input-cidade').value

    buscarCidade(cidade)
}

//passo 3 - Ir no servidor e pegar as informações do tempo atualizadas
async function buscarCidade(cidade) {
    /*
    await - Espere
    fetch - ferramenta do JS para acessar servidores 
    then - Então
    json - JS object nonation(o formato que o JS entende)
    */
    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade +
        '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric',).then(resposta => resposta.json())

    colocarNaTela(dados)

}

/*
Clica no botão -> Chama a função clickNoBotao()
-> Vai no input e pega o que está lá dentro
-> Passar a cidade para o servidor
*/

function traduzirDescricao(descricao) {
    switch (descricao) {
        case 'Thunderstorm':
            return 'Tempestade';
        case 'Drizzle':
            return 'Garoa';
        case 'Rain':
            return 'Chuva';
        case 'Snow':
            return 'Neve';
        case 'Mist':
            return 'Neblina';
        case 'Smoke':
            return 'Fumaça';
        case 'Haze':
            return 'Nevoeiro';
        case 'Dust':
            return 'Poeira';
        case 'Fog':
            return 'Névoa';
        case 'Sand':
            return 'Areia';
        case 'Ash':
            return 'Cinzas';
        case 'Squall':
            return 'Rajada de Vento';
        case 'Tornado':
            return 'Tornado';
        case 'Claro':
            return 'Céu Limpo';
        case 'Clouds':
            return 'Nuvens';
        case 'Clear Sky':
            return 'Céu Limpo';
        case 'Mostly Sunny':
            return 'Parcialmente Ensolarado';
        case 'Partial Cloudy':
            return 'Parcialmente Nublado';
        case 'Overcast':
            return 'Nublado';
        case 'Isolated Rain':
            return 'Chuva Isolada';
        case 'Possible Rain':
            return 'Possível Chuva';
        case 'Rain Showers':
            return 'Chuva de Verão';
        case 'Cloudy and Rain':
            return 'Nublado com Chuva';
        case 'Unstable':
            return 'Instável';
        case 'Rain in the Afternoon':
            return 'Chuva à Tarde';
        case 'Cloudy and Isolated':
            return 'Nublado e Isolado';
        case 'Rainy and Frosty':
            return 'Chuvoso e Gélido';
        case 'scattered clouds':
            return 'Nuvens Dispersas';
        case 'few clouds':
            return 'Poucas Nuvens';
        case 'broken clouds':
            return 'Nuvens Quebradas';
        case 'light rain':
            return 'Chuva Fraca';
        case 'moderate rain':
            return 'Chuva Moderada';
        case 'overcast clouds':
            return 'Nuvens Nubladas';
        default:
            return descricao; // Retornar a descrição original se não houver tradução disponível.
    }
}

//Passo 5 - Colocar as informações na tela
function colocarNaTela(dados) {
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name

    //Math.floor - Ferramenta do JS para arrendondar valores.
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "°C"

    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

    document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"

    document.querySelector('.texto-previsao').innerHTML = traduzirDescricao(dados.weather[0].description)
}
