let umbrellaRed = 1250;
let umbrellaBlue = 1875;
let umbrellaGold = 2250;
let tariff = 2500;
const discountRed = (newPriceRed) => tariff - umbrellaRed;
const discountBlue = (newPriceBlue) => tariff - umbrellaBlue;
const discountGold = (newPriceGold) => tariff - umbrellaGold;

let newPriceRed = discountRed(tariff - umbrellaRed);
let newPriceBlue = discountBlue(tariff - umbrellaBlue);
let newPriceGold = discountGold(tariff - umbrellaGold);

console.log(
  "El valor de la consulta es de $" +
    tariff +
    ", a continuación, se presentarán los diferentes aranceles segun los planes disponibles."
);
console.log(
  "El precio final de su consulta, con el descuento del 50% aplicado sobre el valor de consulta, segun el plan Umbrella Red es de $" +
    newPriceRed +
    "."
);
console.log(
  "El precio final de su consulta, con el descuento del 75% aplicado sobre el valor de la consulta, segun el plan Umbrella Blue es de $" +
    newPriceBlue +
    "."
);
console.log(
  "El precio final de su consulta, con el descuento del 90% aplicado sobre el valor de la consulta, segun el plan Umbrella Gold es de $" +
    newPriceGold +
    "."
);
