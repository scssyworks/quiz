const $ = (selector: string): Element | NodeList | null => {
  const elems = document.querySelectorAll(selector);
  if (elems.length === 0) {
    return null;
  }
  if (elems.length === 1) {
    return elems[0];
  }
  return elems;
};

let callCounter = 0;

const alphabets = [
  "A",
  "b",
  "C",
  "d",
  "E",
  "f",
  "G",
  "h",
  "I",
  "j",
  "K",
  "l",
  "M",
  "n",
  "O",
  "p",
  "Q",
  "r",
  "S",
  "t",
  "U",
  "v",
  "W",
  "x",
  "Y",
  "z",
];

const questionsList = [
  "Describe the most ridiculous thing you own. Show it.;MF",
  "Repeat 5 times: How much wood would a woodchuck chuck if a woodchuck could chuck wood;MF",
  "Dance on 'chaka chaka' song;M",
  "What is the most useless talent you have?;MF",
  "If you had to change your name, what would your name be and why would you choose that name?; MF",
  "What's your biggest screw-up in the kitchen?;M",
  "Tell a lie about <:name> and a truth about <:name>;MF",
  "Where was the most embarrassing place you have ever farted?;M",
  "What is the silliest thing you’ve ever seen a stranger do in public?;MF",
  "What do you think your last meal would be if you were on death row?;MF",
  "What’s the craziest thing you’ve ever done after getting really drunk?;MF",
  "What are the things you would like to change if you became God for a day?;MF",
  "Dance on 'Srivalli' song;M",
  "Dance on 'O Antava Mawa' song;M",
  "What is your deepest, darkest secret that no one else knows about?;MF",
  "What was the most embarrassing dress you ever worn in school?;M",
  "What would you do if you were made prime minister for one day?;MF",
  "What is the soundtrack of your life?;MF",
  "What’s the most amusing thing you’ve seen recently?;MF",
  "<:name> would like to ask a question to you;MF",
  "What's your post retirement plan?;MF",
  "What's your most favorite meme?;MF",
  "What’s the best inside joke you’ve ever heard?;MF",
  "If you are a dog, which breed would you want to be?;MF",
  "If you are a cat, and <:name> is a dog, who would win?;MF",
  "What do you want to be remembered for?;MF",
  "What do you want to be NOT remembered for?;MF",
  "How would you sum up the internet in two sentences?;MF",
  "Would you rather be smart or sexy?;MF",
  "In zombie apocalypse, who would last the longest? <:name> or <:name>;MF",
];

const names = [
  "Gopal Saini,M",
  "Chandra Shekhar Pant,M",
  "Naman Jain,M",
  "Rahul Sharma,M",
  "Vinay Kumar,M",
  "Koushik Sadhukhan,M",
  "Jaideep Singh 4,M",
  "Ankit Sharma,M",
  "Shashwat Goyal,M",
  "Vivek Chaudhary,M",
  "Saswata Arabinda,M",
  "Neha Jain,F",
  "Prasun Mukherjee,M",
  "Namit Sawhney,M",
  "Divyansh Kumar,M",
  "Gagan V,M",
  "Nikhil Avina,M",
  "Rishabh Kumar,M",
  "Swetha R,F",
];

const dupNames = [...names];

function getRandom(max: number): number {
  return Math.floor(Math.random() * max);
}

function getRandomNames(): string {
  if (callCounter === 0) {
    return "Click to select a name!";
  }
  if (dupNames.length === 0) {
    return "Game over!";
  }
  let index = getRandom(dupNames.length);
  while (index === dupNames.length) {
    index = getRandom(dupNames.length);
  }
  const [name] = dupNames.splice(index, 1);
  return name;
}

function getRandomQuestion(gender: string): string {
  const qList = questionsList.filter((q) => {
    const [, allowedGender] = q.split(";");
    return allowedGender.includes(gender);
  });
  const qIndex = getRandom(qList.length);
  let [ques] = qList[qIndex].split(";");
  questionsList.splice(questionsList.indexOf(qList[qIndex]), 1);
  ques = ques.replace(/<:name>/g, () => {
    return names[getRandom(names.length)].split(",")[0];
  });
  return ques;
}

const target = $("app-root") as Element;

let showQuestion = false;

function getTemplate(): string {
  const [name, gender] = getRandomNames().split(",");
  console.log(name, gender);
  return `
  <button class="names btn btn-primary btn-lg">${name}</button>
  ${
    showQuestion && gender
      ? `<h2 class="question mt-4">${getRandomQuestion(gender)}</h2>`
      : ""
  }
`;
}

target.innerHTML = getTemplate();

function triggerTimeout(): void {
  setTimeout(() => {
    document.dispatchEvent(new Event("timeout"));
  }, 2000);
}

let interv: NodeJS.Timer;
function startInterval(name: string, target: Element): void {
  interv = setInterval(() => {
    let ranStr = "";
    for (let i = 0; i < name.length; i++) {
      ranStr += alphabets[getRandom(26)];
    }
    target.textContent = ranStr;
  }, 50);
}

document.addEventListener("click", (event) => {
  const btn = (event.target as Element).closest(".names");
  if (btn) {
    // Button is clicked
    callCounter += 1;
    showQuestion = false;
    ($(".question") as Element)?.remove();
    triggerTimeout();
    const currentText = btn.textContent || "";
    startInterval(currentText, btn);
  }
});

document.addEventListener("timeout", () => {
  showQuestion = true;
  clearInterval(interv);
  target.innerHTML = getTemplate();
});
