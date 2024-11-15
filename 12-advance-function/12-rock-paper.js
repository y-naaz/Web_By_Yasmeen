  //converting string back to object;
  let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  //console.log(localStorage.getItem("score"));
  //above is a string.
  /*
  if(score===null){//we can also use here !score
      score={
          wins:0,
          losses:0,
          ties:0
      };
  }
  */

  updateScore();
  
  function computerMove() {
    let computer_choice = "";
    let randomm = Math.random();
    if (randomm >= 0 && randomm < 1 / 3) computer_choice = "rock";
    else if (randomm >= 1 / 3 && randomm < 2 / 3) computer_choice = "paper";
    else {
      computer_choice = "scissors";
    }
    return computer_choice;
  }
    let isplaying = false;
    let setIntervalID ;
    function autoplay(){
      if(isplaying==false){
        isplaying = true ; 
        setIntervalID = setInterval(function (){
          const playermove = computerMove();
          const ComputerMove =  computerMove();
          prediction(playermove,ComputerMove);
        } , 1000)
      }
      else{
        isplaying = false;
        clearInterval(setIntervalID);
      }
    }



  function prediction(my_choice, computer_choice) {
    let result = "";
    if (computer_choice == my_choice) {
      result = "T i e";
      score.ties += 1;
    } else if (
      (computer_choice == "paper" && my_choice == "rock") ||
      (computer_choice == "rock" && my_choice == "scissors") ||
      (computer_choice == "scissors" && my_choice == "paper")
    ) {
      result = " You loss";
      score.losses += 1;
    } else {
      result = " You Wins";
      score.wins += 1;
    }

    //storing score into local storage to store values permanently
    localStorage.setItem("score", JSON.stringify(score));

    updateScore();

    return result;
  }

  function updateScore() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins:${score.wins},Losses:${score.losses},ties:${score.ties}`;
  }
  /*Here function displayResult() has some issue in displaying the images and it is also not accepting class ="move-button"*/
  function displayResult(my_choice, computer_choice, result) {
    document.querySelector(".js-result").innerHTML = `${result}`;
    const playerImage = `<img src="${my_choice}-emoji.png" >`;
    const computerImage = `<img src="${computer_choice}-emoji.png">`;
    const moveButtonImg=document.querySelector(".js-decide")
    moveButtonImg.innerHTML = `You choose ${my_choice} ${playerImage} , Computer choose ${computer_choice}${computerImage}`;
  }
 