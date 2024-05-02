//_*    [ NUMEROS ]

function RandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function entre(num, max, min) {
    return (num <= max) & (num >= min)
}