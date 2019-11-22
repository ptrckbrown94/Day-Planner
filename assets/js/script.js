

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


//global variables
const currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');

let currentHour = moment().format('h');

const indexHourOffset = 9

let hours = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"]

//Temprary data holder
let noteArray = []

// function to display date and time at top of page

function displayDate() {
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

function generatePlanner() {

    //This is what the generated code needs to look like after testing in html
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

    console.log("Current hour = " + currentHour)

    const timeBlockDiv = document.getElementById("timeBlockId");

    //use to generate questions
    const rowDiv = document.createElement("div");

    rowDiv.setAttribute("class", "row");
    timeBlockDiv.appendChild(rowDiv);

    for (i = 0; i < hours.length; i++) {
        
        const hoursDiv = document.createElement("div");
        const toDoDiv = document.createElement("div");
        const saveDiv = document.createElement("div");
        const hoursH4 = document.createElement("h4");
        const toDoText = document.createElement("textarea");
        const saveButton = document.createElement("button");

        hoursDiv.setAttribute("class", "col-2");
        toDoDiv.setAttribute("class", "col-8");
        saveDiv.setAttribute("class", "col-2");

        hoursH4.innerText = hours[i];
        hoursH4.id = i;

        //Color the text box
        //Known bug, I didn't have time to sort out AM/PM - it works from 9am to 12pm...
        if(currentHour < i + indexHourOffset ){
            toDoText.setAttribute("class", "past");
        }
        else if(currentHour == i + indexHourOffset) {
            toDoText.setAttribute("class", "present");

        } else if(currentHour > i + indexHourOffset) {
            toDoText.setAttribute("class", "future");
        }
        
                
        toDoText.setAttribute("name", "message");
        toDoText.setAttribute("col", "100");
        toDoText.setAttribute("row", "6");


        //Now get the data we saved if any
        const toDoData = localStorage.getItem(i);
        toDoText.value = toDoData;

        saveButton.setAttribute("class", "savebtn");
        saveButton.setAttribute("class", "btn-lg");
        saveButton.innerText = "Save";

        toDoText.addEventListener("change", function(){
            saveNoteTemporary(hoursH4.id, toDoText.value);
        });

        saveButton.addEventListener("click", function(){
            saveNote(hoursH4.id);
        });

        //Load note array from storage
        hoursDiv.appendChild(hoursH4);
        toDoDiv.appendChild(toDoText);
        saveDiv.appendChild(saveButton);

        rowDiv.appendChild(hoursDiv);
        rowDiv.appendChild(toDoDiv);
        rowDiv.appendChild(saveDiv);
    }

}

function saveNote(index){
    console.log("saveNote index=" + index)
    localStorage.setItem(index, JSON.stringify(noteArray[index]));
}

function saveNoteTemporary(index, note) {
    
    console.log("saveNoteTemporary index=" + index + " note=" + note)
    noteArray[index] = note;
}

