function solve(input) {
    const numOfHeros = input.shift();
    const herosInput = input.splice(0, numOfHeros);

    const heros = herosInput.reduce((heros, hero) => {
        let [ name, power, energy ] = hero.split('-');

        power = power.split(',');
        heros[name] = { power, energy: Number(energy) };

        return heros;
    },{});


    input.forEach(entry => {
        let line = entry.split(' * ');
        const command = line.shift();
        let name = line.shift();

        switch (command) {
            case "Use Power":                
                let [ superPower, energy ] = line;
                energy = Number(energy);

                if ( heros[name].power.includes(superPower) && heros[name].energy >= energy)  {
                    heros[name].energy -= energy;
                    console.log(`${name} has used ${superPower} and now has ${heros[name].energy} energy!`);
                } else {
                    console.log(`${name} is unable to use ${superPower} or lacks energy!`)
                }

                break;
            
            case "Train":
                let [ gainedEnergy ] = line;
                gainedEnergy = Number(gainedEnergy);

                currentEnergy = heros[name].energy;

                if ( heros[name].energy < 100 ) {
                    heros[name].energy += gainedEnergy;

                    if ( heros[name].energy > 100) {
                        gainedEnergy = 100 - currentEnergy;
                        heros[name].energy = 100;                        
                    }
                    console.log(`${name} has trained and gained ${gainedEnergy} energy!`)
                } else {
                    console.log(`${name} is already at full energy!`)
                }

                break;
            
            case "Learn":
                const newSuperPower = line.shift();

                if ( heros[name].power.includes(newSuperPower) ) {
                    console.log(`${name} already knows ${newSuperPower}.`)
                } else {
                    heros[name].power.push(newSuperPower);
                    console.log(`${name} has learned ${newSuperPower}!`)
                }
                break;
        }
    });   

    Object.keys(heros).forEach(hero => {
        output = "";
        output += `Superhero: ${hero}\n`
        output += `- Superpowers: ${heros[hero].power.join(', ')}\n`
        output += `- Energy: ${heros[hero].energy}`

        console.log(output);
        
    })
}


solve([
    "3",
    "Iron Man-Repulsor Beams,Flight-80",
    "Thor-Lightning Strike,Hammer Throw-10",
    "Hulk-Super Strength-60",
    "Use Power * Iron Man * Flight * 30",
    "Train * Thor * 20",
    "Train * Hulk * 50",
    "Learn * Hulk * Thunderclap",
    "Use Power * Hulk * Thunderclap * 70",
    "Evil Defeated!"
])

//Iron Man has used Flight and now has 50 energy! 
//Thor has trained and gained 20 energy! 
//Hulk has trained and gained 40 energy! 
//Hulk has learned Thunderclap! 
//Hulk has used Thunderclap and now has 30 energy! 
//Superhero: Iron Man 
//- Superpowers: Repulsor Beams, Flight 
//- Energy: 50 
//Superhero: Thor 
//- Superpowers: Lightning Strike, Hammer Throw 
//- Energy: 30 
//Superhero: Hulk 
//- Superpowers: Super Strength, Thunderclap 
//- Energy: 30
