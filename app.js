let quit = false;
let myData = [];

while(!quit){
   let task = prompt("What would you like to do?").toLowerCase();

   if(task === "quit"){
       quit = true;
   }else
   {
    switch(task) {
        case "new":
            newItem();
          break;
        case "list":
            listItems();
          break;
        case "delete":
            deleteItem();
          break;
        default:
          alert("Please enter a valid function between ('new','list','delete', or 'quit' to close)");
      }
   }
}
console.log("Todo List Closed.");

//Functions
function newItem(){
    let input = prompt("Add a todo!");
    myData.push(input);
    console.log(`"${input}" added to list`);
}

function listItems(){
    console.log("List All Todos");
    if(myData.length === 0){
        
        console.log("***********************");
        console.log("Empty List....");
        console.log("***********************");
    }else{
        console.log("***********************");
        for(let i = 0; i < myData.length; i++){
            console.log(`${i}: ${myData[i]}`);
        }
        console.log("***********************");
    }
}

function deleteItem(){
    listItems();
    let input = prompt("Select a Todo list you want to delete by index or 'quit to escape'");
    while(!myData[input]){

        input = prompt("Please an existing index/ or valid input or 'quit to escape'");
        if(input === 'quit'){          
            break;
        }
    }
    if(input !== 'quit'){
        let removedItem = myData.splice(input, 1);
        console.log(`"${removedItem}" successfuly removed!`);
    }
}
