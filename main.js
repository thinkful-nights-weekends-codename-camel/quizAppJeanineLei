console.log('javascript connected');

// build the store of data
const questionBank = [
  {
      question: "Which of the following are a must have in your survival kit?",
      answers: {
          answer1: "Water Filtration Device",
          answer2: "Cell phone",
          answer3: "iPad",
          answer4: "Hotplate",
          getCorrect: function() {
              return this.answer1;
          },
          correctDetail: `Water filters-clean water is essential to your life and health. Clean water is needed for drinking, cooking, and bathing.`
      },
      imageUrl: "img/waterfilters.jpeg",
      imageAlt: "a water filtration device that can be used while camping or running from hordes of the undead."
    },
    {
    question: "What weapon should you never be without?",
    answers: {
        answer1: "Pistol",
        answer2: "Bear Trap",
        answer3: "Machete or other long sturdy blade",
        answer4: "Grenades",
        getCorrect: function() {
            return this.answer3;
        },
        correctDetail: `You'll need a strong blade to take off heads, break open locks, and cut a path through debris. A good sharpening stone should be kept close by as well.`
    },
    imageUrl: "img/machette.jpg",
    imageAlt: "A large machete with sheath."
  },
  {  
  question: "How will you protect yourself from zombie bites or scratches?",
    answers: {
        answer1: "Hat and gloves",
        answer2: "Light weight body armor",
        answer3: "Military field armor and helmet sturdy blade",
        answer4: "Heavy duty clothes like firefighter gear",
        getCorrect: function() {
            return this.answer2;
        },
        correctDetail: `Armor that is light and protects from bites/scratches, and animal attacks
        will keep you whole and healthy without wearing you down with extra weight as you move around.`
    },
    imageUrl: "img/armor.jpg",
    imageAlt: "black body armour as used for painball, motocross racing, and against blades."
  },
  {  
    question: "What is the only/best way to ensure a zombie really dies?",
      answers: {
          answer1: "Stake to the heart",
          answer2: "Chain them in the sun",
          answer3: "Silver bullet to the heart",
          answer4: "Take off their head/destroy brain",
          getCorrect: function() {
              return this.answer4;
          },
          correctDetail: `Decaptitation or brain destruction is the only sure way to keep a zombie down.
          Gotta make sure that brain tissue is gone!`
      },
      imageUrl: "img/decapitation.jpg",
      imageAlt: "Drawing depicting a zombie as it's head is severed from the body and the advice that the 'swing requires lots of room and the right weapon'."
    },
    
  {  
    question: "Most reasonable primary weapon to carry?",
      answers: {
          answer1: "50 caliber machine gun",
          answer2: "Crossbow",
          answer3: "M16",
          answer4: "Grenagde launcher",
          getCorrect: function() {
              return this.answer2;
          },
          correctDetail: `Crossbow bolts are re-useable, light weight, and can be made on the run as long ase you can find wood or other materials you can use.`
      },
      imageUrl: "img/crossbow-bolts.jpg",
      imageAlt: "Hunting crossbow with bolts pictures."
    },
    {  
      question: "What will you do for food?",
        answers: {
            answer1: "MREs",
            answer2: "Frozen dinners",
            answer3: "Cereal",
            answer4: "Canned Food",
            getCorrect: function() {
                return this.answer1;
            },
            correctDetail: `MREs or freeze dried camping food. They store well and are simple to prepare for when you're on the go.`
        },
        imageUrl: "img/mre.jpg",
        imageAlt: "MRE or Meal Ready to Eat kit."
      },
      {  
        question: "How will you be traveling?",
          answers: {
              answer1: "Car",
              answer2: "Motorcycle",
              answer3: "Heavy duty armored truck",
              answer4: "On foot or bicycle",
              getCorrect: function() {
                  return this.answer4;
              },
              correctDetail: `Walk or ride a bike- Anything needing gasolene to run won't last you a long time. Human power is the only power you can rely on.`
          },
          imageUrl: "img/outofgas.png",
          imageAlt: "Gas gauge showing empty."
        },
        {  
          question: "Should you travel alone or others?",
            answers: {
                answer1: "Pairs",
                answer2: "Groups",
                answer3: "Forever alone",
                answer4: "With your trusty dog or owl",
                getCorrect: function() {
                    return this.answer2;
                },
                correctDetail: `Groups -safety in numbers and you can have someone slower than you to outrun and leave behind.`
            },
            imageUrl: "img/huntalone.jpg",
            imageAlt: "meme showing Jack Sparrow being chased by a horde. Text is 'So you decided to play zombie mode yourself, Eh? Wow you have balls."
          },
          {  
            question: "How will you keep warm at night? A campfire of course but how will you start one?",
              answers: {
                  answer1: "Rubbing two sticks together",
                  answer2: "Duraflame",
                  answer3: "Face and hands Magnesium fire starter",
                  answer4: "My trusty Zippo or course!",
                  getCorrect: function() {
                      return this.answer3;
                  },
                  correctDetail: `Lighters run out of fuel, wood gets wet, matches run out. Magnesium firestarters are compact, lightweight, and easy to use. They last a long time because it only takes a few shavings to start a blaze.`
              },
              imageUrl: "img/magfirestarter.jpeg",
              imageAlt: "Magnesium fire starter"
            },
            {  
              question: "If you were bitten by a Zombie, what will you do?",
                answers: {
                    answer1: "Amputate",
                    answer2: "Disinfect with rubbing alcohol, peroxide or other cleaners",
                    answer3: "Burn the infected area",
                    answer4: "Continue on as if nothing happened",
                    getCorrect: function() {
                        return this.answer1;
                    },
                    correctDetail: `Cut it off if it's small as that is the best way to stop the spread of the virus. Of course, many people die from field amputations so-don't get bitten!`
                },
                imageUrl: "img/incaseofbite.jpg",
                imageAlt: "chart showing amputation is the best choice if infected with the zombie virus."
              },          

];

let score=0;
let currentQuestion=1;
let storeIndex=0;
const survivalThreshold = 9;
const deathThreshold = 4;

const youWillDie={
  image:"img/walking-dead-zombies-BlackWhite.jpg",
  imageAltText: "your new family-zombie hoard",
  message:"Sorry to say, you are likely to be joining a zombie horde as your new family unit! Enjoy being Undead!"
};
const youMightLive={
  image:"img/readyornot.png",
  imageAltText:"three zombie hunters at the ready and one person they can use as a distraction.",
  message:"Well, you MAY make it through. You will need to meet up with some like-minded folks and learn from them. Also, find someone to join up with who is slow enough that you can out run them...just in case."
};
const congratulations={
  image:"img/verifiedsuccessful._QL70_.jpg",
  imageAltText:"patch for a verified succesful Zombie hunter",
  message:"Congratulations! You are verfied as a survivor of the coming hordes! Look out for folks who have it together and might need some help. Enjoy your success!"
};

function startQuizButton() {
  // event listener for quiz start button only
  $('.startbtn').on('click', function(event) {
    event.preventDefault();
    // console.log('startQuizButton ran');
    renderQuestionPage();
  });
}

function accessStore(storeData) {
  return `
  <section class="lightbox" aria-label="lightbox">
  <p class="score">Score:${score}  <strong>Will You Live?</strong> Question:${currentQuestion}/10</p>
  </section>
  <div class="question"
  <p c">${storeData[storeIndex].question}</p>
  </div>
  // </section>
  <form action="" class="js-answer-form">
  
    <label for="answer-1" class="hide"></label>
    <input type="button" class="answerbtn" name="answer-1" data-answer="1" value="${storeData[storeIndex].answers.answer1}"></input>

    <label for="answer-2" class="hide"></label>
    <input type="button" class="answerbtn" name="answer-2" data-answer="2" value="${storeData[storeIndex].answers.answer2}"></input>

    <label for="answer-3" class="hide"></label>
    <input type="button" class="answerbtn" name="answer-3" data-answer="3" value="${storeData[storeIndex].answers.answer3}"></input>
 
    <label for="answer-4" class="hide"></label>
    <input type="button" class="answerbtn" name="answer-4" data-answer="4" value="${storeData[storeIndex].answers.answer4}"></input>
  </form>`;
}

function renderQuestionPage() {
  // displays question (from bank) and answers for question
  console.log('renderQuestionPage ran');
  const renderQuestion = accessStore(questionBank);
  $('.js-view').html(renderQuestion);
}

function answerButtonPress() {
  // set up event listener for user click answer
  console.log('answerButtonPress ran');
  $('.js-view').on('click', '.answerbtn', function(event) {
    // handle answer button 
    let userAnswer = $(this).val();
    evaluateAnswer(userAnswer);
  });
}

function storeAnswer(storeData) {
  // access storage's correct answer method
  return storeData[storeIndex].answers.getCorrect();
}

function evaluateAnswer(compareAnswer) {
  // checks if user's answer is correct or incorrect
  // console.log('evaluateAnswer ran');
  let correctAnswer = storeAnswer(questionBank);
  if (compareAnswer === correctAnswer) {
    score++;
    displayAnswerCorrect();
  } else {
    displayAnswerWrong();
  }
}

function storeDetail(storeData) {
  return storeData[storeIndex].answers.correctDetail;
}

function answerCorrectDetail() {
  let storeAnswerDetail = storeDetail(questionBank);
  return `
  <section class="lightbox" aria-label="lightbox">
  <h2 class="score">Score:${score} <span>Will You Live?</span> Question:${currentQuestion}/10</h2>
    <div class="js-answer-view">
    <!-- one of two messages will display (correct/incorrect) -->
    <p class="result">"Correct! You've got some survival instinct in ya"</p>
    <p class="detail">${storeAnswerDetail}</p>
    </div>
  </section>
  <button role="next" class="nextbtn" type="button">Keep going!</button>`;
}

function answerWrongDetail() {
  let storeAnswerDetail = storeDetail(questionBank);
  return `
  <section class="lightbox" aria-label="lightbox">
  <h2 class="score">Score:${score} <span>Will You Live?</span> Question:${currentQuestion}/10</h2>
    <div class="js-answer-view">
    <!-- one of two messages will display (correct/incorrect) -->
    <p class="result">"Oohhh... You might want to re-think your survival strategy"</p>
    <p class="detail">${storeAnswerDetail}</p>
    </div>
  </section>
  <button role="next" class="nextbtn" type="button">Keep going!</button>`;
}

function displayAnswerCorrect() {
  // displays answer details when user selects right answer
  console.log('displayAnswerCorrect ran');
  let renderAnswerCorrect = answerCorrectDetail(questionBank);
  $('.js-view').html(renderAnswerCorrect);
}

function displayAnswerWrong() {
  // displays answer details when user selects wrong answer
  console.log('displayAnswerWrong ran');
  let renderAnswerWrong = answerWrongDetail(questionBank);
  $('.js-view').html(renderAnswerWrong);
}

function nextButtonPress() {
    // event listener for user click next
    console.log('nextButtonPress ran');
    $('.js-view').on('click', '.nextbtn', function(event) {
      if (storeIndex < questionBank.length - 1) {  // stop storeIndex at 9
        storeIndex++; // last iteration should be 9
        currentQuestion++;
        renderQuestionPage();
      } else {
        displayEndResult();
      }
    });
}

function resultDoomed() {
  return `<section class="lightbox" aria-label="lightbox">
  <h2 class="score">Score:${score} <strong>Will You Live?</strong> Question:10/10</h2>
  <p class="result">${youWillDie.message}</p>
  <img src=${youWillDie.image} alt=${youWillDie.imageAltText}>
  </section>
  <button role="start" class="resetbtn" type="button">Retest your knowledge?</button>`;
}

function resultMaybe() {
  return `<section class="lightbox" aria-label="lightbox">
  <h2 class="score">Score:${score} <strong>Will You Live?</strong> Question:10/10</h2>
  <p class="result">${youMightLive.message}</p>
  <img src=${youMightLive.image} alt=${youMightLive.imageAltText}>
  </section>
  <button role="start" class="resetbtn" type="button">Retest your knowledge?</button>`;
}

function resultSurvive() {
  return `<section class="lightbox" aria-label="lightbox">
  <h2 class="score">Score:${score} <span>Will You Live?</span> Question:10/10</h2>
  <p class="result">${congratulations.message}</p>
  <img src=${congratulations.image} alt=${congratulations.imageAltText}>
  </section>
  <button role="start" class="resetbtn" type="button">Retest your knowledge?</button>`;
}

function displayEndResult() {
  // 1 of 3 message pages (doom, maybe, yay)
  console.log('displayEndResult ran'); 
  let displaySurvive = resultSurvive();
  let displayMaybe = resultMaybe();
  let displayDoomed = resultDoomed();

  if (score >= survivalThreshold) {   // survival thresholds declared at top
    $('.js-view').html(displaySurvive);
  } else if (score <= deathThreshold) {
    $('.js-view').html(displayDoomed);
  } else {
    $('.js-view').html(displayMaybe);
  }
}

function quizReset() {
  // resets quiz to start
  console.log('quizReset ran');
  $('.js-view').on('click', '.resetbtn', function() {
    storeIndex=0;
    score=0;
    currentQuestion=1;
    renderQuestionPage();
  });
}

function handleStartQuiz() {
  startQuizButton();
  answerButtonPress();
  nextButtonPress();
  quizReset();
  // when page loads, call this
}
$(handleStartQuiz);