const TeamManager = require("../teamManager");


describe('TeamManagerincludes', () => {
  const teamManager = new TeamMember('kris', '1234', 'kris@kris.com', '1234')
  it('Should have a managers name', () => {
    expect(teamManager.managersName).toBe('kris');
  })
  it('Should have an ID', () => {
    expect(teamManager.employeeId).toBe('1234');
  })
  it('Should have an email address', () => {
    expect(teamManager.email).toBe('kris@kris.com');
  })
  it('Should have an officeNumber', () => {
    expect(teamManager.officeNum).toBe('1234');
  })
  
});