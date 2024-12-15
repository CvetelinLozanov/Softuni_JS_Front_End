function solve(input){
    const linesCount = input.shift();

    const products = input.splice(0, linesCount).reduce((products, entry) => {
        let [ product, quantity] = entry.split(' # ');

        products[product] = {quantity: Number(quantity)};

        return products;
    }, {})

    input.forEach(entry => {
        const line = entry.split(' # ')
        const command = line.shift();
        let name = '';

        switch (command) {
            case "Mix":
                let [ chemicalName1, chemicalName2, amount ] = line;
                amount = Number(amount);

                if ( products[chemicalName1].quantity >= amount && products[chemicalName2].quantity >= amount ) {
                    products[chemicalName1].quantity -= amount;
                    products[chemicalName2].quantity -= amount;

                    console.log(`${chemicalName1} and ${chemicalName2} have been mixed. ${amount} units of each were used.`)

                } else {
                    console.log(`Insufficient quantity of ${chemicalName1}/${chemicalName2} to mix.`)
                }

            break;

            case "Replenish":
                name = line.shift();
                let amountToAdd = Number(line.shift());

                if ( ! products.hasOwnProperty( name ) ) {
                    console.log(`The Chemical ${name} is not available in the lab.`)
                } else {
                    if ( ( products[name].quantity + Number(amountToAdd) ) > 500 ) {
                        console.log(`${name} quantity increased by ${500 - products[name].quantity} units, reaching maximum capacity of 500 units!`);
                        products[name].quantity = 500;
                    } else {
                        products[name].quantity += Number(amountToAdd);
                        console.log(`${name} quantity increased by ${amountToAdd} units!`);
                    }
                }
                break;

            case "Add Formula":
                    name = line.shift();
                    formula = line.shift();

                    if ( ! products.hasOwnProperty(name) ) {
                        console.log(`The Chemical ${name} is not available in the lab.`);
                    } else {
                        products[name].formula = formula;
                        console.log(`${name} has been assigned the formula ${formula}.`);
                    }
                break;
        }
    });

    Object.keys(products).forEach(name => {

        let output = '';
        
        output += `Chemical: ${name}, Quantity: ${products[name].quantity}`;

        if ( products[name].hasOwnProperty('formula') ) {
            output += `, `;
            output += `Formula: ${products[name].formula}`;
        }

        console.log(output);
        
    });

}

solve(['4',
    'Water # 200',
    'Salt # 100',
    'Acid # 50',
    'Base # 80',
    'Mix # Water # Salt # 50',
    'Replenish # Salt # 150',
    'Add Formula # Acid # H2SO4',
    'End'])

//Water and Salt have been mixed. 50 units of each were used.
//Salt quantity increased by 150 units!
//Acid has been assigned the formula H2SO4.
//Chemical: Water, Quantity: 150
//Chemical: Salt, Quantity: 200
//Chemical: Acid, Quantity: 50, Formula: H2SO4
//Chemical: Base, Quantity: 80