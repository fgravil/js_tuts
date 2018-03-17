const responseBtn = document.getElementById('responseBtn').addEventListener('click', evaluate.bind(this));
const nextBtn = document.getElementById('nextBtn').addEventListener('click', setEquation.bind(this) );
const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');
const response = document.getElementById('response');

function evaluate() {
    const val1 = this.val1.innerHTML;
    const val2 = this.val2.innerHTML;

    if (val1 * val2 === Number(this.response.value)) {
        alert('You are correct!');
    } else {
        alert('Incorrect! Please try again.');
    }
}

function setEquation() {
    this.val1.innerHTML = Math.floor(Math.random() * 10);
    this.val2.innerHTML = Math.floor(Math.random() * 10);
    this.response.value = '';
}