let result = document.getElementById('result');


const appendValue = (value) => {
    result.value += value;
};

const clearResult = () => {
    result.value = '';
};
const backspace = () => {
    result.value = result.value.slice(0, -1);
};

const eq = () => {
try {
    result.value = eval(result.value);
} catch (error) {
    result.value = 'Error';
}
}


