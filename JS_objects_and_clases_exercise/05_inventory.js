function solve(input) {
    const heros = [];

    input.forEach(heroInfo => {
        const [heroName, heroLevel, items] = heroInfo.split(' / ');

        level = Number(heroLevel);
        const hero = { heroName, level, items };

        heros.push(hero)
    });

    heros
    .sort((a, b) => a.level - b.level)
    .forEach(hero => {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })   
}

solve(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])