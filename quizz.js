const prompt = require('prompt-sync')()

// Indice quizz 100% Marseillais ;)

const questions = [
    {
        question: "Quel est la capitale del Mundo ?",
        reponses: ["Marseille", "Los Angeles", "Cancun", "Dubai"],
        bonneReponse: 0,
        points: 10,
    },
    {
        question: "Quel est le meilleur rappeur francais?",
        reponses: ["Ninho", "SCH", "JUL", "PNL"],
        bonneReponse: 2,
        points: 10
    },
    {
        question: "Qui à crée les simpsons ?",
        reponses: ["Matt Groening", "Homer Simpson", "David Coperfield", "Bernard Tapis"],
        bonneReponse: 3,
        points: 10
    },
    {
        question: "Quel est la plus belle femme au monde ?",
        reponses: ["Paola Locatelli", "Maeva Ghennam", "Fiona de shreck", "Miss Univers"],
        bonneReponse: 3,
        points: 10
    },
    {
        question: "Quel est la voiture la plus rapide au monde ?",
        reponses: ["RS3", "Macan GTS", "C63s", "La 407 de Taxi"],
        bonneReponse: 3,
        points: 10
    }
];

let score = 0;

function quizzduBrody(question) {
    let rep;
    do {
        console.log(question.question);
        for (let i = 0; i < question.reponses.length; i++) {
            console.log((i + 1) + " : " + question.reponses[i]);
        }
        console.log("Valeur : " + question.points + " points par bonne réponse .");
        rep = prompt("Entrez le numéro de ton choix : ");
        if (rep < 1 || rep > 4) {
            console.log("Erreur ! Veuillez entrer un numéro entre 1 et 4.");
        } else if (rep - 1 === question.bonneReponse) {
            score = score + question.points;
            console.log("Monstre ! Bien vue le s ! " + question.points + " points.");
        } else {
            console.log("Erreur ! kes tu me fais ?? " + question.reponses[question.bonneReponse] + ".");
        }
    } while (rep < 1 || rep > 4);
}

for (let i = 0; i < questions.length; i++) {
    quizzduBrody(questions[i]);
}

console.log("Vous avez obtenu " + score + " points sur 50 points possibles. ");
if (score > 35) {
    console.log("TRIPLE MONSTRREE #BIENVUE LE S !!");
} else if (score > 20) {
    console.log("PAS TOP LE SANG TU DECONNE HÉEE ! ");
} else {
    console.log("VAS TE FAIRE ENCADRÉ.. TA COULER LE S !");
}