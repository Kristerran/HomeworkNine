 class TeamManager extends TeamMember {
    constructor(name, employeeId, email, officeNum) {
      super(name, employeeId, email, 'Team manager', officeNum)
      this.name = name;
      this.employeeId = employeeId;
      this.email = email;
      this.officeNum = officeNum;
    }
}
module.exports = TeamManager