const TeamMember = require('./teamManager');

class Engineer extends TeamMember {
    constructor(name, id, email, github){
        super(name, id, email, 'Engineer', github), 
        this.name = name
        this.id = id
        this.email = email
        this.github = github
    }
}

module.exports = Engineer