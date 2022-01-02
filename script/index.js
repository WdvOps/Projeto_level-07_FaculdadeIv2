// Referenciando os campos do formulario

//Variáveis

//data
let date = new Date();

//Formulario
const historyDataForm = document.getElementById("data_history");

//Fundo modal
const backModal = document.querySelector(".modal-back");

//Modal
const modal = document.querySelector(".modal");

//Corpo da história
const typeWriter = document.getElementById("story");

//Nome do personagem
const character = document.getElementById("name");

//Background history anime

var images = [];

// Gênero personagem
// Captura as seleções do usuário
const selectGen = (valor) => {
    if (valor != "") {
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
};

// Gênero da ficção
// Captura as seleções do usuário
function histGen(valor) {
    if (valor != "") {
        switch (valor) {
            case "ets":
                ficcao = "discos voadores";
                aparencia =
                    "pratos de sopa com as bordas voltadas umas contra as outras";
                images[0] = "https://i.ibb.co/8DqgWP3/ovni00.webp";
                images[1] = "https://i.ibb.co/G2WrrdL/ovni01.webp";
                images[2] = "https://i.ibb.co/9VsDP0B/ovni03.jpg";
                images[3] = "https://i.ibb.co/6Hn1c7g/ovni02.jpg";
                images[4] = "https://i.ibb.co/vLz3vg4/q8NDLm.webp";
                break;
            case "dragoes":
                ficcao = "ferozes dragões";
                aparencia = "imensos lagartos alados";
                images[0] = "https://i.ibb.co/Wy97jDx/dragoes03.jpg";
                images[1] = "https://i.ibb.co/dbJH2cc/dragoes02.jpg";
                images[2] = "https://i.ibb.co/QNCjshq/dragoes01.jpg";
                images[3] = "https://i.ibb.co/R4V1frh/dragoes00.jpg";
                break;
            case "gigantes":
                ficcao = "enormes e malvados gigantes";
                aparencia = "às criaturas descritas em contos de fadas";
                images[0] = "https://i.ibb.co/SfC7MPx/giants03.jpg";
                images[1] = "https://i.ibb.co/0hV7Pgn/Jack-the-Giant-Slayer-image.jpg";
                images[2] = "https://i.ibb.co/r6kXGnP/giants00.jpg";
                images[3] = "https://i.ibb.co/f4pffrK/giants02.jpg";
                break;
        }
        return ficcao;
    }
}

//Arma do personagem
// Captura as seleções do usuário
function weapponType(valor) {
    if (valor != "") {
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
    if (valor != "") {
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
    if (valor != "") {
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
const resetform = () => document.getElementById("data_history").reset();

// Formata o texto e gera o nome do personagem
function makeText() {
    const type = document.getElementById("type");
    let personagem = "";
    if (personagem.value != "") {
        personagem = document.getElementById("name").value;
    }

    let newHist = [];
    newHist.push(`O texto que você vai ler agora conta a história de ${personagem}, ${this.tipoPersonagem
        }, em uma aventura de outro mundo...
        “[...]Era por volta do ano de ${date.getFullYear()}, perto das três da madrugada, ${this.evento
        } enlouqueceu os cachorros de toda a redondeza.
         Os animais uivavam desesperadamente e corriam de um lado para o outro!
        Pareciam ter sentido vibrações que somente eles captam e os homens jamais percebem.
        A louca sinfonia canina atravessou as fronteiras ${this.place
        } e se espalhou em ondas por todo o horizonte.
        ${personagem} pegou ${this.arma
        } e foi lá fora ver o que poderia ser. Foi então que ele avistou três silhuetas assustadoras. Não teve dúvida de que se tratava de ${this.ficcao
        },
         como os imaginados pelos artistas de histórias e renomados pintores. Aqueles ${this.ficcao
        } assemelhavam-se a ${this.aparencia
        }. Ao se aproximarem, varreram a cerração com a força de seus movimentos, abrindo uma enorme clareira na vegetação ao redor de onde pararam.
        Seis ${this.ficcao
        }, com seus olhos fixos no nosso herói, o cercaram. Avançaram então na direção dele e ${personagem} apavorado e tremendo de medo, 
        soltou um sonoro grito de "SOCORRO!" O que acordou seus pais, e como num passe de mágica, apareceu nos braços de sua mãe que lhe disse:
        _ Calma filho, foi só um pesadelo!"`);

    type.innerHTML += newHist[0];

    function typeWriter(elemento) {
        const newHist = elemento.innerHTML.split("");
        const fullText = elemento.innerHTML;

        elemento.innerHTML = "";
        for (let i = 0; i < newHist.length; i++) {
            setTimeout(() => {
                elemento.innerHTML += newHist[i];
                if (fullText === elemento.innerHTML) {
                    setTimeout(() => {
                        exit();
                    }, 2000);
                }
            }, 75 * i);
        }
    }

    typeWriter(type);
    showModal();
}

const showModal = () => {
    historyDataForm.style.display = "none";
    backModal.style.display = "block";
    modal.style.display = "block";
    typeWriter.style.display = "block";
};

const exit = () => {
    historyDataForm.style.display = "flex";
    backModal.style.display = "none";
    modal.style.display = "none";
    typeWriter.style.display = "none";
    location.reload();
};

var i = 0;
var slideTime = 3000; // 3 seconds

function changePicture() {
    document.querySelector(".modal");
    modal.style.backgroundImage = `url(${images[i]})`;

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changePicture()", slideTime);
}

window.onload = changePicture;

// Fecha modal ao final da história

//Faz a chamada das funções
const createHistory = () => {
    selectGen();
    histGen();
    weapponType();
    occurrence();
    setPlace();
    makeText();
    resetform();
};

//Captura o valor do input
document.querySelector("input").addEventListener("mouseout", () => {
    let personagem = character.value;
    console.log(personagem);
});