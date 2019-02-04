// From that array, extract just the customers' contact email addresses and store them in a new array. You will 
// need a nested array method - meaning one iteration inside another one - since you need to iterate the entire array 
// of customers, and then iterate the array of emails for each one.

let emailsArray = customers.map(customer => customer.contacts.email).reduce((accumalator, current) => {
  current.forEach(element => {
    accumalator.push(element)
  });
  return accumalator
}, [])
console.log(emailsArray)



