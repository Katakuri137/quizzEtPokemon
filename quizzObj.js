const prompt = require('prompt-sync')()
class Questions {
    constructor(_question, _response, _goodAnswer) {
        this.question = _question
        this._response = _responses
        this._goodAnswer = _goodAnswer
    }
    displayQuestion() {
        console.log(this.question);
    }

    displayResponse() {
        this.response.forEach(response => {
            console.log(response);
        });
    }

    ask() {
        let reply = prompt('entre la bonne réponse')
        return reply
    }

    checkReply(reply) {
        if (reply == this.goodAnswer) {
            console.log("gagné");
        }
        else {
            console.log("perdu");
        }
    }
}

class Quizz {
    constructor(_questions) {
        this.questions = _questions
    }

    init() {
        for (let i = 0; i < this.question.length; i++) {
            this.questions[i].displayQuestion()
            this.questions[i].displayResponse()
            let reply = this.questions[i].ask()
            this.questions[i].checkReply(reply)
        }
    }
}

// let Response = require(./question)

let questionOne = new Question("Quel est le meilleur footballeur ?", ["messi", "roni", "mbappe", "gomez"], "messi")
let quiz = new Quizz([questionOne])
