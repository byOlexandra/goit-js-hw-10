// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("[data-start]")
}

let userSelectedDate = null;
let timerId = null;
refs.startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1, 
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate <= new Date()) {
        window.alert("Please choose a date in the future");
        refs.startBtn.disabled = true;
        return;
        }
        userSelectedDate = selectedDate;
        refs.startBtn.disabled = false;
    },
};

flatpickr(refs.input, options)
