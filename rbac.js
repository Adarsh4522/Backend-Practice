const express = require('express');
const app = express();

const users = {
    karan: {role: 'admin'},
    ramesh: {role: 'teacher'},
    suresh: {role: 'student'},

};

const permissions = {
    admin: ['read', 'write', 'delete', 'dashboard'],
    teacher: ['read', 'write'],
    student: ['read']
};

const getUser = (req,res,next)=> {
    const username = req.query.user;
    if(!username || !users[username]) {
        return res.send("user not found");
    }
    req.user = users[username];
    next();
}
app.use(getUser);

const checkAccess = (page)=> (req, res, next) => {
    const userRole = req.user.role;
    if(permissions[userRole].includes(page)) {
        next();
    } else {
        res.send('Access denied');
    }
}