/* task 7.2
Припустимо, у нас є об'єкт, властивості якого — назва послуги та її вартість:
var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};

Послуги можуть додаватися по ходу роботи:
services['Розбити скло'] = "200 грн";

Умови виконання ДЗ

Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
Створити метод minPrice(), який повертає мінімальну ціну.
Створити метод maxPrice(), який повертає максимальну ціну.
*/

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    // Метод для обчислення загальної вартості послуг
    price: function() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("грн")) {
                total += parseInt(this[key]); 
            }
        }
        return total + " грн";
    },

    // Метод для знаходження мінімальної ціни
    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("грн")) {
                let price = parseInt(this[key]);
                if (price < min) {
                    min = price;
                }
            }
        }
        return min + " грн";
    },

    // Метод для знаходження максимальної ціни
    maxPrice: function() {
        let max = -Infinity;
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("грн")) {
                let price = parseInt(this[key]);
                if (price > max) {
                    max = price;
                }
            }
        }
        return max + " грн";
    }
};

services['Розбити скло'] = "200 грн";

console.log("Загальна вартість послуг: " + services.price());
console.log("Мінімальна ціна послуги: " + services.minPrice());
console.log("Максимальна ціна послуги: " + services.maxPrice());