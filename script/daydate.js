function updatedDateTime() {
    const dayDate = document.getElementById("calender");
    const liveCalender = new Date();

    const calenderStructure = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const updatedDate = liveCalender.toLocaleDateString("en-US", calenderStructure);
    dayDate.textContent = updatedDate;
}
updatedDateTime()
setInterval(updatedDateTime, 1000)
