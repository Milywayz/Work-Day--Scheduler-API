// QuerySelector for variables
let saveButton9 = document.querySelector('.saveBtn[data-time="9"]')
let text9 = document.querySelector('textarea[data-time="9"]')
let savedText9 = localStorage.getItem("savedText9");
let savI9 = document.querySelector('i[data-time="9"]')
let hour9 = document.querySelector('#hour-9')

let saveButton10 = document.querySelector('.saveBtn[data-time="10"]')
let text10 = document.querySelector('textarea[data-time="10"]')
let savedText10 = localStorage.getItem("savedText10");
let savI10 = document.querySelector('i[data-time="10"]')
let hour10 = document.querySelector('#hour-10')

let saveButton11 = document.querySelector('.saveBtn[data-time="11"]')
let text11 = document.querySelector('textarea[data-time="11"]')
let savedText11 = localStorage.getItem("savedText11");
let savI11 = document.querySelector('i[data-time="11"]')
let hour11 = document.querySelector('#hour-11')

let saveButton12 = document.querySelector('.saveBtn[data-time="12"]')
let text12 = document.querySelector('textarea[data-time="12"]')
let savedText12 = localStorage.getItem("savedText12");
let savI12 = document.querySelector('i[data-time="12"]')
let hour12 = document.querySelector('#hour-12')

let saveButton1 = document.querySelector('.saveBtn[data-time="1"]')
let text1 = document.querySelector('textarea[data-time="1"]')
let savedText1 = localStorage.getItem("savedText1");
let savI1 = document.querySelector('i[data-time="1"]')
let hour1 = document.querySelector('#hour-1')

let saveButton2 = document.querySelector('.saveBtn[data-time="2"]')
let text2 = document.querySelector('textarea[data-time="2"]')
let savedText2 = localStorage.getItem("savedText2");
let savI2 = document.querySelector('i[data-time="2"]')
let hour2 = document.querySelector('#hour-2')

let saveButton3 = document.querySelector('.saveBtn[data-time="3"]')
let text3 = document.querySelector('textarea[data-time="3"]')
let savedText3 = localStorage.getItem("savedText3");
let savI3 = document.querySelector('i[data-time="3"]')
let hour3 = document.querySelector('#hour-3')

let saveButton4 = document.querySelector('.saveBtn[data-time="4"]')
let text4 = document.querySelector('textarea[data-time="4"]')
let savedText4 = localStorage.getItem("savedText4");
let savI4 = document.querySelector('i[data-time="4"]')
let hour4 = document.querySelector('#hour-4')

let saveButton5 = document.querySelector('.saveBtn[data-time="5"]')
let text5 = document.querySelector('textarea[data-time="5"]')
let savedText5 = localStorage.getItem("savedText5");
let savI5 = document.querySelector('i[data-time="5"]')
let hour5 = document.querySelector('#hour-5')

let todaysDate = document.querySelector('#currentDay')
let currentTime = dayjs().hour() 

// Showing the current day in header
todaysDate.textContent = dayjs().format('MMM DD, YYYY')




// Changing 9am row to correct color depending on the time of day
if (parseInt(document.querySelectorAll(".row")[0].dataset.time) < currentTime) {

    hour9.classList.add("past")
}
else if (parseInt(document.querySelectorAll(".row")[0].dataset.time) === currentTime) {

    hour9.classList.add("present")
}
else {

    hour9.classList.add("future")
}

// Changing 10am row to correct color depending on the time of day
if (parseInt(document.querySelectorAll(".row")[1].dataset.time) < currentTime) {

    hour10.classList.add("past")
}
else if (parseInt(document.querySelectorAll(".row")[1].dataset.time) === currentTime) {

    hour10.classList.add("present")
}
else {

    hour10.classList.add("future")
}

// Changing 11am row to correct color depending on the time of day
if (parseInt(document.querySelectorAll(".row")[2].dataset.time) < currentTime) {

    hour11.classList.add("past")
}
else if (parseInt(document.querySelectorAll(".row")[2].dataset.time) === currentTime) {

    hour11.classList.add("present")
}
else {

    hour11.classList.add("future")
}

// Changing 12pm row to correct color depending on the time of day
if (parseInt(document.querySelectorAll(".row")[3].dataset.time) < currentTime) {

    hour12.classList.add("past")
}
else if (parseInt(document.querySelectorAll(".row")[3].dataset.time) === currentTime) {

    hour12.classList.add("present")
}
else {

    hour12.classList.add("future")
}

// Changing 1pm row to correct color depending on the time of day
if (13 < currentTime) {

    hour1.classList.add("past")
}

else if (13 === currentTime) {

    hour1.classList.add("present")
}
else {

    hour1.classList.add("future")
}

// Changing 2pm row to correct color depending on the time of day
if (14 < currentTime) {

    hour2.classList.add("past")
}
else if (14 === currentTime) {

    hour2.classList.add("present")
}
else {

    hour2.classList.add("future")
}

// Changing 3pm row to correct color depending on the time of day
if (15 < currentTime) {

    hour3.classList.add("past")
}
else if (15 === currentTime) {

    hour3.classList.add("present")
}
else {

    hour3.classList.add("future")
}

// Changing 4pm row to correct color depending on the time of day
if (16 < currentTime) {

    hour4.classList.add("past")
}
else if (16 === currentTime) {

    hour4.classList.add("present")
}
else {

    hour4.classList.add("future")
}

// Changing 5pm row to correct color depending on the time of day
if (17 < currentTime) {

    hour5.classList.add("past")
}
else if (17 === currentTime) {

    hour5.classList.add("present")
}
else {

    hour5.classList.add("future")
}

// Save text in textarea with the correct button and i tags
saveButton9.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText9 = text9.value;
    localStorage.setItem("savedText9", inputText9)
})
savI9.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText9 = text9.value;
    localStorage.setItem("savedText9", inputText9)
})
saveButton10.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText10 = text10.value;
    localStorage.setItem("savedText10", inputText10)
})
savI10.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText9 = text9.value;
    localStorage.setItem("savedText10", inputText9)
})
saveButton11.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText11 = text11.value;
    localStorage.setItem("savedText11", inputText11)
})
savI11.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText9 = text9.value;
    localStorage.setItem("savedText11", inputText9)
})
saveButton12.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText12 = text12.value;
    localStorage.setItem("savedText12", inputText12)
})
savI12.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText9 = text9.value;
    localStorage.setItem("savedText12", inputText9)
})
saveButton1.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText1 = text1.value;
    localStorage.setItem("savedText1", inputText1)
})
savI1.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText9 = text9.value;
    localStorage.setItem("savedText1", inputText9)
})
saveButton2.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText2 = text2.value;
    localStorage.setItem("savedText2", inputText2)
})
savI2.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText9 = text9.value;
    localStorage.setItem("savedText2", inputText9)
})
saveButton3.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText3 = text3.value;
    localStorage.setItem("savedText3", inputText3)
})
savI3.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText9 = text9.value;
    localStorage.setItem("savedText3", inputText9)
})
saveButton4.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText4 = text4.value;
    localStorage.setItem("savedText4", inputText4)
})
savI4.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText9 = text9.value;
    localStorage.setItem("savedText4", inputText9)
})
saveButton5.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText5 = text5.value;
    localStorage.setItem("savedText5", inputText5)
})
savI5.addEventListener("click", function (event) {

    event.preventDefault()
    let inputText9 = text9.value;
    localStorage.setItem("savedText5", inputText9)
})

// Putting the text on the page after saving
if (savedText9) {
    text9.value = savedText9;
}
if (savedText10) {
    text10.value = savedText10;
}
if (savedText11) {
    text11.value = savedText11;
}
if (savedText12) {
    text12.value = savedText12;
}
if (savedText1) {
    text1.value = savedText1;
}
if (savedText2) {
    text2.value = savedText2;
}
if (savedText3) {
    text3.value = savedText3;
}
if (savedText4) {
    text4.value = savedText4;
}
if (savedText5) {
    text5.value = savedText5;
}