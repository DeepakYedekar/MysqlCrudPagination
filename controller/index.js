const db = require("../connection/db");

const create = (req, res) => {
  const { FullName, JobTitle, Email, Address, City, State } = req.body;
  const qry =
    "INSERT into employee (FullName,JobTitle,Email,Address,City,State) values(?,?,?,?,?,?)";
  try {
    db.query(
      qry,
      [FullName, JobTitle, Email, Address, City, State],
      function (err, results) {
        if (results) {
          res.send("Employee added successfully");
        } else {
          console.log(err);
        }
      }
    );
  } catch (err) {
    console.log("err", err);
  }
};

const addContacts = (req, res) => {
  const {
    PhoneNumber,
    PrimaryEmergencyContact,
    SecondaryEmergencyContact,
    RelationOne,
    RelationOneNumber,
    RelationTwo,
    RelationTwoNumber,
  } = req.body;
  const { id } = req.params;
  try {
    const qry =
      "INSERT into employeeContacts (EmpId, PhoneNumber, PrimaryEmergencyContact, SecondaryEmergencyContact, RelationOne, RelationOneNumber, RelationTwo, RelationTwoNumber) values(?,?,?,?,?,?,?,?)";
    db.query(
      qry,
      [
        id,
        PhoneNumber,
        PrimaryEmergencyContact,
        SecondaryEmergencyContact,
        RelationOne,
        RelationOneNumber,
        RelationTwo,
        RelationTwoNumber,
      ],
      function (err, results) {
        if (results) {
          res.send("Contacts added successfully");
        } else {
          console.log(err);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const updateEmployeeContacts = (req, res) => {
  const {
    PhoneNumber,
    PrimaryEmergencyContact,
    SecondaryEmergencyContact,
    RelationOne,
    RelationOneNumber,
    RelationTwo,
    RelationTwoNumber,
  } = req.body;
  const { id } = req.params;
  try {
    const sql = `update employeeContacts set PhoneNumber=?,PrimaryEmergencyContact=?,SecondaryEmergencyContact=?,RelationOne=?,RelationOneNumber=?,RelationTwo=?,RelationTwoNumber=? where id=?`;
    db.query(
      sql,
      [
        PhoneNumber,
        PrimaryEmergencyContact,
        SecondaryEmergencyContact,
        RelationOne,
        RelationOneNumber,
        RelationTwo,
        RelationTwoNumber,
        id,
      ],
      function (err, results) {
        if (results) {
          res.send("Employee Contacts updated successfully");
        } else {
          console.log(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const find = (req, res) => {
    try {
        const page = req.query || 1;
        let skip = 1 * page;
        const limit = req.limit;
    const sql = `select e.FullName,e.JobTitle,e.Email,e.Address,e.City,e.State,ec.PhoneNumber, ec.PrimaryEmergencyContact, ec.SecondaryEmergencyContact, ec.RelationOne, ec.RelationOneNumber, ec.RelationTwo, ec.RelationTwoNumber from employee as e CROSS JOIN  employeeContacts as ec where e.id=ec.EmpId LIMIT ${limit} OFFSET ${skip}`;
    db.query(sql, function (err, results) {
      if (results) {
        res.send(results);
      } else {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const update = (req, res) => {
  const { FullName, JobTitle, Email, Address, City, State } = req.body;
  const { id } = req.params;
  try {
    const sql = `update employee set FullName=?,JobTitle=?,Email=?,Address=?,City=?,State=? where id=?`;
    db.query(
      sql,
      [FullName, JobTitle, Email, Address, City, State, id],
      function (err, results) {
        if (results) {
          res.send("Employee updated successfully");
        } else {
          console.log(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const Delete = (req, res) => {
  const { id } = req.params;
  try {
    const sql = "delete from employee where id=?";
    db.query(sql, [id], function (err, results) {
      if (results) {
        res.send("Employee deleted sucessful");
      } else {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  create,
  find,
  update,
  updateEmployeeContacts,
  addContacts,
  Delete,
};
