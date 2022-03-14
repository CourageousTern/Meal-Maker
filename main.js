const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetuzers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    addDishCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(disk);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomINdex = Mathfloor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizers = this.getRandomDishesFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('dessert');
        const totalPrice = appetizer.price + mains.price + dessert.price;
        return 'Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}';
    }
};

menu.addDishToCourse('appetizers', 'salad', 5.00);
menu.addDishToCourse('appetizers', 'soup', 4.00);
menu.addDishToCourse('appetizers', 'shrimp', 10.00);

menu.addDishToCourse('mains', 'chicken', 10.00);
menu.addDishToCourse('mains', 'steak', 15.00);
menu.addDishToCourse('mains', 'seafood', 20.00);

menu.addDishToCourse('desserts', 'chocolate cake', 5.00);
menu.addDishToCourse('desserts', 'creme brulee', 4.00);
menu.addDishToCourse('desserts', 'bag of magic skittles', 100.00);

const real = menu.generateRandomMeal();
console.log(meal);
