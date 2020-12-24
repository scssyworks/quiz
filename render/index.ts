const questionsList = [
  "Who’s your favorite superhero and why?",
  "Who is your favorite cartoon character and why?",
  "If you could be any animal for a week, which would you choose to be and why?",
  "Describe yourself in three words.",
  "When you wake up in the morning, what’s the first thing you do?",
  "Show us the most interesting thing you have in your purse/wallet.",
  "What’s the lowest grade you ever received in college, and which class was it for?",
  "What’s the longest time, in a single stretch, that you’ve ever been in a car?",
  "What’s your favorite song?",
  "How many siblings do you have, and where are you in the order?",
  "What is one food you can’t give up?",
  "Which sport do you most like to watch?",
  "Tell us something about yourself that would surprise most people who know you.",
  "What is your favorite outdoor activity?",
  "What do you do to beat stress?",
  "What is the highest speed you rode on two wheeler?",
  "Where were you, and what were you doing when New Year Ever 2019-20 happened?",
  "How many languages can you speak? Say How are you in each language.",
  "Are you good at fixing things?",
  "Which is your least favorite fruit?",
  "How long have you lived in one city?",
  "What do you like to do on weekends?",
  "What’s your favorite nursery rhyme?",
  "Have you ever climbed a mountain or run a marathon?",
  "What’s your favorite video game?",
  "Have you met anyone famous in past? If you have, may I see a photo?",
  "Do you cook? What’s your favorite recipe?",
  "Do you play a musical instrument? Yes then which, May we hear you playing?",
  "Have you ever driven anything other than a car or light truck? If yes, what?",
];

const names = [
  "Gopal Saini ",
  "Chandra Shekhar Pant ",
  "Naman Jain ",
  "Pranav Kaushik ",
  "Rahul Sharma ",
  "Vinay Kumar ",
  "Koushik Sadhukhan ",
  "Vinay Banga ",
  "Jaideep Singh 4 ",
  "Vedika Jain ",
  "Babika B ",
  "Vaishnavi Rao B ",
  "Deepak Chauhan ",
  "Ankit Sharma ",
  "Shashwat Goyal ",
  "Vijayaragavendiran Raja ",
  "Sonika Maheshwari ",
  "Vishal Chawla 2 ",
  "Vivek Chaudhary ",
  "Sujata Sihag ",
  "Malai Murugan ",
  "Saswata Arabinda ",
  "Neha Jain ",
];

function getRandom(max: number): number {
  return Math.floor(Math.random() * max);
}

function getRandomNames() {
  return names[getRandom(names.length)];
}

function getRandomQuestion() {
  return questionsList[getRandom(questionsList.length)];
}

const target = document.querySelector("app-root")!;

const showQuestion = false;

function getTemplate(): string {
  return `
  <button class="names btn btn-primary btn-lg">${getRandomNames()}</button>
  ${showQuestion ? `<h2 class="question mt-4">${getRandomQuestion()}</h2>` : ""}
`;
}

target.innerHTML = getTemplate();

document.querySelector(".names")?.addEventListener("click", () => {
  // TODO: Randomize names
});
