// Team manager class
const TeamMember = require("./teamMember");
 class TeamManager extends TeamMember {
    constructor(name, employeeId, email, officeId) {
      super(name, employeeId, email, 'TeamManager', officeId)
      this.name = name;
      this.employeeId = employeeId;
      this.email = email;
      this.officeId = officeId;
    }
}
module.exports = TeamManager