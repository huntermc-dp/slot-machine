class SlotMachine {
  constructor() {
    // this.symbols = ["1", "2", "3", "4", "5", "6"];
    // this.symbols = ["1", "1", "1", "1", "1", "1"];
    this.symbols = ["💲", "🎱", "🍒", "⭐️", "🤑", "🍻"];
    this.balance = 0;
  }
  deposit() {
    let amount = prompt(`How many coins would you like to insert?`);
    let total = this.balance + amount;
    console.log(
      `Thank you for you contribution! Your balance is ${total} coins.`
    );
    this.balance = total;
  }
  withdraw() {
    let amount = prompt(`How many coins would you like to use on this spin?`);
    let total = this.balance - amount;
    console.log(`You have ${total} coins left.`);
    this.balance = total;
  }
  spin() {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const symbol =
        this.symbols[Math.floor(Math.random() * this.symbols.length)];
      result.push(symbol);
    }
    return result;
  }
  display(grid) {
    for (let row of grid) {
      console.log(row.join(" | "));
    }
  }
  play() {
    console.log("Welcome to Hunter's Slot Machine! Pepare to lose...");
    while (true) {
      let user_input = prompt(`
      Menu
      --------------
      (D)eposit Coins
      (S)pin


      (Q)uit
      `);
      if (user_input.toLowerCase() === "d") {
        this.deposit();
      } else if (user_input.toLowerCase() === "s") {
        let amount = prompt(
          `How many coins would you like to use on this spin?`
        );
        let total = this.balance - amount;
        console.log(`You have ${total} coins left.`);
        this.balance = total;
        // console.log("\nSpinning...");
        const grid = [];
        for (let i = 0; i < 3; i++) {
          const result = this.spin();
          grid.push(result);
        }
        this.display(grid);
        if (
          grid[0][0] === grid[0][1] &&
          grid[0][1] === grid[0][2] &&
          grid[0][0] !== undefined
        ) {
          console.log("Congratulations! You won the jackpot!");
          let profit = 50 * amount + this.balance;
          console.log(`You have ${profit} coins left.`);
          this.balance = profit;
        } else {
          console.log("Better luck next time!");
        }
        const playAgain = prompt("Do you want to play again? (y/n): ");
        if (playAgain.toLowerCase() !== "y") {
          return;
        }
      }
    }
  }
}
const slotMachine = new SlotMachine();
slotMachine.play();
