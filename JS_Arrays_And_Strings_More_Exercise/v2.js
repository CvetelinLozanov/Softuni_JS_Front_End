function calculatePyramidMaterials(base, increment) {
 
    let stones = 0, marble = 0, lapisLazuli = 0, gold = 0, layerCount = 1;
 
    while (base > 2) {
        base -= 2
        stones += ((base) ** 2) * increment
        if (layerCount % 5 == 0) {
            lapisLazuli += ((base * 4) + 4) * increment
        } else {
            marble += ((base * 4) + 4) * increment
        }
        layerCount += 1
    }
 
    gold += (base ** 2) * increment
 
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(layerCount * increment)}`);
 
}

calculatePyramidMaterials(11,1);

// Stone required: 165
// Marble required: 112
// Lapis Lazuli required: 8
// Gold required: 1
// Final pyramid height: 6
	