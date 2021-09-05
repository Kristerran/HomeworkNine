module.exports = teamArray => {
    console.log(teamArray)
    printHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    `
    teamArray.forEach(element => {
        console.log(element)
        if (element.role == 'TeamManager') {
            printHtml += `
            TM HERE
            `
        }
        if (element.role == 'Engineer') {
            printHtml += 
            `
            ENG HERE
            `
        }
        if (element.role == 'Intern') {
            printHtml += 
            `
            INT HERE
            `
        }
    })
    printHtml +=
    `
    </body>
    </html>
    `
    return printHtml
}
