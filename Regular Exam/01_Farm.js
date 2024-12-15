function solve(input) {
    const lineCount = input.shift();

    const workers = input.splice(0, lineCount).reduce((workers, entry) => {
        let [ name, areas, tasks] = entry.split(' ');
        tasks = tasks.split(',');

        workers[name] = { areas, tasks };

        return workers;
    }, {});

    input.forEach(entry => {
        const line = entry.split(' / ');
        const command = line.shift();
        const name = line.shift();

        switch (command) {
            case 'Execute': 
                const [ workArea, task ] = line;
                if ( workers[name].areas.includes(workArea) ) {
                    if ( workers[name].tasks.includes(task)) {
                        console.log(`${name} has executed the task: ${task}!`)
                    } else {
                        console.log(`${name} cannot execute the task: ${task}.`)
                    }
                } else {
                    console.log(`${name} cannot execute the task: ${task}.`)
                }
            break;
                
            case "Change Area":
                    const area = line.shift();
                    workers[name].areas = area;
                    console.log(`${name} has changed their work area to: ${area}`)
                break;
            
            case "Learn Task":
                    const newTask = line.shift();
                    
                    if ( workers[name].tasks.includes(newTask)) {
                        console.log(`${name} already knows how to perform ${newTask}.`)
                    } else {
                        workers[name].tasks.push(newTask)
                        console.log(`${name} has learned a new task: ${newTask}.`)
                    }
                break;
        }
    });

    Object.keys(workers).forEach(worker => {
        let output = '';
        const sortedTasks = workers[worker].tasks.sort((a, b) => a.localeCompare(b));
        output += `Farmer: ${worker}, Area: ${workers[worker].areas}, Tasks: ${sortedTasks.join(', ')}`;
        console.log(output);
    })
}

solve([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
  ])

//John has executed the task: watering!
//Mary cannot execute the task: feeding.
//John has learned a new task: planting.
//John has executed the task: planting!
//Mary has changed their work area to: garden
//Mary has executed the task: cleaning!
//Farmer: John, Area: garden, Tasks: planting, watering, weeding
//Farmer: Mary, Area: garden, Tasks: cleaning, feeding