var person = {
  firstName: 'Dylan',
  lastName: 'Prosser',
  hobby: 'Sailing'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log('The person\'s name is: ' + fullName);

person['job'] = 'Software Engineer';

console.log('The person\'s current job is: ' + person.job);

person['previousJob'] = 'Field Installer';

console.log('The person\'s previous job is: ' + person.previousJob);

console.log(person);
