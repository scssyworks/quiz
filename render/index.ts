let randomizerTimer: any;
const questionsList = [
  'Who’s your favorite superhero and why? Act like him/er',
  'Imitate like your favourite cartoon character',
  'If you could be any animal for a week, which would you choose to be and why?',
  'Describe yourself in three words.',
  'When you wake up in the morning, what’s the first thing you do?',
  'Show us the most interesting thing you have in your purse/wallet.',
  'What’s the lowest grade you ever received in college, and which class was it for?',
  'What’s the longest time, in a single stretch, that you’ve ever been in a car?',
  'Sing your favorite song.',
  'What is one food you can’t give up? and Why?',
  'Who is your favourite cricketer, mimic his signature style (people will guess the name)',
  'Tell us something about yourself that would surprise most people who know you.',
  'What is your favorite outdoor activity?',
  'What do you do to beat stress?',
  'What is the highest speed you rode on two wheeler?',
  'Where were you, and what were you doing when New Year Ever 2019-20 happened?',
  'How many languages can you speak? Say "How are you" in each language.',
  'Which is your least favorite fruit?',
  'How long have you lived in one city?',
  'What do you like to do on weekends?',
  'What’s your favorite nursery rhyme?',
  'Have you ever climbed a mountain or run a marathon?',
  'What’s your favorite video game?',
  'Call the third caller in your most recent call list and tell them you are thinking about them',
  'Have you met anyone famous in past? If you have, tell us story and may we see a photo?',
  'Do you cook? What’s your favorite recipe?',
  'Play a musical instrument. If you have none then improvise.',
  'Have you ever driven anything other than a car or bike? If yes, what?',
  'What is the biggest lie you have ever told',
  'Tell us your most embarassing moment story',
];

const names = [
  'Gopal Saini',
  'Chandra Shekhar Pant',
  'Naman Jain',
  'Pranav Kaushik',
  'Rahul Sharma',
  'Vinay Kumar',
  'Koushik Sadhukhan',
  'Vinay Banga',
  'Jaideep Singh 4',
  'Vedika Jain',
  'Babika B',
  'Vaishnavi Rao B',
  'Deepak Chauhan',
  'Ankit Sharma',
  'Shashwat Goyal',
  'Vijayaragavendiran Raja',
  'Sonika Maheshwari',
  'Vishal Chawla 2',
  'Vivek Chaudhary',
  'Sujata Sihag',
  'Malai Murugan',
  'Saswata Arabinda',
  'Neha Jain',
];

function getRandom(max: number): number {
  return Math.floor(Math.random() * max);
}

function getRandomNames(): string {
  return names[getRandom(names.length)];
}

function getRandomQuestion(): string {
  return questionsList[getRandom(questionsList.length)];
}

function createFriction(): Promise<boolean> {
  let intervalMs = 0.1;
  return new Promise<boolean>((resolve) => {
    const intr = setInterval(() => {
      const customEvent = new CustomEvent('intervaltimer', {
        bubbles: true,
        cancelable: true,
        detail: {
          timer: intervalMs * 1000,
        },
      });
      document.body.dispatchEvent(customEvent);
      intervalMs += 0.1;
      if (intervalMs >= 1) {
        clearInterval(intr);
        resolve(true);
      }
    }, 1000);
  });
}

const target = document.querySelector('app-root')!;

let showQuestion = false;

function getTemplate(): string {
  return `
  <button class="names btn btn-primary btn-lg">${getRandomNames()}</button>
  ${showQuestion ? `<h2 class="question mt-4">${getRandomQuestion()}</h2>` : ''}
`;
}

target.innerHTML = getTemplate();

document.addEventListener('click', (event) => {
  const btn = (event.target as HTMLElement).closest('.names');
  if (btn) {
    document.body.dispatchEvent(
      new CustomEvent('intervaltimer', {
        bubbles: true,
        cancelable: true,
        detail: {
          timer: 0.1,
        },
      })
    );
    showQuestion = false;
    target.innerHTML = getTemplate();

    createFriction().then(() => {
      showQuestion = true;
      target.innerHTML = getTemplate();
      clearInterval(randomizerTimer);
      names.splice(
        names.indexOf(
          (document.querySelector('.names')!.textContent || '').trim()
        ),
        1
      );
      questionsList.splice(
        questionsList.indexOf(
          (document.querySelector('.question')!.textContent || '').trim()
        ),
        1
      );
    });
  }
});

document.body.addEventListener('intervaltimer', (event) => {
  clearInterval(randomizerTimer);
  randomizerTimer = setInterval(() => {
    target.innerHTML = getTemplate();
  }, (event as CustomEvent).detail.timer);
});
