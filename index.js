// RUN WITH npx http-server

import {Task} from './scripts/tasks.js'
const strengths = [
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
let tasks = [];
tasks.push(new Task(100, 100));
console.log(tasks[0].product());

function foreach(arg0) {
   throw new Error("Function not implemented.");
}

// Functions that respond to events of choosing player strengths

// Functions that respond to event of player saving the first strengths

// Function that responds to event of player choosing a task for a player

// Function that responds to event of player " coaching a player" 

// Function that responds to event of player ending a meeting

// Loop function that is called by previous function until interrupted.

// Function that responds to event of player calling a meeting

// Function that responds to event of all tasks being completed. 

