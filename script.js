const Homepage = document.getElementById("homepage")
const Gamepage = document.getElementById("gamepage")
const Choicepage = document.getElementById("choicepage")
const HomebtnCh = document.getElementById("homebtnch")
const HomebtnHo = document.getElementById("homebtnho")
const PlaybtnHo = document.getElementById("playbtnho")
const PlaybtnCh = document.getElementById("playbtnch")
const Playnowbtn = document.getElementById("playnowbtn")
const Startbtn = document.getElementById("startbtn")
const Backbtn = document.getElementById("backbtn")
const Endbtn = document.getElementById("endbtn")
PlaybtnHo.addEventListener("click", () => {
    Gamepage.classList.remove("hidden");
    Homepage.classList.add("hidden");
})
Playnowbtn.addEventListener("click", () => {
    Gamepage.classList.remove("hidden");
    Homepage.classList.add("hidden");
})
HomebtnCh.addEventListener("click", () => {
    Homepage.classList.remove("hidden");
    Gamepage.classList.add("hidden");
})
Startbtn.addEventListener("click", () => {
    Choicepage.classList.remove("hidden");
    Choicepage.classList.add("blur");
})
Backbtn.addEventListener("click", () => {
    Gamepage.classList.remove("hidden");
    Choicepage.classList.add("hidden");
})

const Rockleft = document.getElementById("rl")
const Rockright = document.getElementById("rr")
const Paparleft = document.getElementById("pl")
const Paparright = document.getElementById("pr")
const Scissorsleft = document.getElementById("sl")
const Scissorsright = document.getElementById("sr")
const Rockbtn = document.getElementById("rockbtn")
const Paparbtn = document.getElementById("paparbtn")
const Scissorbtn = document.getElementById("scissorbtn")
const Randomnum = document.getElementsByClassName("randomnum")
let Yourscore = 0;
let Opponentscore = 0;
let calculatedScore;
const ScoreY = document.getElementById("score1");
const ScoreO = document.getElementById("score2");

const Winpage = document.getElementById("winpage");
const Drawpage = document.getElementById("drawpage");
const Losspage = document.getElementById("losspage");

const Proccedbtnwin = document.getElementById("proccedbtnwin");
const Proccedbtndraw = document.getElementById("proccedbtndraw");
const Proccedbtnloss = document.getElementById("proccedbtnloss");
Rockbtn.addEventListener("click", () => {
    Gamepage.classList.remove("hidden");
    Choicepage.classList.add("hidden");

    Paparright.classList.remove("active");
    Rockright.classList.add("active");
    Scissorsright.classList.remove("active");

    Rockbtn.classList.add("clicked");

    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        Paparleft.classList.remove("active");
        Rockleft.classList.remove("active");
        Scissorsleft.classList.add("active");
        Opponentscore = Opponentscore + 1;
    }
    else if (random === 2) {
        Paparleft.classList.remove("active");
        Rockleft.classList.add("active");
        Scissorsleft.classList.remove("active");
    } else {
        Paparleft.classList.add("active");
        Rockleft.classList.remove("active");
        Scissorsleft.classList.remove("active");
        Yourscore = Yourscore + 1;
    }
    ScoreO.textContent = Opponentscore;
    ScoreY.textContent = Yourscore;
    calculatedScore = Opponentscore - Yourscore;
    if (calculatedScore > 0) {
        Endbtn.addEventListener("click", () => {
            Choicepage.classList.add("hidden");
            Winpage.classList.remove("hidden");
            Winpage.classList.add("blur");
        })
        Proccedbtnwin.addEventListener("click", () => {
            Winpage.classList.add("hidden");
            Homepage.classList.remove("hidden");
            Gamepage.classList.add("hidden");
            Drawpage.classList.add("hidden");

        })
    }
    else if (calculatedScore === 0) {
        Endbtn.addEventListener("click", () => {
            Choicepage.classList.add("hidden");
            Drawpage.classList.remove("hidden");
            Drawpage.classList.add("blur");
        })
        Proccedbtndraw.addEventListener("click", () => {
            Drawpage.classList.add("hidden");
            Homepage.classList.remove("hidden");
            Gamepage.classList.add("hidden");
            Winpage.classList.add("hidden");
        })
    } else {
        Endbtn.addEventListener("click", () => {
            Choicepage.classList.add("hidden");
            Losspage.classList.remove("hidden");
            Losspage.classList.add("blur");
                        Drawpage.classList.add("hidden");
        })
        Proccedbtnloss.addEventListener("click", () => {
            Losspage.classList.add("hidden");
            Homepage.classList.remove("hidden");
            Gamepage.classList.add("hidden");

        })
    }

})
Paparbtn.addEventListener("click", () => {
    Gamepage.classList.remove("hidden");
    Choicepage.classList.add("hidden");

    Paparright.classList.add("active");
    Rockright.classList.remove("active");
    Scissorsright.classList.remove("active");

    Rockbtn.classList.add("clicked");

    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        Paparleft.classList.remove("active");
        Rockleft.classList.remove("active");
        Scissorsleft.classList.add("active");
        Yourscore = Yourscore + 1;
    }
    else if (random === 2) {
        Paparleft.classList.remove("active");
        Rockleft.classList.add("active");
        Scissorsleft.classList.remove("active");
        Opponentscore = Opponentscore + 1;
    } else {
        Paparleft.classList.add("active");
        Rockleft.classList.remove("active");
        Scissorsleft.classList.remove("active");
    }
    ScoreO.textContent = Opponentscore;
    ScoreY.textContent = Yourscore;
    calculatedScore = Opponentscore - Yourscore;
    if (calculatedScore > 0) {
        Endbtn.addEventListener("click", () => {
            Choicepage.classList.add("hidden");
            Winpage.classList.remove("hidden");
            Winpage.classList.add("blur");
        })
        Proccedbtnwin.addEventListener("click", () => {
            Winpage.classList.add("hidden");
            Homepage.classList.remove("hidden");
            Gamepage.classList.add("hidden");
            Drawpage.classList.add("hidden");
        })
    }
    else if (calculatedScore === 0) {
        Endbtn.addEventListener("click", () => {
            Choicepage.classList.add("hidden");
            Drawpage.classList.remove("hidden");
            Drawpage.classList.add("blur");
        })
        Proccedbtndraw.addEventListener("click", () => {
            Drawpage.classList.add("hidden");
            Homepage.classList.remove("hidden");
            Gamepage.classList.add("hidden");
            Winpage.classList.add("hidden");
        })
    } else {
        Endbtn.addEventListener("click", () => {
            Choicepage.classList.add("hidden");
            Losspage.classList.remove("hidden");
            Losspage.classList.add("blur");
                        Drawpage.classList.add("hidden");
        })
        Proccedbtnloss.addEventListener("click", () => {
            Losspage.classList.add("hidden");
            Homepage.classList.remove("hidden");
            Gamepage.classList.add("hidden");

        })
    }
})
Scissorbtn.addEventListener("click", () => {
    Gamepage.classList.remove("hidden");
    Choicepage.classList.add("hidden");

    Paparright.classList.remove("active");
    Rockright.classList.remove("active");
    Scissorsright.classList.add("active");

    Rockbtn.classList.add("clicked");

    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        Paparleft.classList.remove("active");
        Rockleft.classList.remove("active");
        Scissorsleft.classList.add("active");
    }
    else if (random === 2) {
        Paparleft.classList.remove("active");
        Rockleft.classList.add("active");
        Scissorsleft.classList.remove("active");
        Yourscore = Yourscore + 1;
    } else {
        Paparleft.classList.add("active");
        Rockleft.classList.remove("active");
        Scissorsleft.classList.remove("active");
        Opponentscore = Opponentscore + 1;
    }
    ScoreO.textContent = Opponentscore;
    ScoreY.textContent = Yourscore;
    calculatedScore = Opponentscore - Yourscore;
    if (calculatedScore > 0) {
        Endbtn.addEventListener("click", () => {
            Choicepage.classList.add("hidden");
            Winpage.classList.remove("hidden");
            Winpage.classList.add("blur");
            Drawpage.classList.add("hidden");
        })
        Proccedbtnwin.addEventListener("click", () => {
            Winpage.classList.add("hidden");
            Homepage.classList.remove("hidden");
            Gamepage.classList.add("hidden");

        })
    }
    else if (calculatedScore === 0) {
        Endbtn.addEventListener("click", () => {
            Choicepage.classList.add("hidden");
            Drawpage.classList.remove("hidden");
            Drawpage.classList.add("blur");
        })
        Proccedbtndraw.addEventListener("click", () => {
            Drawpage.classList.add("hidden");
            Homepage.classList.remove("hidden");
            Gamepage.classList.add("hidden");
            Winpage.classList.add("hidden");
        })
    } else {
        Endbtn.addEventListener("click", () => {
            Choicepage.classList.add("hidden");
            Losspage.classList.remove("hidden");
            Losspage.classList.add("blur");
                        Drawpage.classList.add("hidden");
        })
        Proccedbtnloss.addEventListener("click", () => {
            Losspage.classList.add("hidden");
            Homepage.classList.remove("hidden");
            Gamepage.classList.add("hidden");

        })
    }
})





