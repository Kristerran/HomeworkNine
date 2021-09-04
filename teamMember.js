class TeamMember {
    constructor(name, employeeId, email, role, otherInfo) {
        this.name = name
        this.employeeId = employeeId
        this.email = email
        this.role = role
        this.otherInfo = otherInfo
    }
    printVar() {
        let teamMemberHtml =
            `<div class = ${this.role}>
          <H1 class = 'name'>Name:${this.name}</H1>
          <H2 class = 'role'>Position:${this.role}</H2>
          <P class = 'id'>Employee ID:${this.employeeId}</P>
          <a class = 'email' href = 'mailto: ${this.email}'>Email:${this.email}</a>
          `
        if (this.role == 'engineer') {
            teamMemberHtml += `
            <a class = 'github' href = 'https://github.com/${this.otherInfo}'> GithubLink: ${this.otherInfo}</a>
            `
        } else if (this.role == 'intern') {
            teamMemberHtml += `
            <p class = 'school'> School: ${this.otherInfo}</a>
            `
        } else if (this.role == 'teamManager') {
            teamMemberHtml += `
            <p class = 'storeNum> Store Number: ${this.otherInfo}</a>
            `
        } else {
            console.log("ERROR: not a team member?")
        }
        teamMemberHtml += '</div>'
        return teamMemberHtml
    }
}
module.exports = TeamMember