const btn = document.querySelector('.submit input');
const failureBtn = document.querySelector('.submit-failure input');
const storeInput = document.querySelector('.store input');
const nameInput = document.querySelector('.name input');
const phoneInput = document.querySelector('.phone input');
const priceInput = document.querySelector('.price input');
const paymentSelect = document.querySelector('.payment select');
const formInput = document.querySelector('input');

const storeSpan = document.querySelector('.store label span');
const nameSpan = document.querySelector('.name label span');
const phoneSpan = document.querySelector('.phone label span');
const priceSpan = document.querySelector('.price label span');
const paymentSpan = document.querySelector('.payment label span');

const initialSubmit = document.querySelector('.submit-initial');
const successSubmit = document.querySelector('.submit-success');
const failureSubmit = document.querySelector('.submit-failure');

const storeArr = ["store1", "store2", "store3"];

btn.addEventListener('click', check);
failureBtn.addEventListener('click', check);
function check() {
    if (storeInput.value == '' || nameInput.value == '' || phoneInput.value == '' || priceInput.value == '' || paymentSelect.value == '') {
        storeInput.style.borderColor = 'red';
        storeSpan.innerHTML = `* 請選擇`;

        nameInput.style.borderColor = 'red';
        nameSpan.innerHTML = `* 請輸入名字`;

        phoneInput.style.borderColor = 'red';
        phoneSpan.innerHTML = `* 請輸入手機號碼`;


        priceInput.style.borderColor = 'red';
        priceSpan.innerHTML = `* 請輸入價錢`;

        paymentSelect.style.borderColor = 'red';
        paymentSpan.innerHTML = `* 請選擇付款方式`;

        initialSubmit.style.display = 'none';
        failureSubmit.style.display = 'block';
    } else {
        storeInput.style.borderColor = '#204379';
        nameInput.style.borderColor = '#204379';
        phoneInput.style.borderColor = '#204379';
        priceInput.style.borderColor = '#204379';
        paymentSelect.style.borderColor = '#204379';
        initialSubmit.style.display = 'none';
        failureSubmit.style.display = 'none';
        successSubmit.style.display = 'block';

        storeSpan.innerHTML = `*`;
        nameSpan.innerHTML = `*`;
        phoneSpan.innerHTML = `*`;
        priceSpan.innerHTML = `*`;
        paymentSpan.innerHTML = `*`;

        alert('表單已送出!');
    }
}

let datalistStore = document.querySelector('#store');
datalistStore.addEventListener('click', storelist);

function storelist() {
    for (let i = 0; i < storeArr.length; i++) {
        datalistStore.innerHTML += `
        <option>${storeArr[i]}</option>
        `;
    }
}
storelist();