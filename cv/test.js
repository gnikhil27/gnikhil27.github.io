const data_place = document.querySelectorAll("[data]");

const mydata = {
    "name": "Nikhil Gupta",
    "work": "Testing",
}

data_place.forEach(ui_text => {
    ui_text.innerHTML = mydata[ui_text.getAttribute("data")];
});