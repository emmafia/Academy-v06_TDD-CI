// test("Adds 2 + 2 to equal 4", () => {
//     expect(2+2).toBe(4);
// });

// test("Adds 2 + 3 not to equal 6", () => {
//     expect(2+3).not.toBe(6);
// });

// test("Adds 0.1 + 0.2 to maybe equal 0.3", () => {
//     expect(0.1+0.2).toBeCloseTo(0.3);
// });

// test("Compare objects 1" , () => {
// const obj1 = {name:"test", data:[1,2,3]};
// const obj2 = obj1;
// expect(obj1).toBe(obj2)
// });
// Passes the test

// test("Compare objects 2" , () => {
// const obj1 = {name:"test", data:[1,2,3]};
// const obj2 = {name:"test", data:[1,2,3]};
// expect(obj1).toEqual(obj2)
// });

// -----Test på vår error.js-fil-----------------------------
const myFunctions = require("./my_functions"); // Importerar funktionerna i filen "my_functions"

describe('empty list', () => {

    test('is empty list', () => {
        expect(myFunctions.emptyList()).toEqual([]);
    });

    test('list lenght is zero', () => {
        expect(myFunctions.emptyList()).toHaveLength(0);
    });

    test('is not an empty string', () => {
        expect(myFunctions.emptyList()).not.toBe('');
    });

});

describe('total product cost', () => {

    test('return 0 on empty list', () => {
        expect(myFunctions.totalProductCost([])).toBe(0);
    });

    test('return 15 if list have one item with price 15', () => {
        let list = [{ name: "Banan", price: 15 }];
        expect(myFunctions.totalProductCost(list)).toEqual(15);
    });

    test('return 35 if list have three item with prices 10, 15 30', () => {
        let list = [
            { name: "Banan", price: 10 },
            { name: "Mango", price: 15 },
            { name: "Lök", price: 30 }];
        expect(myFunctions.totalProductCost(list)).toEqual(55);
    });

});

describe('add product', () => {

    test('Add item to emtpy list, list lenght is 1 an content is correct', () => {
        let products = [];
        let product = { name: "Banan", price: 15 };
        expect(myFunctions.addProduct(products, product)).toHaveLength(1);
        expect(myFunctions.addProduct(products, product)).toContainEqual(product);
        expect(myFunctions.addProduct(products, product)).toEqual([product]);
    });

    test('Add item to list with two items, list lenght is 3 and content is correct', () => {
        let products = [
            { name: "Mango", price: 15 },
            { name: "Lök", price: 30 }];
        let product = { name: "Banan", price: 15 };
        let threeProducts = [...products, product];
        expect(myFunctions.addProduct(products, product)).toHaveLength(3);
        expect(myFunctions.addProduct(products, product)).toEqual(threeProducts);
    });

});