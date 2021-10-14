// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "14 south"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]:value});
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee, ...key};
    delete newEmployee[key]
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee;
}