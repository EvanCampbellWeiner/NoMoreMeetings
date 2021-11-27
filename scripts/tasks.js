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

   constructor(height, width) {
      this.height = height;
      this.width = width;
   }

   product() {
      return (this.width * this.height);
   }

}


function findTimeModifier(strength,  task) {
   let modifier = 1;
   if(task.terrible.find(element => element === strength))
   {
      modifier = 4;
   } else if(task.semiterrible.find(element => element === strength))
   {
      modifier = 2;
   } else if(task.neutral.find(element => element === strength))
   {
      modifier = 1;
   } else if(task.good.find(element => element === strength))
   {
      modifier = 2;
   } else if(task.verygood.find(element => element === strength))
   {
      modifier = 4;
   } else {
      modifier = 1;
   }

   return modifier;

}

function calculateActualTime(strength, task) {
   let tempStrength;
   let category = 1;
   task.terrible.forEach(  function(value) {
      if(value == strength) {
         category = -4;
      }
   });
   task.semiterrible.forEach(  function(value) {
      if(value == strength) {
         category = -2;
      }
   });
   task.neutral.forEach(  function(value) {
      if(value == strength) {
         category = 1;
      }
   });
   task.good.forEach(  function(value) {
      if(value == strength) {
         category = 2;
      }
   });
   task.verygood.forEach(  function(value) {
      if(value == strength) {
         category = 4;
      }
   });

   // The actual time left will be the category times the difference between the expected time and the expected time * percent complete. 
   task.actualTime = category*(task.expectedTime - task.percentComplete*task.expectedTime);
}

function additionalEffects() {
   calculateActualTime(employee.strength, task);
}

function stopInProgress(task, elapsedTime) {
   task.percentComplete += elapsedTime/task.actualTime;
}

function startWithEmployee(employee, task) {
   
}

function endTask(Task) {
   Task.completed = true;
   Task.percentComplete = 1;
}

export {Task}