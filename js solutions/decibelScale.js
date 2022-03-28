//We multiply the result of log operation by 10 
// We're given intensity 
// divide intensity by threshold for human hearing 


const dBScale = intensity => 10 * Math.log10(intensity / 10 ** -12)

