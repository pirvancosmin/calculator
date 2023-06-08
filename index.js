const showDisplay = (value) => {
    let chartsArray = document.getElementById('input').value + value;
    let lastChar = document.getElementById('input').value.charAt(document.getElementById('input').value.length - 1);
    if (document.getElementById('input').value.length === 0 && value === '+' || document.getElementById('input').value.length === 0 && value === '-' ||
        document.getElementById('input').value.length === 0 && value === '*' || document.getElementById('input').value.length === 0 && value === '/') {
        return;
    } else if ((lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '%') &&
        (value === '+' || value === '-' || value === '*' || value === '/' || value === '%')) {
        return;
    }
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        for (let i = 0; i < chartsArray.length - 1; ++i) {
            if (chartsArray[i] === '+' || chartsArray[i] === '-' || chartsArray[i] === '*' || chartsArray[i] === '/') {
                return document.getElementById('input').value = [calculate() + value];
            }
        }
    }
    return document.getElementById('input').value = chartsArray;
}

const allClear = () => {
    document.getElementById('input').value = "";
}

const backspace = () => {
    document.getElementById('input').value = document.getElementById('input').value.slice(0, -1);
}

const calculate = () => {
    let input = document.getElementById('input').value;
    let output;
    try {
        output = Function('return ' + input)();
    } catch (e) {
        output = "Eroare";
    }

    return document.getElementById('input').value = output;
};
