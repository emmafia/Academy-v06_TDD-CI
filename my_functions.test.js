// -----Test på vår my_function.js-fil-----------------------------
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

// describe('remove product', () => {
//     test('Function is implemented', () => {
//         expect(myFunctions.removeProduct()).toBeDefined();
//     });
//     // test('Returns empty list when removing first product in list with 1 item', () => {
//     //     let products = { name: "Banan", price: 15 };
//     //     let index = 0;
//     //     expect(myFunctions.menuRemoveProduct(products, index)).toEqual([]);
//     // });
// });