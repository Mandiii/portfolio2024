const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.getAllProjects);
router.post('/', projectsCtrl.createProject);
router.get('/:id', projectsCtrl.getOneProject);
router.put('/:id', auth, multer, projectsCtrl.modifyProject);
router.delete('/:id', auth, projectsCtrl.deleteProject);

module.exports = router;