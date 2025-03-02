let btn = document.querySelectorAll(".btn.btn-primary")
let btnCompleted = btn.length
console.log(btnCompleted)
document.getElementById('assigned-tasked').innerText = btnCompleted

function getInnerTextById(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function setInnerTextById(id, value) {
    document.getElementById(id).innerText = value;
}

function liveTime() {
    return new Date().toLocaleTimeString();
}

function checkAllTaskCompletion() {
    const assignedTasked = getInnerTextById("assigned-tasked");

    if (assignedTasked === 0) {
        alert("Congrats!!! You have completed all current tasks");
    }
}

document.getElementById("card-button1").addEventListener("click", function () {
    this.disabled = true;

    let finishedTask = getInnerTextById("finished-task");
    let assignedTasked = getInnerTextById("assigned-tasked");

    alert("Board Updated Successfully");

    let messageContainer = document.getElementById("activity-container");
    let cardHeading1 = document.getElementById("card-heading1")
    let div = document.createElement("div");
    div.innerText = `You have completed the task ${cardHeading1.innerText} at ${liveTime()}`
    messageContainer.appendChild(div)

    
    setInnerTextById("finished-task", finishedTask + 1);
    setInnerTextById("assigned-tasked", assignedTasked - 1);

    checkAllTaskCompletion();
});

document.getElementById("card-button2").addEventListener("click", function () {
    this.disabled = true;

    let finishedTask = getInnerTextById("finished-task");
    let assignedTasked = getInnerTextById("assigned-tasked");

    alert("Board Updated Successfully");

    let messageContainer = document.getElementById("activity-container");
    let cardHeading2 = document.getElementById("card-heading2")
    let div = document.createElement("div");
    div.innerText = `You have completed the task ${cardHeading2.innerText} at ${liveTime()}`
    messageContainer.appendChild(div)

    
    setInnerTextById("finished-task", finishedTask + 1);
    setInnerTextById("assigned-tasked", assignedTasked - 1);

    checkAllTaskCompletion();
});

document.getElementById("card-button3").addEventListener("click", function () {
    this.disabled = true;

    let finishedTask = getInnerTextById("finished-task");
    let assignedTasked = getInnerTextById("assigned-tasked");

    alert("Board Updated Successfully");

    let messageContainer = document.getElementById("activity-container");
    let cardHeading3 = document.getElementById("card-heading3")
    let div = document.createElement("div");
    div.innerText = `You have completed the task ${cardHeading3.innerText} at ${liveTime()}`
    messageContainer.appendChild(div)

    
    setInnerTextById("finished-task", finishedTask + 1);
    setInnerTextById("assigned-tasked", assignedTasked - 1);

    checkAllTaskCompletion();
});

document.getElementById("card-button4").addEventListener("click", function () {
    this.disabled = true;

    let finishedTask = getInnerTextById("finished-task");
    let assignedTasked = getInnerTextById("assigned-tasked");

    alert("Board Updated Successfully");

    let messageContainer = document.getElementById("activity-container");
    let cardHeading4 = document.getElementById("card-heading4")
    let div = document.createElement("div");
    div.innerText = `You have completed the task ${cardHeading4.innerText} at ${liveTime()}`
    messageContainer.appendChild(div)

    
    setInnerTextById("finished-task", finishedTask + 1);
    setInnerTextById("assigned-tasked", assignedTasked - 1);

    checkAllTaskCompletion();
});

document.getElementById("card-button5").addEventListener("click", function () {
    this.disabled = true;

    let finishedTask = getInnerTextById("finished-task");
    let assignedTasked = getInnerTextById("assigned-tasked");

    alert("Board Updated Successfully");

    let messageContainer = document.getElementById("activity-container");
    let cardHeading5 = document.getElementById("card-heading5")
    let div = document.createElement("div");
    div.innerText = `You have completed the task ${cardHeading5.innerText} at ${liveTime()}`
    messageContainer.appendChild(div)

    
    setInnerTextById("finished-task", finishedTask + 1);
    setInnerTextById("assigned-tasked", assignedTasked - 1);

    checkAllTaskCompletion();
});

document.getElementById("card-button6").addEventListener("click", function () {
    this.disabled = true;

    let finishedTask = getInnerTextById("finished-task");
    let assignedTasked = getInnerTextById("assigned-tasked");

    alert("Board Updated Successfully");

    let messageContainer = document.getElementById("activity-container");
    let cardHeading6 = document.getElementById("card-heading6")
    let div = document.createElement("div");
    div.innerText = `You have completed the task ${cardHeading6.innerText} at ${liveTime()}`
    messageContainer.appendChild(div)

    
    setInnerTextById("finished-task", finishedTask + 1);
    setInnerTextById("assigned-tasked", assignedTasked - 1);

    checkAllTaskCompletion();
});


document.getElementById("btnClearHistory").addEventListener("click",function(){
    document.getElementById("activity-container").innerHTML = "";

})






