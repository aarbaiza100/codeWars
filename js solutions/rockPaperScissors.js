//you have to return which player won! In case of a draw return Draw!
//Examples :
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

function rockPaperScissors (p1,p2) {
    let rules = {rock: "scissors", paper: "rock", scissors: "paper"};

    if (p1 === p2) return "draw!";

    if (p2 === rules[p1]) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
};
