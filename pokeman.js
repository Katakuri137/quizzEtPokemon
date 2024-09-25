const prompt = require('prompt-sync')();

const totoManess = {
    name: "Toto Maness",
    pv: 100,
    attaques: [
        { nom: "Ptite Moula", puissance: 10, chanceToucher: 0.50 },
        { nom: "Soin Léger", puissance: -15, chanceToucher: 0.33 },
        { nom: "Gross Moula", puissance: 20, chanceToucher: 0.33 },
        { nom: "Frappe De Ketama", puissance: 30, chanceToucher: 0.25 },
    ]
};

const karadok = {
    name: "Karadoc",
    pv: 100,
    attaques: [
        { nom: "Frappe Météore", puissance: 10, chanceToucher: 0.50 },
        { nom: "Soin Léger", puissance: -15, chanceToucher: 0.33 },
        { nom: "Coup de Coude", puissance: 20, chanceToucher: 0.33 },
        { nom: "Coup de boule a la zizou", puissance: 30, chanceToucher: 0.25 },
    ]
};

function afficherPV() {
    console.log("PV de Toto Maness : " + totoManess.pv + " PV");
    console.log("PV de Karadok : " + karadok.pv + " PV");
}

function choisirAttaque(entite) {
    console.log("Choisissez une attaque pour " + entite.name + " :");
    for (let i = 0; i < entite.attaques.length; i++) {
        console.log((i + 1) + ".: " + entite.attaques[i].nom + " ( Puissance : " + entite.attaques[i].puissance + "," + " Précision : " + entite.attaques[i].chanceToucher * 100 + "% )");
    }
    let choix = 0;
    while (!choix || choix < 1 || choix > entite.attaques.length) {
        choix = prompt("Entrez le numéro de l'attaque (1-" + entite.attaques.length + ") :");
        choix = parseInt(choix);
    }
    return entite.attaques[choix - 1];
}


function infligerDegats(attaque, adversaire, entite) {
    const hasard = Math.random();
    if (hasard < attaque.chanceToucher) {
        if (attaque.puissance > 0) {
            adversaire.pv = adversaire.pv - attaque.puissance;
            console.log(attaque.nom + " inflige " + attaque.puissance + " PV de dégâts à " + adversaire.name + "!");
        } else {
            entite.pv = entite.pv - attaque.puissance;
            console.log(attaque.nom + " soigne " + -attaque.puissance + " PV à " + entite.name + "!");
        }
    } else {
        console.log(attaque.nom + " rate sa cible! ");
    }
}
function ordinateurChoisitAttaque(rawOrdi) {
    const choix = Math.floor(Math.random() * rawOrdi.attaques.length);
    return rawOrdi.attaques[choix];
}

console.log("Combat entre Toto Maness et Karadoc le Biker!");
while (totoManess.pv > 0 && karadok.pv > 0) {
    afficherPV();
    const attaqueGuerrier = choisirAttaque(totoManess);
    infligerDegats(attaqueGuerrier, karadok, totoManess);
    if (karadok.pv <= 0) break;
    console.log("Tour de Karadoc le Biker...");

    const attaqueKaradoc = ordinateurChoisitAttaque(karadok);
    infligerDegats(attaqueKaradoc, totoManess, karadok);
}

if (totoManess.pv > 0) {
    console.log("Toto Maness remporte le combat!");
} else {
    console.log("Karadoc le Biker remporte le combat! ");
}