

/*

n result in missed meetings and deadlines or create the appearance of unprofessionalism. A daily planner allows employees to see their day at a glance, schedule time effectively, and improve productivity. 

## Minimum Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

* Each timeblock contains an input field and save button.

* Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

* The current day is displayed at the top of the calendar.

* Each timeblock is color coded to indicate whether it is in a past, present, or future hour.
*/


//global variable
const currentDay = moment().format('MMMM Do YYYY, h:mm:ss a')
let hours = ["9:00 am","10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm" ]  

for()
// function to display date and time at top of page

function displayDate(){
   const currentDayEl = document.getElementById("currentDayId");
    currentDayEl.textContent = currentDay;
}
displayDate()
generatePlanner()


// get the element that the info goes into
const timeBlock = document.createElement("table")
// decide on what it should look like
// and then update it...


// creat timeblocks with inputs and buttons
// loop and dyamically

function generatePlanner(){

//
//<div class="row">
//      <div class="col-2">
//        <h4>9:00 am</h4>
//      </div>
//      <div class="col-8">
//          <textarea name="message" rows="6" cols="50" class = "future">The cat was playing in the garden.</textarea>
//      </div>
//      <div class="col-2">
//        <button class="saveBtn btn-lg">Save</button>
//      </div>
//    </div>
//
}
// add event to submit button to save what is in the 
//      input in local storage
//  get the value out of local storarge and populate
//      the input with the data
// check to see what the color should be based on the time?
//      moment?
// look at css for classes later for this 

// store data in local storage as an object where the key is the hour of the day...

/*
{
9:""
10:""
11:""
12:""
13:""
14:""
15:""
16:""
17:""
}
*/
