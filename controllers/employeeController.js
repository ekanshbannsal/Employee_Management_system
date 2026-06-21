const Employee = require("../models/employee");

exports.home = (req, res) => {
    res.render("home");
};

exports.viewEmployee = async (req, res) => {
    const allemployee = await Employee.find();
    res.render("employee", {allemployee});
};

exports.insertPage = (req, res) => {
    res.render("form");
};

exports.createEmployee = async (req, res) => {
    req.body.ip = req.ip;
    await Employee.create(req.body);
    res.redirect("/viewdata");
};

// exports.editPage = async (req, res) => {
//     const data = await Employee.findById(req.params.userid);
//     res.render("edit", { data });
// };

exports.updateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.userid, req.body, {
        new: true
    });

    res.redirect("/viewdata");
};

exports.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.userid);
    res.redirect("/viewdata");
};
