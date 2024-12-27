const form = document.querySelector('form');

const start = document.querySelector('#start-btn');
const input = document.querySelectorAll('input');
const questions = document.querySelectorAll('.question');
const submitButton = document.querySelector('[type="submit"]');
const scoreContainer = document.querySelector('.score-container');
const resetButton = document.querySelector('#reset-btn');

// console.log(questions);

// object containing the quiz questions , options and the correct option

const cricQuiz = {
  1: [
    'Who has the highest individual score in ODI cricket?',
    ['AB de Villiers', 'Martin Guptill', 'Rohit Sharma', 'Chris Gayle'],
    'Rohit Sharma',
  ],
  2: [
    'Which country won the first Cricket World Cup in 1975?',
    ['Australia', 'West Indies', 'England', 'India'],
    'West Indies',
  ],
  3: [
    'What is the maximum number of wickets a bowler can take in a single ODI match?',
    ['6', '7', '8', '10'],
    '10',
  ],
  4: [
    'Who is known as the "God of Cricket"?',
    ['Ricky Ponting', 'Sachin Tendulkar', 'Brian Lara', 'Virat Kohli'],
    'Sachin Tendulkar',
  ],
  5: [
    'What is the length of a cricket pitch (in yards)?',
    ['18 yards', '20 yards', '22 yards', '24 yards'],
    '22 yards',
  ],
  6: [
    'Who holds the record for the fastest century in ODI cricket?',
    ['Virat Kohli', 'AB de Villiers', 'Chris Gayle', 'Shahid Afridi'],
    'AB de Villiers',
  ],
  7: [
    'Which bowler has the most wickets in Test cricket?',
    ['Shane Warne', 'Anil Kumble', 'Muttiah Muralitharan', 'James Anderson'],
    'Muttiah Muralitharan',
  ],
  8: [
    'Which country hosted the 2011 ICC Cricket World Cup final?',
    ['South Africa', 'Sri Lanka', 'India', 'England'],
    'India',
  ],
  9: [
    'Who was the captain of the Indian cricket team during their first T20 World Cup win in 2007?',
    ['Sourav Ganguly', 'Virat Kohli', 'MS Dhoni', 'Rahul Dravid'],
    'MS Dhoni',
  ],
  10: [
    'What is the term for scoring three wickets in three consecutive deliveries?',
    ['Triple strike', 'Hat-trick', 'Fast three', 'Golden ball'],
    'Hat-trick',
  ],
  11: [
    'Which country has won the most ICC Cricket World Cups?',
    ['West Indies', 'India', 'Australia', 'England'],
    'Australia',
  ],
  12: [
    'Which cricketer is nicknamed "The Wall"?',
    ['Rahul Dravid', 'Steve Waugh', 'Jacques Kallis', 'Shivnarine Chanderpaul'],
    'Rahul Dravid',
  ],
  13: [
    'Who scored the first double century in ODI cricket?',
    ['Sachin Tendulkar', 'Virender Sehwag', 'Rohit Sharma', 'Saeed Anwar'],
    'Sachin Tendulkar',
  ],
  14: [
    'In cricket, how many runs are awarded for hitting the ball over the boundary without bouncing?',
    ['4 runs', '5 runs', '6 runs', '7 runs'],
    '6 runs',
  ],
  15: [
    'Who bowled the final over in the 2019 ICC Cricket World Cup Super Over?',
    ['Jasprit Bumrah', 'Trent Boult', 'Jofra Archer', 'Mitchell Starc'],
    'Jofra Archer',
  ],
  16: [
    'Which player has hit the most sixes in international cricket?',
    ['MS Dhoni', 'Shahid Afridi', 'Chris Gayle', 'Rohit Sharma'],
    'Chris Gayle',
  ],
  17: [
    'What is the maximum number of players allowed on the fielding side during a cricket match?',
    ['10', '11', '12', '13'],
    '11',
  ],
  18: [
    'Which cricketer has the nickname "Rawalpindi Express"?',
    ['Shoaib Malik', 'Shoaib Akhtar', 'Wasim Akram', 'Waqar Younis'],
    'Shoaib Akhtar',
  ],
  19: [
    'Which team holds the record for the highest team score in a Test match innings?',
    ['England', 'Australia', 'West Indies', 'India'],
    'Australia',
  ],
  20: [
    'In which year was the first-ever Test match played?',
    ['1877', '1882', '1890', '1901'],
    '1877',
  ],
  21: [
    'What is the term used for scoring zero runs in cricket?',
    ['Duck', 'Goose', 'Eagle', 'Zero'],
    'Duck',
  ],
  22: [
    'Who holds the record for the most consecutive Test matches played?',
    ['Allan Border', 'Sunil Gavaskar', 'Alastair Cook', 'Rahul Dravid'],
    'Alastair Cook',
  ],
  23: [
    'Which cricketer has the most runs in a single edition of the ICC Cricket World Cup?',
    ['Sachin Tendulkar', 'Martin Guptill', 'Kane Williamson', 'Rohit Sharma'],
    'Sachin Tendulkar',
  ],
  24: [
    'What is the term for a ball that is delivered too high for the batsman?',
    ['No-ball', 'Wide-ball', 'Full toss', 'Bouncer'],
    'No-ball',
  ],
  25: [
    'Which country introduced the Big Bash League (BBL)?',
    ['England', 'Australia', 'South Africa', 'New Zealand'],
    'Australia',
  ],
  26: [
    'Who was the first batsman to score 10,000 runs in Test cricket?',
    ['Allan Border', 'Sunil Gavaskar', 'Rahul Dravid', 'Brian Lara'],
    'Sunil Gavaskar',
  ],
  27: [
    'What is the name of the trophy awarded in Test matches between England and Australia?',
    [
      'Border-Gavaskar Trophy',
      'ICC Test Championship',
      'The Ashes',
      'World Test Trophy',
    ],
    'The Ashes',
  ],
  28: [
    'Who was the first bowler to take 600 wickets in Test cricket?',
    ['Shane Warne', 'Anil Kumble', 'Muttiah Muralitharan', 'Courtney Walsh'],
    'Courtney Walsh',
  ],
  29: [
    'In cricket, what does LBW stand for?',
    [
      'Leg Before Wicket',
      'Left Behind Wicket',
      'Long Ball Wide',
      'Low Ball Wicket',
    ],
    'Leg Before Wicket',
  ],
  30: [
    'Which team chased down 438 runs in an ODI against South Africa in 2006?',
    ['Australia', 'West Indies', 'India', 'South Africa'],
    'South Africa',
  ],
  31: [
    'What is the maximum number of overs allowed per bowler in a 50-over ODI match?',
    ['8 overs', '10 overs', '12 overs', '15 overs'],
    '10 overs',
  ],
  32: [
    'Who is the youngest cricketer to score a double century in Test cricket?',
    ['Don Bradman', 'Sachin Tendulkar', 'Javed Miandad', 'Mohammad Ashraful'],
    'Mohammad Ashraful',
  ],
  33: [
    'Which cricketer is the fastest to score 8,000 runs in Test cricket?',
    ['Virat Kohli', 'Kumar Sangakkara', 'Steve Smith', 'Hashim Amla'],
    'Hashim Amla',
  ],
  34: [
    'In which format of cricket is the "Powerplay" rule used?',
    [
      'Test Cricket',
      'ODI and T20 Cricket',
      'Only T20 Cricket',
      'Only ODI Cricket',
    ],
    'ODI and T20 Cricket',
  ],
  35: [
    'Which stadium is known as the "Home of Cricket"?',
    [
      'Eden Gardens',
      'Melbourne Cricket Ground',
      'Lord’s Cricket Ground',
      'The Oval',
    ],
    'Lord’s Cricket Ground',
  ],
  36: [
    'Which cricketer has the highest batting average in Test cricket (minimum 20 innings)?',
    ['Virat Kohli', 'Don Bradman', 'Jacques Kallis', 'Steve Smith'],
    'Don Bradman',
  ],
  37: [
    'Who captained India to its first-ever Test match win in 1952?',
    ['CK Nayudu', 'Vijay Hazare', 'Lala Amarnath', 'Polly Umrigar'],
    'Vijay Hazare',
  ],
  38: [
    'Which country won the first T20 World Cup in 2007?',
    ['Australia', 'Pakistan', 'India', 'South Africa'],
    'India',
  ],
  39: [
    'What is the maximum number of runs a batsman can score off a single legal delivery?',
    ['4', '6', '7', '8'],
    '8',
  ],
  40: [
    'Who has bowled the fastest delivery in cricket history (161.3 km/h)?',
    ['Brett Lee', 'Shoaib Akhtar', 'Shaun Tait', 'Mitchell Starc'],
    'Shoaib Akhtar',
  ],
  41: [
    'Who was the first bowler to take a hat-trick in a T20 International match?',
    ['Lasith Malinga', 'Brett Lee', 'Rashid Khan', 'Tim Southee'],
    'Brett Lee',
  ],
  42: [
    'Which team scored the highest total in an ODI match (498/4)?',
    ['England', 'India', 'Australia', 'South Africa'],
    'England',
  ],
  43: [
    'In which year was the Decision Review System (DRS) first introduced in cricket?',
    ['2007', '2008', '2010', '2012'],
    '2008',
  ],
  44: [
    'Who hit the winning runs for India in the 2011 Cricket World Cup final?',
    ['MS Dhoni', 'Gautam Gambhir', 'Virat Kohli', 'Yuvraj Singh'],
    'MS Dhoni',
  ],
  45: [
    'Who is the first cricketer to score 100 centuries in international cricket?',
    ['Ricky Ponting', 'Sachin Tendulkar', 'Jacques Kallis', 'Virat Kohli'],
    'Sachin Tendulkar',
  ],
  46: [
    'Which country hosted the first day-night Test match?',
    ['England', 'Australia', 'India', 'South Africa'],
    'Australia',
  ],
  47: [
    'What is the highest individual score in a Test innings?',
    ['375', '400 not out', '380', '403'],
    '400 not out',
  ],
  48: [
    'Who is the only cricketer to have 1,000+ runs and 100+ wickets in both ODI and T20I cricket?',
    ['Shakib Al Hasan', 'Jacques Kallis', 'Shahid Afridi', 'Ben Stokes'],
    'Shakib Al Hasan',
  ],
  49: [
    'Which stadium hosted the first-ever T20 International match?',
    ['Eden Gardens', 'Newlands', 'The Gabba', 'Eden Park'],
    'Eden Park',
  ],
  50: [
    'Who is the first bowler to take a five-wicket haul in all three formats of international cricket?',
    ['Brett Lee', 'Lasith Malinga', 'Mitchell Starc', 'Shahid Afridi'],
    'Lasith Malinga',
  ],
};

// an array that stores the randomly generated keys of the object

// Event Listener for the start button
const container = document.querySelector('.quiz-container');
start.addEventListener('click', (e) => {
  // let's hide the start button on click
  start.style.visibility = 'hidden';

  // let's turn the visibility of all input element to visible
  for (let item of input) {
    item.style.visibility = 'visible';
  }

  let keys = [];
  // let's add inner text to labels to frame the dynamic quiz
  for (let i = 0; i < 5; i++) {
    const key = Math.floor(Math.random() * 50 + 1);
    keys.push(key);
    // console.log(key);
    questions[i].innerHTML = `${i + 1}. ${cricQuiz[key][0]}`;

    // selecting all labels of each input element
    const options = document.querySelectorAll(`.q${i + 1}`);
    // console.log(options);

    // adding text content of the labes elements for each input element
    options[0].innerHTML = cricQuiz[key][1][0];
    options[1].innerHTML = cricQuiz[key][1][1];
    options[2].innerHTML = cricQuiz[key][1][2];
    options[3].innerHTML = cricQuiz[key][1][3];

    const inputs = document.querySelectorAll(`.input${i + 1}`);
    // updating the value attributes of input elements
    inputs[0].value = cricQuiz[key][1][0];
    inputs[1].value = cricQuiz[key][1][1];
    inputs[2].value = cricQuiz[key][1][2];
    inputs[3].value = cricQuiz[key][1][3];

    // updating name attributes of each input element
    inputs[0].name = key;
    inputs[1].name = key;
    inputs[2].name = key;
    inputs[3].name = key;
  }

  // now let's make that submit button visible
  submitButton.style.visibility = 'visible';
});

// now let's create that submit event to display the result on the screen
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  // console.log(data.entries());

  let score = 0;
  for (let [key, value] of data.entries()) {
    // console.log(key, value);
    if (value === cricQuiz[key][2]) {
      score++;
    }
  }
  // console.log(score);
  scoreContainer.innerHTML = `Score: ${score}/5`;

  resetButton.style.visibility = 'visible';
});
