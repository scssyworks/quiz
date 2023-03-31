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

const names = [
  "Gopal Saini",
  "Chandra Shekhar Pant",
  "Naman Jain",
  "Deepak Chauhan",
  "Gagan V",
  "Vijay Raja",
  "Vinay Kumar 4",
  "Rishabh Kumar",
  "Pranav Kaushik",
  "Namit Sawhney",
  "Rahul Sharma",
  "Nikhil Avina",
  "Utkarsh Raj",
  "Ankit Sharma",
  "Shashwat Goyal",
  "Saswata Arabinda",
  "Vaishnavi Rao",
  "Jaideep Singh"
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

const target = $("app-root") as Element;

let showQuestion = false;

function getTemplate(): string {
  const name = getRandomNames();
  return `
  <button class="names btn btn-primary btn-lg">${name}</button>
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
