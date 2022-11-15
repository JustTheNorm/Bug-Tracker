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
        // const projects = await Project.find({})
        
         res.status(200).json(project);
  }catch(e){
        console.log(e)
        res.status(400).json({ msg: e.message });
    }
}

    async function updateProject(req, res) {
    try{
        console.log(req.user)
        const Projects = await Project.findByIdAndUpdate({})
        res.status(400).json(Projects)
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
    
}


// Remove ticket by ID
async function removeProject(req, res) {
    try{
        console.log(req.params.id)
        await Project.findByIdAndRemove( req.params.id)
        const projects = await Project.find({})
        res.json(projects)
        
    }catch(e){
        console.log(e)
        res.status(400).json({ msg: e.message });
    }
    
    }

    module.exports = {
        removeProject,
        addProject,
        projectList,
        updateProject,
      };
  