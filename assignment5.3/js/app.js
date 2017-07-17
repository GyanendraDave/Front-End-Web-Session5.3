var employee = {
    name: "Ashok",
    age: 30,
    salary: 50000,
    address: {
        city: "Sayla",
        state: "Rajasthan",
        pincode: 343022
    }
};

console.log(
    employee.name + " is " +
    employee.age + " years old and his salary is " +
    employee.salary + " and Address is - City " +
    employee.address.city + " State " +
    employee.address.state + " Pincode " +
    employee.address.pincode
);