// 0 - Bajar repo, hacer hola mundo console.log

// 2 - Funciones:
    function add(firstOperator, secondOperator) {
        return firstOperator + secondOperator;
    }
    function subtract(firstOperator, secondOperator) {
        return firstOperator - secondOperator;
    }
    function divide(firstOperator, secondOperator) {
        return firstOperator / secondOperator;
    }
    function multiply(firstOperator, secondOperator) {
        return firstOperator * secondOperator;
    }

    console.log("\nejercicio 2: ");
    console.log(add(3, 4));
    console.log(subtract(3, 4));
    console.log(divide(3, 4));
    console.log(multiply(3, 4));

// 3 - Funcion
    /*si llueve, llevar paraguas☂️. si la temperatura
    es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
    si la temperatura es 30 usar lentes 🕶 */

    function dress(temperature, isRaining) {
        let res = "";
        if (isRaining) {
            res += 'llevar paraguas ☂️ ';
        }
        if (temperature < 10) {
            res += 'ir en auto 🚗 ';
        } else if (temperature > 30) {
            res += 'ir de short 🩳 ';
        } else if (temperature === 30) {
            res += 'usar lentes 🕶 ';
        }
        return res;
    }

    console.log("\nejercicio 3: ");
    console.log(dress(5, false));
    console.log(dress(15, true));
    console.log(dress(35, false));
    console.log(dress(30, false));

// 4 - Funcion
    function calculate(operation, firstOperator, secondOperator) {
        switch(operation) {
            case "+":
                return firstOperator + secondOperator;
            case "-":
                return firstOperator - secondOperator;
            case "/":
                return firstOperator / secondOperator;
            case "*":
                return firstOperator * secondOperator;
            default:
                return "invalid operation :(";
        }
    }

    console.log("\nejercicio 4:");
    console.log(calculate("+", 2, 1));
    console.log(calculate("-", 2, 1));
    console.log(calculate("/", 2, 1));
    console.log(calculate("/", 2, 0));
    console.log(calculate("*", 2, 1));
    console.log(calculate("a", 2, 1));

// 5 - Funcion
    function eating(name, foods) {
        for (food of foods) {
            console.log(name + " is eating " + food);
        }
    }

    console.log("\nejercicio 5: ")
    console.log(eating("juan", ['🍔','🍟','🍗']));

// 6 - Funcion
    function finalCountDown(count) {
        while (count >= 0) {
            console.log(count + "...");
            count--;
        }
    }

    console.log("\nejercicio 6:");
    console.log(finalCountDown(10));

// 7 - Funcion
    function getGrade(score) {
        switch(score) {
            case (score >= 0) && (score <= 40): {
                return "D";
            }
            case (score >= 41) && (score <= 60): {
                return "R";
            }
            case (score >= 61) && (score <= 74): {
                return "B";
            }
            case (score >= 75) && (score <= 84): {
                return "BMB";
            }
            case (score >= 85) && (score <= 96): {
                return "MB";
            }
            case (score >= 97) && (score <= 100): {
                return "S";
            }
            default: {
                return "invalid score";
            }
        }
    }
    /* It should return the following grade according the score value.
    0-40 => D
    41-60 => R
    61-74 => B
    75-84 => BMB
    85-96 => MB
    97-100 => S */

// 8 - Funcion
    function fillCart(person, articlesCollection) {
        person.cart += person.cart[...articlesCollection];
    }
/* cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
person: {name: 'Pepe', cart: []}
it should modify person's cart in order to add the the new collection of articles */

// 9 - Funcion
    function countBanana(inventory) {
        let count = 0;
        for (fruit of inventory) {
            if (fruit === '🍌') {
                count++;
            }
        }
        return count;
    }

    console.log("\nejercicio 9:")
    console.log(countBanana(['🥑','🍌','🥭', '🍌']));

// 10 - Function
    function getTotal(inventory) {
        let total = 0;
        for (article of inventory) {
            total += article.price * article.quantity;
        }
        return total;
    }
    
    console.log("\nejercicio 10: ")
    console.log(getTotal([{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]))
/* it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2) */