import {  useSelector } from 'react-redux'
import { useState } from "react";
import createProject from '../services/createProject';

function AdminNewProject() {
  
    const title = document.getElementById("title")
    console.log(title)
    const [formInfo, setFormInfo] = useState(
      {
        "title": title.value,
        // "description": document.getElementById("title").value, 
        // "type": document.getElementById("title").value,
        // "tags": document.getElementById("title").value,
        // "date": document.getElementById("title").value,
        // "duration": document.getElementById("title").value,
        // "context": document.getElementById("title").value,
        // "constraints": document.getElementById("title").value
      });
  
    // "coverImg": {coverImg},
    const token = useSelector((state) => state.admin);
    let projectInfo = new FormData()
    let image = document.getElementById("coverImg").files[0]
    projectInfo.append("title", formInfo.title)
    projectInfo.append("coverImg", image)
    projectInfo.append("description", formInfo.description)
    projectInfo.append("type", formInfo.type)
    projectInfo.append("tags", formInfo.tags)
    projectInfo.append("date", formInfo.date)
    projectInfo.append("duration", formInfo.duration)
    projectInfo.append("context", formInfo.context)
    projectInfo.append("constraints", formInfo.constraints)
   

    async function sendProject() {
      try {
        console.log(projectInfo)
        createProject(token, projectInfo)
      } catch (error) {
        alert(error.message)
      }

    }
  
    return (
      <main>
        <section>
          <h1>New Project</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-wrapper">
              <label htmlFor="title">Project Title</label>
              <input type="text" id="title" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="description">Project description</label>
              <input type="text" id="description" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="coverImg">Cover Image</label>
              <input type="file" accept=".png, .jpg, .jpeg, .svg" id="coverImg" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="type">Type</label>
              <input type="text" id="type"/>
            </div>


            <div className="input-wrapper">
              <label htmlFor="tags">Tags</label>
              <input type="text" id="tags"/>
            </div>

            <div className="input-wrapper">
              <label htmlFor="date">Date</label>
              <input type="text" id="date" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="duration">Duration</label>
              <input type="text" id="duration" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="context">Context</label>
              <input type="text" id="context" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="contraints">Constraints</label>
              <input type="text" id="constraints" />
            </div>
  
            <button className="btn-primary" onClick={() => sendProject()}>Send</button>
          </form>
        </section>
      </main>
    );
  }
  
  export default AdminNewProject;