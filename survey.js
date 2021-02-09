const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (name) => {
  rl.question("what's an activity you like doing ?", (activity) => {
    rl.question("what do you listen to while doing that ?", (music) => {
      rl.question("which meal is your favourite (eg. dinner, lunch, brunch, etc.) ", (meal) => {
        rl.question("what's you favourite thing to eat for that meal? ", (food) => {
          rl.question("which sport is your absolute favourite? ", (sport) => {
            rl.question("what is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`Hi, my name is ${name}, I like to ${activity} while listening to some ${music}.
              ${meal} is my favourite meal of the day and ${food} is my favorite food. 
              I like ${sport} and my superpower is ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

// loop?
// const questions = [
//   "What's your name?",
//   "what's an activity you like doing?",
//   "what do you listen to while doing that?",
//   "which meal is your favourite (eg. dinner, lunch, brunch, etc.)",
//   "what's you favourite thing to eat for that meal?",
//   "which sport is your absolute favourite?",
//   "what is your superpower? In a few words, tell us what you are amazing at!"
// ];

// const answers = {};

// for (const question of questions) {
//   rl.question(question, (answer) => {
//     answers = [questions.indexOf(question)]
//     if (questions.indexOf(question) === questions.length - 1) {
//       console.log(`Hi, my name is ${name}, I like to ${activity} while listening to some ${music}.
//       ${meal} is my favourite meal of the day and ${food} is my favorite food. 
//       I like ${sport} and my superpower is ${superpower}`);
//       rl.close();
//     }   
//   })
// }