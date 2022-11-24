function addTwoNumbers(a, b) {
  return a + b;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise: ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var getGreetingResult = getGreeting('Dylan');
console.log('getGreeting exercise: ', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise: ', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise: ', multiplyAndDivideBy5Result);

function subtractTwoNumbers(a, b) {
  return a - b;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);

console.log('subtractTwoNumbers Exercise: ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResult = getFullName('Dylan', 'Prosser');
console.log('getFullName exercise: ', getFullNameResult);

function cube(number) {
  return Math.pow(number, 3);
}
var cubeResult = cube(5);
console.log('cube exercise: ', cubeResult);
