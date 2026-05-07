
class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    getInfo() {
        return `Սա ${this.brand} ${this.model} է, ${this.color} գույնի, արտադրված ${this.year} թվականին:`;
    }

    getAge() {
        const currentYear = 2026;
        return currentYear - this.year;
    }
}

const car1 = new Car("BMW", "M5", 2022, "սև");
const car2 = new Car("Mercedes-Benz", "E-Class", 2018, "սպիտակ");

const carsArray = [car1, car2];
console.log("Մեքենաների ցուցակ:");

carsArray.forEach((car, index) => {
    console.log(`${index + 1}. ${car.getInfo()}`);
    console.log(`   Տարիքը՝ ${car.getAge()} տարեկան:`);
});