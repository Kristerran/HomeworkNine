const TeamMember = require("./teamMember");
 class TeamManager extends TeamMember {
    constructor(name, employeeId, email, officeNum) {
      super(name, employeeId, email, 'TeamManager', officeNum)
      this.name = name;
      this.employeeId = employeeId;
      this.email = email;
      this.officeNum = officeNum;
    }
}
module.exports = TeamManager