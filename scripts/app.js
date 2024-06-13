let buttons = document.querySelectorAll("button");
let scoreJoueur = document.getElementById("score-joueur");
let scoreOrdi = document.getElementById("score-ordi");
let divresult = document.getElementById("result");
let scoreJoueurNum = parseInt(scoreJoueur.innerHTML);
let scoreOrdiNum = parseInt(scoreOrdi.innerHTML);
let divoptions = document.getElementById("options");
let buttonReset = document.createElement("button");
let p = document.createElement("p");
let divOptionResponsive = document.getElementsByClassName("option-responsive")[0];


buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const joueur = button.innerHTML;
        const ordinateur = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";

        if (joueur === ordinateur) {
            resultat = "Egalité !";

        } else if ((joueur === "👊" && ordinateur === "✌") || (joueur === "✋" && ordinateur === "👊") || (joueur === "✌" && ordinateur === "✋")) {
            resultat = "Tu as gagné !";
            scoreJoueurNum += 1;
        } else {
            resultat = "Tu as perdu !";
            scoreOrdiNum += 1;
        }

        scoreJoueur.innerHTML = scoreJoueurNum.toString();
        scoreOrdi.innerHTML = scoreOrdiNum.toString();

        p.innerHTML = `${resultat}<br>${joueur} VS ${ordinateur}`;

        divresult.appendChild(p)
        p.style = "text-align: center; font-size: 30px; padding-bottom: 10%; padding-top: 3%;";

        if (scoreJoueurNum !== 0 || scoreOrdiNum !== 0) {
            if (window.innerWidth > 767){
                if (!divoptions.contains(buttonReset)) {
                    buttonReset.innerHTML = "Réinitialiser";
                    divoptions.appendChild(buttonReset);
                    buttonReset.style = "color: #161616; padding: 2%; font-size: 20px;"
                }
            } else {
                if (!divOptionResponsive.contains(buttonReset)) {
                    buttonReset.innerHTML = "Réinitialiser";
                    divOptionResponsive.appendChild(buttonReset);
                    buttonReset.style = "color: #161616; padding: 7%; font-size: 20px;"
                }
            }
        }
    });
});

buttonReset.addEventListener("click", resetfunction);


function resetfunction() {
    scoreJoueurNum = 0;
    scoreOrdiNum = 0;
    scoreJoueur.innerHTML = "0";
    scoreOrdi.innerHTML = "0";
    buttonReset.remove();
    p.remove();
}