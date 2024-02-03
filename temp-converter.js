function celsiusToFahrenheit(temp) {
    const newTemp = (((temp * 9) / 5) + 32);
    const msg = `${temp} deg Celsius =  ${newTemp} deg Fahrenheit`;
    return msg;
}

const result = celsiusToFahrenheit(40.25);

console.log(result);