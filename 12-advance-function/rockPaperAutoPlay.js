// Load score from localStorage or initialize to default values
let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    lose: 0,
    tie: 0,
  };
  
  const paraEle = document.querySelector(".js-score");
  
  // Display initial score
  displayScore();
  document.body.addEventListener('keydown',(event)=>{
      if(event.key==='r') gameplay('rock');
      else if(event.key==='p') gameplay('paper');
      else if(event.key==='s') gameplay('scissors');
  });
  //Applying logic for automatic play . 
  let isplaying= false;
  let setIntervalID;
  function Automatic(){
    
    function autoplay(){
        
        if(isplaying==false){
            isplaying = true;
            setIntervalID = setInterval(
                () =>{
                 const auto_user_move = computerMove();
                gameplay(auto_user_move);
                },1000);
    
        }
      }
      function stopAutoPlay(){
        isplaying = false;
        clearInterval(setIntervalID)
      }
      if(isplaying==true){
        stopAutoPlay();
      }
      else autoplay();
  }
  
  function computerMove() {
    let random = Math.random();
    if (random < 1 / 3) return "rock";
    else if (random < 2 / 3) return "paper";
    else return "scissors";
  }
  
  function gameplay(user_choice) {
    let computer_choice = computerMove();
    let result = "";
  
    if (computer_choice === user_choice) {
      result = "TIE";
      score.tie++;
    } else if (
      (computer_choice === "rock" && user_choice === "scissors") ||
      (computer_choice === "paper" && user_choice === "rock") ||
      (computer_choice === "scissors" && user_choice === "paper")
    ) {
      result = "You LOSE";
      score.lose++;
    } else {
      result = "You WIN";
      score.wins++;
    }
  
    // Save updated score to localStorage
    localStorage.setItem("score", JSON.stringify(score));
    
    // Update display
    displayScore(computer_choice, user_choice, result);
  
    const para1Ele = document.querySelector(".js-result");
    para1Ele.innerHTML = `${result}`;
  
    const para2Ele = document.querySelector(".js-move");
    para2Ele.innerHTML = `You <img src="./${user_choice}-emoji.png" alt="${user_choice} image"/> <img src="./${computer_choice}-emoji.png" alt="${computer_choice} image"/> Computer`;
  }
  
  function displayScore(computer_choice = "", user_choice = "", result = "") {
    paraEle.innerHTML = `Win: ${score.wins} Lose: ${score.lose} Tie: ${score.tie}`;
  }
  
  function resetScore() {
    // Clear scores and display reset score
    score = { wins: 0, lose: 0, tie: 0 };
    localStorage.setItem("score", JSON.stringify(score));
    displayScore();
  }
  