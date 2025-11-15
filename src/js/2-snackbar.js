import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

const refs = {
    form: document.querySelector("form"),
    inputDelay: document.querySelector('input[name="delay"]'),
    stateRadios: document.querySelectorAll('input[name="state"]')
}

refs.form.addEventListener("submit", e => {
    e.preventDefault()
    const delay = Number(refs.inputDelay.value);
    const selectedState = [...refs.stateRadios].find(el => el.checked)?.value;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedState === "fulfilled") {
                resolve(delay)
            } else {
                reject(delay)
            }
        }, delay)
    })
    promise
        .then(value => {
        iziToast.success({
            title: '✅',
            icon: '',
            message: `Fulfilled promise in ${value}ms`,
            position: "topRight",
        });
        })  
        .catch(value => {
            iziToast.error({
            title: '❌',
            icon: '',
            message: `Rejected promise in ${value}ms`,
            position: "topRight",
            });
        })
})