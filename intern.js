const TeamMember = require('./teamManager');

class Intern extends TeamMember {
    constructor(name, id, email, school){
        super(name, id, email, 'student', school)
        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }
}

module.exports = Intern