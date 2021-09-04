const Intern = require("../intern");
const intern = new Intern('kris', '1234', 'kris@kris.com', 'schooltheSchool')
describe('Intern includes', () => {
  it('Should have a name', () => {
    expect(intern.name).toBe('kris');
  })
  it('Should have an ID', () => {
    expect(intern.id).toBe('1234');
  })
  it('Should have an email', () => {
    expect(intern.email).toBe('kris@kris.com');
  })
  it('Should have a school', () => {
    expect(intern.school).toBe('schooltheSchool');
  })
});