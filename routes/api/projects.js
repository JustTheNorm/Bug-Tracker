const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects');


router.post(`/new`, projectsCtrl.addProject)
router.delete(`/delete`, projectsCtrl.removeProject)
router.get(`/`, projectsCtrl.projectList)

module.exports = router;