export function lowCalc(val, percent) {
    const calc = val * percent;
    return calc;
}

export function calc(inputVal, overVal, percent, baseVal) {
    const calc = ((inputVal - overVal) * percent) + baseVal;
    return calc;
}
