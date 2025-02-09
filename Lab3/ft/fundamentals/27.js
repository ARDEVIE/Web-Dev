let age=50
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
console.log(checkAge(50))