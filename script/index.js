// Referenciando os campos do formulario

//Variáveis

//data
let date = new Date();


//Formulario
const historyDataForm = document.getElementById('data_history');

//Corpo da história
const story = document.getElementById('story');

//Nome do personagem    
const character = document.getElementById("name")




// Gênero personagem
// Captura as seleções do usuário
const selectGen = (valor) => {
    if (valor != '') {
        switch (valor) {
            case "campones":
                tipoPersonagem = "um jovem camponês";
                break;
            case "duende":
                tipoPersonagem = "um corajoso duende";
                break;
            case "mago":
                tipoPersonagem = "um jovem aprendiz de magia";
                break;
            case "cavaleiro":
                tipoPersonagem = "um jovem e destemido cavaleiro";
                break;
        }
        return tipoPersonagem;
    }


}


// Gênero da ficção
// Captura as seleções do usuário
function histGen(valor) {
    if (valor != '') {
        switch (valor) {
            case "ets":
                ficcao = "discos voadores";
                aparencia = "pratos de sopa com as bordas voltadas umas contra as outras"
                break;
            case "dragoes":
                ficcao = "ferozes dragões";
                aparencia = "imensos lagartos alados"
                break;
            case "gigantes":
                ficcao = "malvados gigantes";
                aparencia = "às criaturas descritas em contos de fadas"
                break;
        }
        return ficcao;
    }

}


//Arma do personagem
// Captura as seleções do usuário
function weapponType(valor) {
    if (valor != '') {
        switch (valor) {
            case "sword":
                arma = "sua polida e reluzente espada";
                break;
            case "laser":
                arma = "sua arma de raios laser";
                break;
            case "staff":
                arma = "seu longo cajado de galho de amendoeira";
                break;
            case "stick":
                arma = "seu bastão de cedro vermelho";
                break;
        }
        return arma;
    }
}

//Acontecimentos
// Captura as seleções do usuário
function occurrence(valor) {
    if (valor != '') {
        switch (valor) {
            case "buzz":
                evento = "um estranho zumbido";
                break;
            case "bang":
                evento = "um forte e ensurdecedor estrondo";
                break;
            case "light":
                evento = "um intenso clarão que fez a noite parecer o dia";
                break;
            case "wind":
                evento = "um vento impetuoso e implacável";
                break;
        }
        return evento;

    }
}

// Local da história
// Captura as seleções do usuário
function setPlace(valor) {
    if (valor != '') {
        switch (valor) {
            case "county":
                place = "do pacato condado de Samigina";
                break;
            case "Kingdom":
                place = "dos arredores do Reino de Asmoday";
                break;
            case "village":
                place = "do pequeno vilarejo de Sitri";
                break;
            case "city":
                place = "do interior da cidade de Agares";
                break;
        }
        return place;
    }
}


//Limpa o formulário
const resetform = () => document.getElementById('data_history').reset();

// Formata o texto e gera o nome do personagem
function makeText() {
    let personagem = '';
    if (personagem.value != '') {
        personagem = document.getElementById("name").value
    }

    let newHist = []
    newHist.push(`O texto que você vai ler agora conta a história de, ${personagem}, ${this.tipoPersonagem}, em uma aventura de outro mundo...

        “[...]Era por volta do ano de ${date.getFullYear()}, perto das três da madrugada, o barulho de ${this.evento} enlouqueceu os cachorros de toda a redondeza.
         Os animais uivavam desesperadamente e corriam de um lado para o outro
        Pareciam ter sentido vibrações que somente eles captam e os homens jamais percebem.
        A louca sinfonia canina atravessou as fronteiras ${this.place} e se espalhou em ondas por todo 0 horizonte.
        ${personagem} pegou ${this.arma} e foi lá fora ver o que poderia ser. Foi então que ele avistou três silhuetas assustadoras. Não teve dúvida de que se tratava de ${this.ficcao},
         como os imaginados pelos artistas de histórias e renomados pintores. Aqueles ${this.ficcao} assemelhavam-se a ${this.aparencia}. Ao se aproximarem, varreram a cerração com a força de seus movimentos, abrindo uma enorme clareira na vegetação ao redor de onde pararam.
        Seis ${this.ficcao}, com seus olhos fixos no ${this.tipoPersonagem} o cercaram. Avançaram então na direção dele e ${personagem} o ${this.tipoPersonagem} apavorado e tremendo de medo, 
        soltou um sonoro grito de "SOCORRO!" O que acordou seus pais, e como num passe de mágica, apareceu nos braços de sua mãe que lhe disse:
        _ Calma filho, foi só um pesadelo!"`)

    console.log(newHist[0])
}

//Faz a chamada das funções
const createHistory = () => {

    selectGen()
    histGen()
    weapponType()
    occurrence()
    setPlace()
    makeText()

    resetform()
}




//Captura o valor do input 
document.querySelector('input').addEventListener('mouseout', () => {
    let personagem = character.value
    console.log(personagem)
})








