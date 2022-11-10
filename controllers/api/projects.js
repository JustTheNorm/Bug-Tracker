const Project = require('../../models/projects');
// const Item = require('../../models/item');


// A cart is the unpaid ticket for a user
async function projectList(req, res) {
    try{
        const project = await Project.find({})
        res.status(200).json(project);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
}


async function addProject(req, res) {
    try{
        const project = await Project.create(req.body);
        
         res.status(200).json(project);
  }catch(e){
        console.log(e)
        res.status(400).json({ msg: e.message });
    }
}

    async function updateProject(req, res) {
    try{
        const Projects = await Project.findByIdAndUpdate({ _id})
        res.status(400).json(Projects)
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
    
}


// Remove ticket by ID
async function removeProject(req, res) {
    try{
        const Projects = await Project.findByIdAndRemove({ _id})
        
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
    
    }

    module.exports = {
        removeProject,
        addProject,
        projectList,
        updateProject,
      };
  