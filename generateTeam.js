//this code creates our html content based on our entered team members.  
  const htmlTemplate = teamArray => {
    var printHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meet the Team!</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>

    <h1 class="display-1">
         Meet the team! 
    </h1>
    <div class="container-fluid" style="display:flex; justify-content:center; flex-wrap:wrap;">
    `
    teamArray.forEach(element => {
        if (element.role == 'TeamManager') {
            printHtml += `
            <div class = "card" style="width: 18rem; margin:auto;">
                <img src="https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg" class="card-img-top" alt="Manager Cat">
                    <div class="card-body>
                        <h5 class="card-title">Name: ${element.name} </h5>
                        <P class="card-text">Role: ${element.role} </P>
                        <ul class="list-group list-group-flush" style="padding:10%;">
                            <li>
                                Employee Id: ${element.employeeId}
                            </li>
                            <li>
                                <a class="card-link" href = 'mailTo:${element.email}'>
                                    Email: ${element.email}
                                </a>
                            </li>
                            <li>
                                    Office Number: ${element.officeId}
                            </li>
                        </ul>
                    </div>
            </div>
            <div class="break" style="flex-basis:100%; height:0;"></div>
            `
        }
        if (element.role == 'Intern') {
            printHtml += 
            `
            <div class = "card" style="width: 18rem; margin:auto;">
                <img src="https://ae01.alicdn.com/kf/HTB1eBxraovrK1RjSspcq6zzSXXa6/Plaid-Cat-Clothes-Summer-Fashion-Cat-Shirts-Coat-For-Small-Cats-Shirt-Clothing-Puppy-Kitten-Outfits.jpg_q50.jpg" class="card-img-top" alt="Intern Cat">
                    <div class="card-body>
                        <h5 class="card-title"> Name: ${element.name} </h5>
                        <P class="card-text"> Role: ${element.role} </P>
                        <ul class="list-group list-group-flush" style="padding:10%;">
                            <li>
                                Employee ID: ${element.employeeId}
                            </li>
                            <li>
                                <a class="card-link" href = 'mailTo:${element.email}'>
                                    Email: ${element.email}
                                </a>
                            </li>
                            <li>
                                    School: ${element.school}
                            </li>
                        </ul>
                    </div>
            </div>
            `
        }
        if (element.role == 'Engineer') {
            printHtml += 
            `
            <div class = "card" style="width: 18rem; margin:auto;">
                <img src="https://www.meme-arsenal.com/memes/fefc1ec992f82597471cc1ae91678794.jpg" class="card-img-top" alt="Engineer Doge">
                    <div class="card-body>
                        <h5 class="card-title">Name: ${element.name} </h5>
                        <P class="card-text">Role: ${element.role} </P>
                        <ul class="list-group list-group-flush" style="padding:10%;">
                            <li>
                                Employee ID: ${element.employeeId}
                            </li>
                            <li>
                                <a class="card-link" href = 'mailTo:${element.email}'>
                                    Email: ${element.email}
                                </a>
                            </li>
                            <li>
                                <a class="card-link" href = 'https://github.com/${element.github}>'>
                                    ${element.github}
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
            `
        }
    })
    printHtml +=
    `
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>
    `
    return printHtml
}
module.exports = htmlTemplate