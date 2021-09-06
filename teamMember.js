//Kept teamMember class even though it is not currently used, I feel as though this would be useful for acessing all team members for other projects involving same data.
class TeamMember {
    constructor(name, employeeId, email, role, otherInfo) {
        this.name = name
        this.employeeId = employeeId
        this.email = email
        this.role = role
        this.otherInfo = otherInfo
    }
}
module.exports = TeamMember