// Starts == open modal popup on click of plus

let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");

//main container for ticket
let mainContainer = document.querySelector(".main-cont");

//text area of modal
let textContainer = document.querySelector(".textArea-cont");

//color arrays

let colors = ['lightpink','lightgreen','lightblue','black']

let modalPrioritycolor = "lightpink";

//Hnadle lock state
let handleLockstate = false;

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

let addTaskFlag = false;
let removeTaskFlag = false;
let ticketArr = [];

if(localStorage.getItem('tickets'))
  {
    ticketArr = JSON.parse(localStorage.getItem('tickets'))

    ticketArr.forEach(function(ticket)
        {
          createTicket(ticket.textValue, ticket.ticketColorClass, ticket.ticketID)
        })
  }


let modal = addBtn.addEventListener("click", function () {
  addTaskFlag = !addTaskFlag; // true

  if (addTaskFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

// Ends == open modal popup on click of plus

/* ==== Problem Two: Not text which we are adding in the modal will be saved in the ticket ==== */

// add event on when user click on shift ticket withh be clreate and popup will be closed
let keyEvent = modalCont.addEventListener("keydown", function (e) {
  let key = e.key;

  if (key === "Enter") {
    // While writing a key name firct letter show be capital
    console.log("Ticket Created");
    createTicket(textContainer.value, modalPrioritycolor);
  }
});

function createTicket(textValue, ticketColorClass, ticketID ) {
  let id = ticketID || shortid() // generate random IDs
  let ticketCont = document.createElement("div");

  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="ticket-color ${ticketColorClass}">
               
        </div>

        <div class="ticket-id">
           ${id}
        </div>

        <div class="ticket-task">
           ${textValue}
        </div>

        <div class="ticket-lock">
           <i class="fa-solid fa-lock"></i>
        </div>`;

  mainContainer.appendChild(ticketCont);
  addTaskFlag = false;
  modalCont.style.display = "none";

  handleLock(ticketCont,id)
  handleRemoval(ticketCont)
  handleColor(ticketCont,id)

  if(!ticketID)
    {
      ticketArr.push({textValue,ticketColorClass,ticketID:id})
      localStorage.setItem('tickets' , JSON.stringify(ticketArr))
    }

  
  //console.log(ticketArr)
};

// Update color in a ticket

//Approach to identify, how selected color will be update din the ticket

// selct color on ehich user selct

let selectedColor = document.querySelectorAll(".priority-color");
// console.log(selectedColor)

selectedColor.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    selectedColor.forEach(function (priorityColorElement) {
      priorityColorElement.classList.remove("active");
    });
    colorElem.classList.add("active");
    modalPrioritycolor = colorElem.classList[0];
    //console.log(modalPrioritycolor)
  });
});

// handle lock

function handleLock(ticket , id){
  let ticketLockelemnt = ticket.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockelemnt.children[0];

  // ticket tasks area to edit content
  let ticketTaskArea= document.querySelector('.ticket-task')

ticketLockIcon.addEventListener("click", function(){
    let ticketIdx = getIdx(id)
    console.log(ticketIdx)

    if (ticketLockIcon.classList.contains(lockClass)) {
      ticketLockIcon.classList.remove(lockClass);
      ticketLockIcon.classList.add(unlockClass);
      ticketTaskArea.setAttribute('contenteditable','true')

    } else {
      ticketLockIcon.classList.add(lockClass);
      ticketLockIcon.classList.remove(unlockClass);
      ticketTaskArea.setAttribute('contenteditable','false')
    }

    ticketArr[ticketIdx].textValue = ticketTaskArea.innerText
    localStorage.setItem('tickets', JSON.stringify(ticketArr))
  });
};


// Working on delete button functionality

let removeButton = document.querySelector('.remove-btn')

removeButton.addEventListener('click',function(){
  removeTaskFlag = !removeTaskFlag

  if(removeTaskFlag===true)
    {
      removeButton.classList.add('active')
      
    }
  else
  {
    removeButton.classList.remove('active')
  }  

})

//Handle Removal of Tickets

function handleRemoval(ticket,id)
{
  ticket.addEventListener('click',function(){
    
 
    if(!removeTaskFlag) return
    let idx = getIdx(id)
      
    ticket.remove()
    ticketArr.splice(idx,1)
    
  localStorage.setItem('tickets', JSON.stringify(ticketArr))
  })
}


// on click on color next colro with appear an dthsi will change infinitely

function handleColor(ticket,id)
{
  let ticketColorBand = ticket.querySelector('.ticket-color')

  ticketColorBand.addEventListener('click',function(){
    let ticketIdx = getIdx(id)
    let currentcolor = ticketColorBand.classList[1]
   console.log(currentcolor)

   let currentcolorIndex = colors.findIndex(function(color){  // get index of color
    return currentcolor === color
   }) 
   console.log(currentcolorIndex)

  currentcolorIndex++

  
  let newTicketColorValue = colors[currentcolorIndex]

  ticketColorBand.classList.remove(currentcolor)
  ticketColorBand.classList.add(newTicketColorValue)

  ticketArr[ticketIdx].ticketColorClass = newTicketColorValue
  localStorage.setItem('tickets', JSON.stringify(ticketArr))

  })

 
}

// Filter tickets according to priority colors

let allpriorityColors = document.querySelectorAll('.color-box')
//console.log(allpriorityColors)


// Get tasks based on color filter

for(let i=0; i<allpriorityColors.length; i++)
  {
    allpriorityColors[i].addEventListener('click',function(){
      let selectedToolboxColor = allpriorityColors[i].classList[0]

      let filterTickets = ticketArr.filter(function(ticket){
        return selectedToolboxColor === ticket.ticketColorClass
      })
      //console.log(filterTickets)

      let allTickets = document.querySelectorAll('.ticket-cont')
      //console.log(allTickets)
      for(i=0; i<allTickets.length;i++) // to filter first rmove all the tickets
        {
          allTickets[i].remove()
        }
        filterTickets.forEach(function(filterticket)
        {
          createTicket(filterticket.textValue, filterticket.ticketColorClass, filterticket.ticketID)
        })
        
    })
  }

  /* ======= LOCAL STORAGE=================*/
   // Local Storage: Local Stortage is browers memory 
  // Browser has 5MB of storage
  // Storage data in the form of Key value pair i.e. object,JSON
  
   /* ======= INDEXED DB = DATABASE STORAGE IN WEBBROWSERS=================*/

   function getIdx(id)
   {
    let ticketIdx = ticketArr.findIndex(function(ticketObj){
      return ticketObj.ticketID === id
    })
    return ticketIdx
   }