const computerimage = document.querySelector('.computer img');
const playerimage = document.querySelector('.player img');
const computerpoints = document.querySelector('.computerPoints');
const playerpoints = document.querySelector('.playerPoints');
const options = document.querySelectorAll('.options button');

options.forEach((option) => {
    option.addEventListener('click', () => {
        computerimage.classList.add("computerShake");
        playerimage.classList.add("playerShake");

        setTimeout(() => {
            computerimage.classList.remove("computerShake");
            playerimage.classList.remove("playerShake");

            playerimage.src = "/images/" + option.innerHTML + "Player.png";

            const choice = ["STONE", "PAPER", "SCISSORS"];
            let arrayNo = Math.floor(Math.random() * 3);
            let computerchoice = choice[arrayNo];
            computerimage.src = "/images/" + computerchoice + "Computer.png";

            let cpoints = parseInt(computerpoints.innerHTML);
            let ppoints = parseInt(playerpoints.innerHTML);

            if (option.innerHTML == "STONE") {
                if (computerchoice == "PAPER")
                    computerpoints.innerHTML = cpoints + 1;
                else if (computerchoice == "SCISSORS")
                    playerpoints.innerHTML = ppoints + 1;
            }else if(option.innerHTML == "PAPER") {
                if (computerchoice == "SCISSORS")
                    computerpoints.innerHTML = cpoints + 1;
                else if (computerchoice == "STONE")
                    playerpoints.innerHTML = ppoints + 1;
            }else {
                if (computerchoice == "STONE")
                    computerpoints.innerHTML = cpoints + 1;
                else if (computerchoice == "PAPER")
                    playerpoints.innerHTML = ppoints + 1;
                }
        }, 900);

    });

});