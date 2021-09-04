const Intern = require("../intern");

describe('Intern includes', () => {
  it('Should have a name', () => {
    const engineer = new Engineer('kris', '1234')
    expect(engineer.name).toBe('kris');
  })
  it('Should have an ID', () => {
    const engineer = new Engineer('kris', '1234')
    expect(engineer.id).toBe('1234');
  })
  it('Should have an email', () => {
    const engineer = new Engineer('kris', '1234', 'kris@kris.com', 'kristerran')
    expect(engineer.email).toBe('kris@kris.com');
  })
  it('Should have a github username', () => {
    const engineer = new Engineer('kris', '1234', 'kris@kris.com', 'kristerran')
    expect(engineer.github).toBe('kristerran');
  })
}); 
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu