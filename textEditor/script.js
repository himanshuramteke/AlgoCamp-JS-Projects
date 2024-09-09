const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');
const uppercaseBtn = document.querySelector('.uppercase');
const lowercaseBtn = document.querySelector('.lowercase');
const capitalizeBtn = document.querySelector('.capitalize');
const boldBtn = document.querySelector('.bold');
const italicBtn = document.querySelector('.italic');
const underlineBtn = document.querySelector('.underline');

uppercaseBtn.addEventListener('click', formatUppercase);
lowercaseBtn.addEventListener('click', formatLowerCase);
capitalizeBtn.addEventListener('click', formatCapitalize);
boldBtn.addEventListener('click', toggleBold);
italicBtn.addEventListener('click', toggleItalic);
underlineBtn.addEventListener('click', toggleUnderline);

function formatUppercase() {
    outputField.innerText = inputField.value.toUpperCase();
}

function formatLowerCase() {
    outputField.innerText = inputField.value.toLowerCase();
}

function formatCapitalize() {
    outputField.innerText = inputField.value.replace(/\b\w/g, char => char.toUpperCase());
}

function toggleBold() {
    outputField.style.fontWeight = outputField.style.fontWeight === 'bold' ? 'normal' : 'bold';
}

function toggleItalic() {
    outputField.style.fontStyle = outputField.style.fontStyle === 'italic' ? 'normal' : 'italic';
}

function toggleUnderline() {
    outputField.style.textDecoration = outputField.style.textDecoration === 'underline' ? 'none' : 'underline';
}

