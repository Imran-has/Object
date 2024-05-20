let myCar = {
    engine: {
        horsepower: 300,
    },
    getHorsepower() {
        return this.engine.horsepower;
    },
};
console.log(myCar.getHorsepower());
export {};
