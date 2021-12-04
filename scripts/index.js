class Task {
   name;
   expectedTime;
   actualTime;
   terrible = [];
   semiterrible = [];
   neutral = [];
   good = [];
   verygood = [];
   interruptable;
   multipleAttempts;
   percentComplete;
   completed = false;

   constructor(name, expectedTime, actualTime, interruptable, multipleAttempts) {
      this.name = name;
      this.expectedTime = expectedTime;
      this.actualTime = actualTime;
      this.interruptable = interruptable;
      this.multipleAttempts = multipleAttempts;
      this.percentComplete = 0;
      this.completed = false;
   }

}

class Employee {
   strength;
   tasksCompleted;
   currentTask;
   name;

   constructor(name, strength) {
      this.name = name;
      this.tasksCompleted = 0;
      this.currentTask = 0;
      this.strength = strength;
   }
}
const Strengths = [
   'Creativity',
   'Curiousity',
   'Love of Learning',
   'Open-mindedness',
   'Perspective',
   'Authenticity',
   'Bravery',
   'Persistence',
   'Zest',
   'Kindness',
   'Love',
   'Social Intelligence',
   'Fairness',
   'Leadership',
   'Teamwork',
   'Forgiveness',
   'Modesty',
   'Prudence',
   'Self-regulation',
   'Appreciation of beauty and excellence',
   'Gratitude',
   'Hope',
   'Humour',
   'Spirituality'
];
const Tasks = [
   'businesscard',
   'proposal',
   'study',
   'client',
   'investor',
   'customer',
   'trash',
   'product',
   'socialMedia',
   'donationBin',
   'fakeReviews',
   'stakeholders',
   'accessibility',
   'yell',
   'support',
   'fix',
   'report',
   'evaluate',
   'minesweeper',
   'flowers',
   'thankyoucard',
   'graph',
   'roast',
   'holidays'
];

var taskArray = new Array(24);
var employeeArray = new Array(4);
var currentTask1;
var currentTask2;
var currentTask3;
var currentTask4;
var startTime;
var endTime;
var timer;
var completedTasks = 0;
var taskTime = 12;

function initializeTasks() {
   taskArray[0] = new Task("businesscard", taskTime, 0, true, false);
   taskArray[0].verygood[0] = 'Creativity';
   taskArray[0].good[0] = 'Open';
   taskArray[0].good[1] = 'Perspective';
   taskArray[0].good[2] = 'Modesty';
   taskArray[0].good[3] = 'Zest';
   taskArray[0].good[4] = 'Fairness';
   taskArray[0].neutral[0] = 'Kindness';
   taskArray[0].neutral[1] = 'Love';
   taskArray[0].neutral[2] = 'Social';
   taskArray[0].neutral[3] = 'Forgiveness';
   taskArray[0].neutral[4] = 'Humour';
   taskArray[0].neutral[5] = 'Prudence';
   taskArray[0].neutral[6] = 'Beauty';
   taskArray[0].neutral[7] = 'Hope';
   taskArray[0].semiterrible[0] = 'Curiousity';
   taskArray[0].semiterrible[1] = 'Teamwork';
   taskArray[0].semiterrible[2] = 'Persistence';
   taskArray[0].semiterrible[3] = 'Self';
   taskArray[0].semiterrible[4] = 'Gratitude';
   taskArray[0].terrible[0] = 'Learning';
   taskArray[0].terrible[1] = 'Bravery';
   taskArray[0].terrible[2] = 'Leadership';
   taskArray[0].terrible[3] = 'Authenticity';
   taskArray[0].terrible[4] = 'Religiousness';



   taskArray[1] = new Task('proposal', taskTime, 0, true, false);
   taskArray[1].verygood[0] = 'Curiousity';
   taskArray[1].good[0] = 'Learning';
   taskArray[1].good[1] = 'Open';
   taskArray[1].good[2] = 'Authenticity';
   taskArray[1].good[3] = 'Fairness';
   taskArray[1].good[4] = 'Religiousness';
   taskArray[1].neutral[0] = 'Perspective';
   taskArray[1].neutral[1] = 'Kindness';
   taskArray[1].neutral[2] = 'Persistence';
   taskArray[1].neutral[3] = 'Leadership';
   taskArray[1].neutral[4] = 'Teamwork';
   taskArray[1].neutral[5] = 'Self';
   taskArray[1].neutral[6] = 'Hope';
   taskArray[1].neutral[7] = 'Humour';
   taskArray[1].semiterrible[0] = 'Creativity';
   taskArray[1].semiterrible[1] = 'Zest';
   taskArray[1].semiterrible[2] = 'Prudence';
   taskArray[1].semiterrible[3] = 'Beauty';
   taskArray[1].semiterrible[4] = 'Gratitude';
   taskArray[1].terrible[0] = 'Social';
   taskArray[1].terrible[1] = 'Bravery';
   taskArray[1].terrible[2] = 'Love';
   taskArray[1].terrible[3] = 'Forgiveness';
   taskArray[1].terrible[4] = 'Modesty';

   taskArray[2] = new Task('study', taskTime, 0, true, false);
   taskArray[2].verygood[0] = 'Learning';
   taskArray[2].good[0] = 'Perspective';
   taskArray[2].good[1] = 'Persistence';
   taskArray[2].good[2] = 'Prudence';
   taskArray[2].good[3] = 'Self';
   taskArray[2].good[4] = 'Hope';
   taskArray[2].neutral[0] = 'Authenticity';
   taskArray[2].neutral[1] = 'Love';
   taskArray[2].neutral[2] = 'Fairness';
   taskArray[2].neutral[3] = 'Modesty';
   taskArray[2].neutral[4] = 'Beauty';
   taskArray[2].neutral[5] = 'Gratitude';
   taskArray[2].neutral[6] = 'Humour';
   taskArray[2].neutral[7] = 'Religiousness';
   taskArray[2].semiterrible[0] = 'Kindness';
   taskArray[2].semiterrible[1] = 'Leadership';
   taskArray[2].semiterrible[2] = 'Social';
   taskArray[2].semiterrible[3] = 'Teamwork';
   taskArray[2].semiterrible[4] = 'Forgiveness';
   taskArray[2].terrible[0] = 'Creativity';
   taskArray[2].terrible[1] = 'Curiousity';
   taskArray[2].terrible[2] = 'Open';
   taskArray[2].terrible[3] = 'Bravery';
   taskArray[2].terrible[4] = 'Zest';

   taskArray[3] = new Task('client', taskTime, 0, false, false);
   taskArray[3].verygood[0] = 'Open';
   taskArray[3].good[0] = 'Curiousity';
   taskArray[3].good[1] = 'Perspective';
   taskArray[3].good[2] = 'Kindness';
   taskArray[3].good[3] = 'Social';
   taskArray[3].good[4] = 'Gratitude';
   taskArray[3].neutral[0] = 'Humour';
   taskArray[3].neutral[1] = 'Bravery';
   taskArray[3].neutral[2] = 'Persistence';
   taskArray[3].neutral[3] = 'Love';
   taskArray[3].neutral[4] = 'Leadership';
   taskArray[3].neutral[5] = 'Teamwork';
   taskArray[3].neutral[6] = 'Self';
   taskArray[3].neutral[7] = 'Hope';
   taskArray[3].semiterrible[0] = 'Authenticity';
   taskArray[3].semiterrible[1] = 'Zest';
   taskArray[3].semiterrible[2] = 'Forgiveness';
   taskArray[3].semiterrible[3] = 'Beauty';
   taskArray[3].semiterrible[4] = 'Religiousness';
   taskArray[3].terrible[0] = 'Creativity';
   taskArray[3].terrible[1] = 'Fairness';
   taskArray[3].terrible[2] = 'Modesty';
   taskArray[3].terrible[3] = 'Prudence';
   taskArray[3].terrible[4] = 'Learning';

   taskArray[4] = new Task('investor', taskTime, 0, false, false);
   taskArray[4].verygood[0] = 'Perspective';
   taskArray[4].good[0] = 'BLAH';
   taskArray[4].good[1] = 'BLAH';
   taskArray[4].good[2] = 'BLAH';
   taskArray[4].good[3] = 'BLAH';
   taskArray[4].good[4] = 'BLAH';
   taskArray[4].neutral[0] = 'BLAH';
   taskArray[4].neutral[1] = 'BLAH';
   taskArray[4].neutral[2] = 'BLAH';
   taskArray[4].neutral[3] = 'BLAH';
   taskArray[4].neutral[4] = 'BLAH';
   taskArray[4].neutral[5] = 'BLAH';
   taskArray[4].neutral[6] = 'BLAH';
   taskArray[4].neutral[7] = 'BLAH';
   taskArray[4].semiterrible[0] = 'BLAH';
   taskArray[4].semiterrible[1] = 'BLAH';
   taskArray[4].semiterrible[2] = 'BLAH';
   taskArray[4].semiterrible[3] = 'BLAH';
   taskArray[4].semiterrible[4] = 'BLAH';
   taskArray[4].terrible[0] = 'BLAH';
   taskArray[4].terrible[1] = 'BLAH';
   taskArray[4].terrible[2] = 'BLAH';
   taskArray[4].terrible[3] = 'BLAH';
   taskArray[4].terrible[4] = 'BLAH';

   taskArray[5] = new Task('customer', taskTime, 0, false, false);
   taskArray[5].verygood[0] = 'Authenticity';
   taskArray[5].good[0] = 'Curiousity';
   taskArray[5].good[1] = 'Learning';
   taskArray[5].good[2] = 'Kindness';
   taskArray[5].good[3] = 'Social';
   taskArray[5].good[4] = 'Gratitude';
   taskArray[5].neutral[0] = 'Open';
   taskArray[5].neutral[1] = 'Perspective';
   taskArray[5].neutral[2] = 'Zest';
   taskArray[5].neutral[3] = 'Love';
   taskArray[5].neutral[4] = 'Forgiveness';
   taskArray[5].neutral[5] = 'Modesty';
   taskArray[5].neutral[6] = 'Self';
   taskArray[5].neutral[7] = 'Hope';
   taskArray[5].semiterrible[0] = 'Leadership';
   taskArray[5].semiterrible[1] = 'Bravery';
   taskArray[5].semiterrible[2] = 'Persistence';
   taskArray[5].semiterrible[3] = 'Prudence';
   taskArray[5].semiterrible[4] = 'Humour';
   taskArray[5].terrible[0] = 'Creativity';
   taskArray[5].terrible[1] = 'Fairness';
   taskArray[5].terrible[2] = 'Religiousness';
   taskArray[5].terrible[3] = 'Teamwork';
   taskArray[5].terrible[4] = 'Beauty';

   taskArray[6] = new Task('trash', taskTime, 0, false, false);
   taskArray[6].verygood[0] = 'Bravery';
   taskArray[6].good[0] = 'Creativity';
   taskArray[6].good[1] = 'Learning';
   taskArray[6].good[2] = 'Authenticity';
   taskArray[6].good[3] = 'Zest';
   taskArray[6].good[4] = 'Teamwork';
   taskArray[6].neutral[0] = 'Open';
   taskArray[6].neutral[1] = 'Persistence';
   taskArray[6].neutral[2] = 'Fairness';
   taskArray[6].neutral[3] = 'Leadership';
   taskArray[6].neutral[4] = 'Modesty';
   taskArray[6].neutral[5] = 'Prudence';
   taskArray[6].neutral[6] = 'Hope';
   taskArray[6].neutral[7] = 'Humour';
   taskArray[6].semiterrible[0] = 'Perspective';
   taskArray[6].semiterrible[1] = 'Social';
   taskArray[6].semiterrible[2] = 'Beauty';
   taskArray[6].semiterrible[3] = 'Religiousness';
   taskArray[6].semiterrible[4] = 'Gratitude';
   taskArray[6].terrible[0] = 'Curiousity';
   taskArray[6].terrible[1] = 'Kindness';
   taskArray[6].terrible[2] = 'Love';
   taskArray[6].terrible[3] = 'Forgiveness';
   taskArray[6].terrible[4] = 'Self';

   taskArray[7] = new Task('product', taskTime, 0, true, false);
   taskArray[7].verygood[0] = 'Persistence';
   taskArray[7].good[0] = 'Creativity';
   taskArray[7].good[1] = 'Prudence';
   taskArray[7].good[2] = 'Leadership';
   taskArray[7].good[3] = 'Teamwork';
   taskArray[7].good[4] = 'Modesty';
   taskArray[7].neutral[0] = 'Authenticity';
   taskArray[7].neutral[1] = 'Zest';
   taskArray[7].neutral[2] = 'Kindness';
   taskArray[7].neutral[3] = 'Love';
   taskArray[7].neutral[4] = 'Self';
   taskArray[7].neutral[5] = 'Beauty';
   taskArray[7].neutral[6] = 'Gratitude';
   taskArray[7].neutral[7] = 'Hope';
   taskArray[7].semiterrible[0] = 'Curiousity';
   taskArray[7].semiterrible[1] = 'Bravery';
   taskArray[7].semiterrible[2] = 'Fairness';
   taskArray[7].semiterrible[3] = 'Social';
   taskArray[7].semiterrible[4] = 'Religiousness';
   taskArray[7].terrible[0] = 'Learning';
   taskArray[7].terrible[1] = 'Open';
   taskArray[7].terrible[2] = 'Perspective';
   taskArray[7].terrible[3] = 'Humour';
   taskArray[7].terrible[4] = 'Forgiveness';

   taskArray[8] = new Task('socialMedia', taskTime, 0, true, false);
   taskArray[8].verygood[0] = 'Zest';
   taskArray[8].good[0] = 'Creativity';
   taskArray[8].good[1] = 'Perspective';
   taskArray[8].good[2] = 'Humour';
   taskArray[8].good[3] = 'Kindness';
   taskArray[8].good[4] = 'Social';
   taskArray[8].neutral[0] = 'Open';
   taskArray[8].neutral[1] = 'Bravery';
   taskArray[8].neutral[2] = 'Persistence';
   taskArray[8].neutral[3] = 'Fairness';
   taskArray[8].neutral[4] = 'Religiousness';
   taskArray[8].neutral[5] = 'Beauty';
   taskArray[8].neutral[6] = 'Gratitude';
   taskArray[8].neutral[7] = 'Hope';
   taskArray[8].semiterrible[0] = 'Curiousity';
   taskArray[8].semiterrible[1] = 'Modesty';
   taskArray[8].semiterrible[2] = 'Prudence';
   taskArray[8].semiterrible[3] = 'Self';
   taskArray[8].semiterrible[4] = 'Authenticity';
   taskArray[8].terrible[0] = 'Learning';
   taskArray[8].terrible[1] = 'Love';
   taskArray[8].terrible[2] = 'Leadership';
   taskArray[8].terrible[3] = 'Teamwork';
   taskArray[8].terrible[4] = 'Forgiveness';

   taskArray[9] = new Task('donationBin', taskTime, 0, true, false);
   taskArray[0].verygood[0] = 'Kindness';
   taskArray[9].good[0] = 'Religiousness';
   taskArray[9].good[1] = 'Gratitude';
   taskArray[9].good[2] = 'Beauty';
   taskArray[9].good[3] = 'Zest';
   taskArray[9].good[4] = 'Love';
   taskArray[9].neutral[0] = 'Social';
   taskArray[9].neutral[1] = 'Forgiveness';
   taskArray[9].neutral[2] = 'Modesty';
   taskArray[9].neutral[3] = 'Self';
   taskArray[9].neutral[4] = 'Persistence';
   taskArray[9].neutral[5] = 'Hope';
   taskArray[9].neutral[6] = 'Humour';
   taskArray[9].neutral[7] = 'Gratitude';
   taskArray[9].semiterrible[0] = 'Curiousity';
   taskArray[9].semiterrible[1] = 'Fairness';
   taskArray[9].semiterrible[2] = 'Leadership';
   taskArray[9].semiterrible[3] = 'Teamwork';
   taskArray[9].semiterrible[4] = 'Prudence';
   taskArray[9].terrible[0] = 'Creativity';
   taskArray[9].terrible[1] = 'Learning';
   taskArray[9].terrible[2] = 'Open';
   taskArray[9].terrible[3] = 'Bravery';
   taskArray[9].terrible[4] = 'Authenticity';

   taskArray[10] = new Task('fakeReviews', taskTime, 0, true, false);
   taskArray[10].verygood[0] = 'Love';
   taskArray[10].good[0] = 'Creativity';
   taskArray[10].good[1] = 'Perspective';
   taskArray[10].good[2] = 'Authenticity';
   taskArray[10].good[3] = 'Zest';
   taskArray[10].good[4] = 'Humour';
   taskArray[10].neutral[0] = 'Bravery';
   taskArray[10].neutral[1] = 'Teamwork';
   taskArray[10].neutral[2] = 'Forgiveness';
   taskArray[10].neutral[3] = 'Prudence';
   taskArray[10].neutral[4] = 'Self';
   taskArray[10].neutral[5] = 'Beauty';
   taskArray[10].neutral[6] = 'Gratitude';
   taskArray[10].neutral[7] = 'Hope';
   taskArray[10].semiterrible[0] = 'Kindness';
   taskArray[10].semiterrible[1] = 'Social';
   taskArray[10].semiterrible[2] = 'Fairness';
   taskArray[10].semiterrible[3] = 'Leadership';
   taskArray[10].semiterrible[4] = 'Religiousness';
   taskArray[10].terrible[0] = 'Curiousity';
   taskArray[10].terrible[1] = 'Learning';
   taskArray[10].terrible[2] = 'Open';
   taskArray[10].terrible[3] = 'Persistence';
   taskArray[10].terrible[4] = 'Modesty';

   taskArray[11] = new Task('stakeholders', taskTime, 0, false, false);
   taskArray[11].verygood[0] = 'Social';
   taskArray[11].good[0] = 'Curiousity';
   taskArray[11].good[1] = 'Learning';
   taskArray[11].good[2] = 'Kindness';
   taskArray[11].good[3] = 'Social';
   taskArray[11].good[4] = 'Self';
   taskArray[11].neutral[0] = 'Open';
   taskArray[11].neutral[1] = 'Perspective';
   taskArray[11].neutral[2] = 'Authenticity';
   taskArray[11].neutral[3] = 'Love';
   taskArray[11].neutral[4] = 'Fairness';
   taskArray[11].neutral[5] = 'Leadership';
   taskArray[11].neutral[6] = 'Modesty';
   taskArray[11].neutral[7] = 'Gratitude';
   taskArray[11].semiterrible[0] = 'Teamwork';
   taskArray[11].semiterrible[1] = 'Forgiveness';
   taskArray[11].semiterrible[2] = 'Prudence';
   taskArray[11].semiterrible[3] = 'Hope';
   taskArray[11].semiterrible[4] = 'Humour';
   taskArray[11].terrible[0] = 'Creativity';
   taskArray[11].terrible[1] = 'Zest';
   taskArray[11].terrible[2] = 'Beauty';
   taskArray[11].terrible[3] = 'Religiousness';
   taskArray[11].terrible[4] = 'Bravery';

   taskArray[12] = new Task('accessibility', taskTime, 0, true, false);
   taskArray[12].verygood[0] = 'Fairness';
   taskArray[12].good[0] = 'Religiousness';
   taskArray[12].good[1] = 'Prudence';
   taskArray[12].good[2] = 'Forgiveness';
   taskArray[12].good[3] = 'Perspective';
   taskArray[12].good[4] = 'Kindness';
   taskArray[12].neutral[0] = 'Self';
   taskArray[12].neutral[1] = 'Teamwork';
   taskArray[12].neutral[2] = 'Learning';
   taskArray[12].neutral[3] = 'Social';
   taskArray[12].neutral[4] = 'Love';
   taskArray[12].neutral[5] = 'Persistence';
   taskArray[12].neutral[6] = 'Open';
   taskArray[12].neutral[7] = 'Hope';
   taskArray[12].semiterrible[0] = 'Gratitude';
   taskArray[12].semiterrible[1] = 'Modesty';
   taskArray[12].semiterrible[2] = 'Authenticity';
   taskArray[12].semiterrible[3] = 'Bravery';
   taskArray[12].semiterrible[4] = 'Leadership';
   taskArray[12].terrible[0] = 'Humour';
   taskArray[12].terrible[1] = 'Curiousity';
   taskArray[12].terrible[2] = 'Beauty';
   taskArray[12].terrible[3] = 'Zest';
   taskArray[12].terrible[4] = 'Creativity';

   taskArray[13] = new Task('yell', taskTime, 0, false, false);
   taskArray[13].verygood[0] = 'Leadership';
   taskArray[13].good[0] = 'Bravery';
   taskArray[13].good[1] = 'Zest';
   taskArray[13].good[2] = 'Religiousness';
   taskArray[13].good[3] = 'Hope';
   taskArray[13].good[4] = 'Humour';
   taskArray[13].neutral[0] = 'Open';
   taskArray[13].neutral[1] = 'Perspective';
   taskArray[13].neutral[2] = 'Authenticity';
   taskArray[13].neutral[3] = 'Social';
   taskArray[13].neutral[4] = 'Modesty';
   taskArray[13].neutral[5] = 'Prudence';
   taskArray[13].neutral[6] = 'Beauty';
   taskArray[13].neutral[7] = 'Gratitude';
   taskArray[13].semiterrible[0] = 'Learning';
   taskArray[13].semiterrible[1] = 'Self';
   taskArray[13].semiterrible[2] = 'Fairness';
   taskArray[13].semiterrible[3] = 'Forgiveness';
   taskArray[13].semiterrible[4] = 'Teamwork';
   taskArray[13].terrible[0] = 'Creativity';
   taskArray[13].terrible[1] = 'Curiousity';
   taskArray[13].terrible[2] = 'Persistence';
   taskArray[13].terrible[3] = 'Kindness';
   taskArray[13].terrible[4] = 'Love';

   taskArray[14] = new Task('support', taskTime, 0, false, false);
   taskArray[14].verygood[0] = 'Teamwork';
   taskArray[14].good[0] = 'Learning';
   taskArray[14].good[1] = 'Social';
   taskArray[14].good[2] = 'Humour';
   taskArray[14].good[3] = 'Kindness';
   taskArray[14].good[4] = 'Love';
   taskArray[14].neutral[0] = 'Open';
   taskArray[14].neutral[1] = 'Authenticity';
   taskArray[14].neutral[2] = 'Perspective';
   taskArray[14].neutral[3] = 'Forgiveness';
   taskArray[14].neutral[4] = 'Modesty';
   taskArray[14].neutral[5] = 'Prudence';
   taskArray[14].neutral[6] = 'Self';
   taskArray[14].neutral[7] = 'Beauty';
   taskArray[14].semiterrible[0] = 'Creativity';
   taskArray[14].semiterrible[1] = 'Curiousity';
   taskArray[14].semiterrible[2] = 'Zest';
   taskArray[14].semiterrible[3] = 'Religiousness';
   taskArray[14].semiterrible[4] = 'Gratitude';
   taskArray[14].terrible[0] = 'Bravery';
   taskArray[14].terrible[1] = 'Persistence';
   taskArray[14].terrible[2] = 'Fairness';
   taskArray[14].terrible[3] = 'Leadership';
   taskArray[14].terrible[4] = 'Hope';

   taskArray[15] = new Task('fix', taskTime, 0, true, false);
   taskArray[15].verygood[0] = 'Forgiveness';
   taskArray[15].good[0] = 'Creativity';
   taskArray[15].good[1] = 'Bravery';
   taskArray[15].good[2] = 'Humour';
   taskArray[15].good[3] = 'Kindness';
   taskArray[15].good[4] = 'Prudence';
   taskArray[15].neutral[0] = 'Perspective';
   taskArray[15].neutral[1] = 'Authenticity';
   taskArray[15].neutral[2] = 'Persistence';
   taskArray[15].neutral[3] = 'Social';
   taskArray[15].neutral[4] = 'Teamwork';
   taskArray[15].neutral[5] = 'Self';
   taskArray[15].neutral[6] = 'Beauty';
   taskArray[15].neutral[7] = 'Hope';
   taskArray[15].semiterrible[0] = 'Curiousity';
   taskArray[15].semiterrible[1] = 'Zest';
   taskArray[15].semiterrible[2] = 'Modesty';
   taskArray[15].semiterrible[3] = 'Gratitude';
   taskArray[15].semiterrible[4] = 'Religiousness';
   taskArray[15].terrible[0] = 'Learning';
   taskArray[15].terrible[1] = 'Open';
   taskArray[15].terrible[2] = 'Love';
   taskArray[15].terrible[3] = 'Fairness';
   taskArray[15].terrible[4] = 'Leadership';

   taskArray[16] = new Task('report', taskTime, 0, false, false);
   taskArray[16].verygood[0] = 'Modesty';
   taskArray[16].good[0] = 'Perspective';
   taskArray[16].good[1] = 'Authenticity';
   taskArray[16].good[2] = 'Persistence';
   taskArray[16].good[3] = 'Love';
   taskArray[16].good[4] = 'Gratitude';
   taskArray[16].neutral[0] = 'Open';
   taskArray[16].neutral[1] = 'Bravery';
   taskArray[16].neutral[2] = 'Kindness';
   taskArray[16].neutral[3] = 'Leadership';
   taskArray[16].neutral[4] = 'Teamwork';
   taskArray[16].neutral[5] = 'Forgiveness';
   taskArray[16].neutral[6] = 'Self';
   taskArray[16].neutral[7] = 'Beauty';
   taskArray[16].semiterrible[0] = 'Social';
   taskArray[16].semiterrible[1] = 'Fairness';
   taskArray[16].semiterrible[2] = 'Prudence';
   taskArray[16].semiterrible[3] = 'Hope';
   taskArray[16].semiterrible[4] = 'Humour';
   taskArray[16].terrible[0] = 'Creative';
   taskArray[16].terrible[1] = 'Curiousity';
   taskArray[16].terrible[2] = 'Learning';
   taskArray[16].terrible[3] = 'Zest';
   taskArray[16].terrible[4] = 'Religiousness';

   taskArray[17] = new Task('evaluate', taskTime, 0, false, false);
   taskArray[17].verygood[0] = 'Prudence';
   taskArray[17].good[0] = 'Learning';
   taskArray[17].good[1] = 'Perspective';
   taskArray[17].good[2] = 'Authenticity';
   taskArray[17].good[3] = 'Persistence';
   taskArray[17].good[4] = 'Social';
   taskArray[17].neutral[0] = 'Open';
   taskArray[17].neutral[1] = 'Zest';
   taskArray[17].neutral[2] = 'Fairness';
   taskArray[17].neutral[3] = 'Leadership';
   taskArray[17].neutral[4] = 'Teamwork';
   taskArray[17].neutral[5] = 'Self';
   taskArray[17].neutral[6] = 'Humour';
   taskArray[17].neutral[7] = 'Religiousness';
   taskArray[17].semiterrible[0] = 'Bravery';
   taskArray[17].semiterrible[1] = 'Forgiveness';
   taskArray[17].semiterrible[2] = 'Beauty';
   taskArray[17].semiterrible[3] = 'Gratitude';
   taskArray[17].semiterrible[4] = 'Hope';
   taskArray[17].terrible[0] = 'Creativity';
   taskArray[17].terrible[1] = 'Curiousity';
   taskArray[17].terrible[2] = 'Kindness';
   taskArray[17].terrible[3] = 'Love';
   taskArray[17].terrible[4] = 'Modesty';

   taskArray[18] = new Task('minesweeper', taskTime, 0, true, false);
   taskArray[18].verygood[0] = 'Self';
   taskArray[18].good[0] = 'Open';
   taskArray[18].good[1] = 'Bravery';
   taskArray[18].good[2] = 'Social';
   taskArray[18].good[3] = 'Fairness';
   taskArray[18].good[4] = 'Forgiveness';
   taskArray[18].neutral[0] = 'Authenticity';
   taskArray[18].neutral[1] = 'Modesty';
   taskArray[18].neutral[2] = 'Prudence';
   taskArray[18].neutral[3] = 'Gratitude';
   taskArray[18].neutral[4] = 'Humour';
   taskArray[18].neutral[5] = 'Religiousness';
   taskArray[18].neutral[6] = 'Love';
   taskArray[18].neutral[7] = 'Kindness';
   taskArray[18].semiterrible[0] = 'Perspective';
   taskArray[18].semiterrible[1] = 'Zest';
   taskArray[18].semiterrible[2] = 'Leadership';
   taskArray[18].semiterrible[3] = 'Beauty';
   taskArray[18].semiterrible[4] = 'Hope';
   taskArray[18].terrible[0] = 'Creativity';
   taskArray[18].terrible[1] = 'Curiousity';
   taskArray[18].terrible[2] = 'Learning';
   taskArray[18].terrible[3] = 'Persistence';
   taskArray[18].terrible[4] = 'Teamwork';

   taskArray[19] = new Task('flowers', taskTime, 0, false, false);
   taskArray[19].verygood[0] = 'Beauty';
   taskArray[19].good[0] = 'Creativity';
   taskArray[19].good[1] = 'Bravery';
   taskArray[19].good[2] = 'Kindness';
   taskArray[19].good[3] = 'Love';
   taskArray[19].good[4] = 'Gratitude';
   taskArray[19].neutral[0] = 'Open';
   taskArray[19].neutral[1] = 'Authenticity';
   taskArray[19].neutral[2] = 'Persistence';
   taskArray[19].neutral[3] = 'Social';
   taskArray[19].neutral[4] = 'Fairness';
   taskArray[19].neutral[5] = 'Leadership';
   taskArray[19].neutral[6] = 'Teamwork';
   taskArray[19].neutral[7] = 'Religiousness';
   taskArray[19].semiterrible[0] = 'Perspective';
   taskArray[19].semiterrible[1] = 'Zest';
   taskArray[19].semiterrible[2] = 'Forgiveness';
   taskArray[19].semiterrible[3] = 'Self';
   taskArray[19].semiterrible[4] = 'Humour';
   taskArray[19].terrible[0] = 'Curiousity';
   taskArray[19].terrible[1] = 'Learning';
   taskArray[19].terrible[2] = 'Modesty';
   taskArray[19].terrible[3] = 'Prudence';
   taskArray[19].terrible[4] = 'Hope';

   taskArray[20] = new Task('thankyoucard', taskTime, 0, true, false);
   taskArray[20].verygood[0] = 'Gratitude';
   taskArray[20].good[0] = 'Perspective';
   taskArray[20].good[1] = 'Kindness';
   taskArray[20].good[2] = 'Social';
   taskArray[20].good[3] = 'Fairness';
   taskArray[20].good[4] = 'Religiousness';
   taskArray[20].neutral[0] = 'Open';
   taskArray[20].neutral[1] = 'Authenticity';
   taskArray[20].neutral[2] = 'Bravery';
   taskArray[20].neutral[3] = 'Persistence';
   taskArray[20].neutral[4] = 'Leadership';
   taskArray[20].neutral[5] = 'Modesty';
   taskArray[20].neutral[6] = 'Prudence';
   taskArray[20].neutral[7] = 'Self';
   taskArray[20].semiterrible[0] = 'Zest';
   taskArray[20].semiterrible[1] = 'Love';
   taskArray[20].semiterrible[2] = 'Teamwork';
   taskArray[20].semiterrible[3] = 'Forgiveness';
   taskArray[20].semiterrible[4] = 'Beauty';
   taskArray[20].terrible[0] = 'Creativity';
   taskArray[20].terrible[1] = 'Curiousity';
   taskArray[20].terrible[2] = 'Learning';
   taskArray[20].terrible[3] = 'Hope';
   taskArray[20].terrible[4] = 'Humour';

   taskArray[21] = new Task('graph', taskTime, 0, true, false);
   taskArray[21].verygood[0] = 'Hope';
   taskArray[21].good[0] = 'Creativity';
   taskArray[21].good[1] = 'Religiousness';
   taskArray[21].good[2] = 'Zest';
   taskArray[21].good[3] = 'Love';
   taskArray[21].good[4] = 'Beauty';
   taskArray[21].neutral[0] = 'Open';
   taskArray[21].neutral[1] = 'Bravery';
   taskArray[21].neutral[2] = 'Social';
   taskArray[21].neutral[3] = 'Leadership';
   taskArray[21].neutral[4] = 'Teamwork';
   taskArray[21].neutral[5] = 'Forgiveness';
   taskArray[21].neutral[6] = 'Gratitude';
   taskArray[21].neutral[7] = 'Humour';
   taskArray[21].semiterrible[0] = 'Curiousity';
   taskArray[21].semiterrible[1] = 'Kindness';
   taskArray[21].semiterrible[2] = 'Modesty';
   taskArray[21].semiterrible[3] = 'Prudence';
   taskArray[21].semiterrible[4] = 'Self';
   taskArray[21].terrible[0] = 'Learning';
   taskArray[21].terrible[1] = 'Perspective';
   taskArray[21].terrible[2] = 'Authenticity';
   taskArray[21].terrible[3] = 'Persistence';
   taskArray[21].terrible[4] = 'Fairness';

   taskArray[22] = new Task('roast', taskTime, 0, true, false);
   taskArray[22].verygood[0] = 'Humour';
   taskArray[22].good[0] = 'Creativity';
   taskArray[22].good[1] = 'Perspective';
   taskArray[22].good[2] = 'Bravery';
   taskArray[22].good[3] = 'Zest';
   taskArray[22].good[4] = 'Social';
   taskArray[22].neutral[0] = 'Curiousity';
   taskArray[22].neutral[1] = 'Open';
   taskArray[22].neutral[2] = 'Teamwork';
   taskArray[22].neutral[3] = 'Forgiveness';
   taskArray[22].neutral[4] = 'Prudence';
   taskArray[22].neutral[5] = 'Self';
   taskArray[22].neutral[6] = 'Hope';
   taskArray[22].neutral[7] = 'Religiousness';
   taskArray[22].semiterrible[0] = 'Authenticity';
   taskArray[22].semiterrible[1] = 'Fairness';
   taskArray[22].semiterrible[2] = 'Modesty';
   taskArray[22].semiterrible[3] = 'Beauty';
   taskArray[22].semiterrible[4] = 'Gratitude';
   taskArray[22].terrible[0] = 'Learning';
   taskArray[22].terrible[1] = 'Persistence';
   taskArray[22].terrible[2] = 'Kindness';
   taskArray[22].terrible[3] = 'Love';
   taskArray[22].terrible[4] = 'Leadership';

   taskArray[23] = new Task('holidays', taskTime, 0, true, false);
   taskArray[23].verygood[0] = 'Religiousness';
   taskArray[23].good[0] = 'Curiousity';
   taskArray[23].good[1] = 'Perspective';
   taskArray[23].good[2] = 'Kindness';
   taskArray[23].good[3] = 'Love';
   taskArray[23].good[4] = 'Social';
   taskArray[23].neutral[0] = 'Learning';
   taskArray[23].neutral[1] = 'Open';
   taskArray[23].neutral[2] = 'Fairness';
   taskArray[23].neutral[3] = 'Leadership';
   taskArray[23].neutral[4] = 'Teamwork';
   taskArray[23].neutral[5] = 'Beauty';
   taskArray[23].neutral[6] = 'Gratitude';
   taskArray[23].neutral[7] = 'Hope';
   taskArray[23].semiterrible[0] = 'Zest';
   taskArray[23].semiterrible[1] = 'Forgiveness';
   taskArray[23].semiterrible[2] = 'Modesty';
   taskArray[23].semiterrible[3] = 'Prudence';
   taskArray[23].semiterrible[4] = 'Self';
   taskArray[23].terrible[0] = 'Creativity';
   taskArray[23].terrible[1] = 'Authenticity';
   taskArray[23].terrible[2] = 'Bravery';
   taskArray[23].terrible[3] = 'Persistence';
   taskArray[23].terrible[4] = 'Humour';

   console.log(taskArray);
   console.log("Hello");

}

function switchToMainGame() {
   let start = document.getElementById('start')
   let game = document.getElementById('game')
   let footer = document.getElementById('footer')

   start.classList.add('hidden');
   game.classList.remove('hidden');
   footer.classList.remove('hidden');

   employeeArray.forEach(function (value, index) {
      index = index + 1;
      let e = document.querySelector('div.employee' + (index) + 'Div p')
      if (e != null) {
         if (e.innerHTML != value.strength) {
            e.innerHTML = value.strength;
         }
      }

      let d = document.querySelector('div.employee' + (index) + 'Doing')
      if (d != null) {
         d.innerHTML = value.strength;
      }
   })



}

function mounted() {
   initializeTasks();
   let e1 = document.getElementById('employee1Select');
   let e2 = document.getElementById('employee2Select');
   let e3 = document.getElementById('employee3Select');
   let e4 = document.getElementById('employee4Select');
   employeeArray[0] = new Employee('Huizinga', e1.value);
   employeeArray[1] = new Employee('Caillois', e2.value);
   employeeArray[2] = new Employee('Juul', e3.value);
   employeeArray[3] = new Employee('Wark', e4.value);
   endTime = 1;

   switchToMainGame();

}

// Function that responds to event of player choosing a task for a player

// Function that responds to event of player " coaching a player" 

// Function that responds to event of player ending a meeting

// Loop function that is called by previous function until interrupted.

// Function that responds to event of player calling a meeting

// Function that responds to event of all tasks being completed. 

function endMeeting() {
   var task1, task2, task3, task4;
   var elTask1 = document.getElementById('doing1')
   if (elTask1.firstElementChild != null)
      task1 = elTask1.firstElementChild.id;
   var elTask2 = document.getElementById('doing2')
   if (elTask2.firstElementChild != null) {
      task2 = elTask2.firstElementChild.id;
   }
   var elTask3 = document.getElementById('doing3')
   if (elTask3.firstElementChild != null) {
      task3 = elTask3.firstElementChild.id;
   }
   var elTask4 = document.getElementById('doing4')
   if (elTask4.firstElementChild != null) {
      task4 = elTask4.firstElementChild.id;
   }

   // Figure out which tasks were working on. 
   taskArray.forEach(function (value, index) {
      if (value.name === (task1)) {
         currentTask1 = index;
      } else if (value.name == task2) {
         currentTask2 = index;
      } else if (value.name == task3) {
         currentTask3 = index;
      } else if (value.name == task4) {
         currentTask4 = index;
      }
   })

   if (currentTask1 != null) {
      calculateActualTime(employeeArray[0].strength, taskArray[currentTask1]);
   }
   if (currentTask2 != null) {
      calculateActualTime(employeeArray[1].strength, taskArray[currentTask2]);
   }
   if (currentTask3 != null) {
      calculateActualTime(employeeArray[2].strength, taskArray[currentTask3]);
   }
   if (currentTask4 != null) {
      calculateActualTime(employeeArray[3].strength, taskArray[currentTask4]);
   }

   var endMeetingButton = document.getElementById('endMeetingButton');
   var callMeetingButton = document.getElementById('callMeetingButton');
   var fireStaffButton = document.getElementById('fireStaffButton');

   endMeetingButton.classList.add('disabled');
   fireStaffButton.classList.add('disabled');
   callMeetingButton.classList.remove('disabled');

   endTime = 0;

   beginLoop();

}

function beginLoop() {
   startTime = Date.now();
   timer = setInterval("updateProgress()", 10);
}

function callMeeting() {
   endTime = Date.now();
   clearInterval(timer);
   var todo = document.getElementById('todo');
   if (currentTask1 != null) {
      updateTaskPercentComplete(currentTask1, endTime);
      var task1 = document.getElementById(taskArray[currentTask1].name);
      todo.appendChild(task1);

   }
   if (currentTask2 != null) {
      updateTaskPercentComplete(currentTask2, endTime);
      var task2 = document.getElementById(taskArray[currentTask2].name);
      todo.appendChild(task2);

   }
   if (currentTask3 != null) {
      updateTaskPercentComplete(currentTask3, endTime);
      var task3 = document.getElementById(taskArray[currentTask3].name);
      todo.appendChild(task3);

   }
   if (currentTask4 != null) {
      updateTaskPercentComplete(currentTask4, endTime);
      var task4 = document.getElementById(taskArray[currentTask4].name);
      todo.appendChild(task4);

   }
   currentTask1 = null;
   currentTask2 = null;
   currentTask3 = null;
   currentTask4 = null;
   
   var endMeetingButton = document.getElementById('endMeetingButton');
   var callMeetingButton = document.getElementById('callMeetingButton');
   var fireStaffButton = document.getElementById('fireStaffButton');

   endMeetingButton.classList.remove('disabled');
   fireStaffButton.classList.remove('disabled');
   callMeetingButton.classList.add('disabled');
}

function endGame() {
   var game = document.getElementById('game');
   var win = document.getElementById('win');
   game.classList.add('hidden');
   win.classList.remove('hidden');
}

function updateTaskPercentComplete(task_id, endTime) {
   if(taskArray[task_id].interruptable == true) {
      taskArray[task_id].percentComplete += ((endTime - startTime) / 1000) / taskArray[task_id].actualTime;
      taskArray[task_id].actualTime = taskArray[task_id].expectedTime;
   } else if(taskArray[task_id].percentComplete < 1) {
      taskArray[task_id].percentComplete = 0;
      taskArray[task_id].actualTime = taskArray[task_id].expectedTime;
      var el = document.querySelector('#' + taskArray[task_id].name + ' p')
      el.innerHTML = "INTERRUPTED"
   }
}

function updateProgress() {
   if ((currentTask1 != null) && (taskArray[currentTask1].percentComplete + (((Date.now() - startTime) / 1000) / taskArray[currentTask1].actualTime) > 1)) {
      finishTask(currentTask1);
      currentTask1 = null;
   }
   if ((currentTask2 != null) && (taskArray[currentTask2].percentComplete + (((Date.now() - startTime) / 1000) / taskArray[currentTask2].actualTime) > 1)) {
      finishTask(currentTask2);
      currentTask2 = null;
   }
   if ((currentTask3 != null) && (taskArray[currentTask3].percentComplete + (((Date.now() - startTime) / 1000) / taskArray[currentTask3].actualTime) > 1)) {
      finishTask(currentTask3);
      currentTask3 = null;
   }
   if ((currentTask4 != null) && (taskArray[currentTask4].percentComplete + (((Date.now() - startTime) / 1000) / taskArray[currentTask4].actualTime) > 1)) {
      finishTask(currentTask4);
      currentTask4 = null;
   }

   if ((currentTask1 == null) && (currentTask2 == null) && (currentTask3 == null) && (currentTask4 == null)) {
      if (completedTasks == 24) {
         endGame();
      } else {
         console.log('call meeting');
         callMeeting();
      }
   }

   if (currentTask1 != null) {
      var el = document.querySelector('#' + taskArray[currentTask1].name + ' p')
      var value = ((taskArray[currentTask1].percentComplete + (((Date.now() - startTime) / 1000) / taskArray[currentTask1].actualTime)) * 100).toFixed(1)
      el.innerHTML = value + " % / 100%"
   }
   if (currentTask2 != null) {
      var el = document.querySelector('#' + taskArray[currentTask2].name + ' p')
      var value = ((taskArray[currentTask2].percentComplete + (((Date.now() - startTime) / 1000) / taskArray[currentTask2].actualTime)) * 100).toFixed(1)
      el.innerHTML = value + " % / 100%"
   }
   if (currentTask3 != null) {
      var el = document.querySelector('#' + taskArray[currentTask3].name + ' p')
      var value = ((taskArray[currentTask3].percentComplete + (((Date.now() - startTime) / 1000) / taskArray[currentTask3].actualTime)) * 100).toFixed(1)
      el.innerHTML = value + " % / 100%"
   }
   if (currentTask4 != null) {
      var el = document.querySelector('#' + taskArray[currentTask4].name + ' p')
      var value = ((taskArray[currentTask4].percentComplete + (((Date.now() - startTime) / 1000) / taskArray[currentTask4].actualTime)) * 100).toFixed(1)
      el.innerHTML = value + " % / 100%"
   }

}


// Finish a task and show results
// Description: Takes the task and sets its completed values so the task is completed and then it moves it into the DONE column with the COMPLETE innerhtml. 
function finishTask(task_id) {
   taskArray[task_id].percentComplete = 1;
   taskArray[task_id].completed = true;
   var task = document.getElementById(taskArray[task_id].name);
   var taskComplete = document.querySelector('#' + taskArray[task_id].name + ' p');
   var done = document.getElementById('done');

   taskComplete.innerHTML = "COMPLETE";
   done.appendChild(task);
   completedTasks++;
}

function calculateActualTime(strength, task) {
   let tempStrength;
   let category = 1;
   task.terrible.forEach(function (value) {
      if (value == strength) {
         category = 4
      }
   });
   task.semiterrible.forEach(function (value) {
      if (value == strength) {
         category = 2;
      }
   });
   task.neutral.forEach(function (value) {
      if (value == strength) {
         category = 1;
      }
   });
   task.good.forEach(function (value) {
      if (value == strength) {
         category = 0.5;
      }
   });
   task.verygood.forEach(function (value) {
      if (value == strength) {
         category = 0.25;
      }
   });
   // The actual time left will be the category times the difference between the expected time and the expected time * percent complete. 
   task.actualTime = category * (task.expectedTime - task.percentComplete * task.expectedTime);
}

function endTask(Task) {
   Task.completed = true;
   Task.percentComplete = 1;
}


/**
 * Drag and Drop Code
 * 
 */
function drag(ev) {
   console.log(endTime);
   if (endTime > 0) {
      ev.dataTransfer.setData("text", ev.target.id);
   }
}

function allowDrop(ev) {
   ev.preventDefault();
}

function drop(ev) {
   ev.preventDefault();
   if (endTime > 0) {
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));

   }
}

function dropDoing(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   if ((ev.target.childNodes.length == 1) && (endTime > 0) && ((ev.target.id.match('doing1')) || (ev.target.id.match('doing2')) || (ev.target.id.match('doing3')) || (ev.target.id.match('doing4'))))
      ev.target.appendChild(document.getElementById(data));
}

function allowDropDoing(ev) {
   if ((ev.target.childNodes.length <= 1)) {
      ev.preventDefault();
   }
}