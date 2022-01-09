exports.getEmployee = async (req, res)=>{
    res.send(`get all Employee`);
}

exports.getEmployeeById = async(req,res)=>{
    res.send(`get employee by id = ${req.params.id}`);
};

exports.getEmployeeBySal = async(req,res)=>{
    sal = req.params.sal*10/100;
    res.send(`get employee by tax = ${sal}`);
};

exports.getEmployeeByAge = async(req,res)=>{
    age = 60 - req.params.age;
    res.send(`get employee by retire = ${age}`);
};

exports.addEmployee = async(req,res)=>{
    sal = req.body.sal*10/100;
    age = 60 - req.body.age;
    res.send(`Add employee ID:${req.body.id} , Name:${req.body.name} , Age:${age} , Salary:${sal}`);
};