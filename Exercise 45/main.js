"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//                                                           * using spread operator to hold key_value pair
//                                                                                                        *telling the function that an object is to be returned
function build_car(manufacturer, model_name, ...optional_info) {
    let car = {
        manufacturer,
        model_name, //target,   source
        ...Object.assign({}, ...optional_info) //.assign takes two parameters, i.e target and source
    };
    return car;
}
;
let a = build_car("Toyota", "Corolla", { colour: "black" }, { modification: "qualitty leather seats" });
console.log(a);
// Done by the help of CoreEd, https://youtu.be/4muJxFkmqBU?si=xzwJ4J0xR-uFMaJd
