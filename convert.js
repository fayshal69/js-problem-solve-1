function inchToFeet(inch) {
    const feet = Number.parseInt(inch / 12);
    const ressultInch = inch % 12;
    const msg = `${feet} feet ${ressultInch} inch.`;
    return msg;
}



const result1 = inchToFeet(6);
// console.log(result1);


function mileToKilo(mile) {
    const kilo = (mile * 1.60934);
    const kiloMsg = `${mile} mile = ${kilo} kilometer.`;
    return kiloMsg;
}

const result2 = mileToKilo(0.5);
// console.log(result2);