const Project = require('../models/project');
const fs = require('fs');

exports.createProject = (req, res, next) => {
  console.log(JSON.parse(req.body))

    const project = req.body;
    // const url = req.protocol + '://' + req.get('host');
    const newProject = new Project({
      title: project.title,
      description: project.description,
      // coverImg: url + '/images/' + req.file.filename,
      type: project.type,
      tags: project.tags,
      date: project.date,
      duration: project.duration,
      context: project.context,
      constraints: project.constraints
    });
    newProject.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.getOneProject = (req, res, next) => {
  Project.findOne({
    _id: req.params.id
  }).then(
    (project) => {
      res.status(200).json(project);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyProject = (req, res, next) => {
    let project = new Project({ _id: req.params._id });
    if (req.file) {
      const url = req.protocol + '://' + req.get('host');
      req.body.project = JSON.parse(req.body.project);
      project = {
        _id: req.params.id,
        title: req.body.project.title,
        description: req.body.project.description,
        coverImg: url + '/images/' + req.file.filename
      };
    } else {
      project = {
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        coverImg: req.body.coverImg
      };
    }
    Project.updateOne({_id: req.params.id}, project).then(
      () => {
        res.status(201).json({
          message: 'Project updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteProject = (req, res, next) => {
    Project.findOne({_id: req.params.id}).then(
      (project) => {
        const filename = project.coverImg.split('/images/')[1];
        fs.unlink('images/' + filename, () => {
          Project.deleteOne({_id: req.params.id}).then(
            () => {
              res.status(200).json({
                message: 'Deleted!'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
        });
      }
    );
  };
exports.getAllProjects = (req, res, next) => {
  Project.find().then(
    (projects) => {
      res.status(200).json(projects);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};