var topics = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
];

var startDate = new Date();
function setMonthAndDay(startMonth, startDay) {
    startDate.setMonth(startMonth, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

var editing = false;

// setMonthAndDay(2, 21);
// console.log(startDate);