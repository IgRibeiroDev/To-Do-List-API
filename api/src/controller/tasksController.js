const tasksModel = require('../models/tasksModel');

const getAll = (req, res) => {

   const tasks = tasksModel.getAll();
   return res.status(200).json({message:'Controller On'}); 
};

module.exports = {
    getAll
};