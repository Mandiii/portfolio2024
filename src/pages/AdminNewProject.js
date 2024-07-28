import {  useSelector } from 'react-redux'
import { useState } from "react";
import createProject from '../services/createProject';

function AdminNewProject() {
  
    const token = useSelector((state) => state.admin);
    // let projectInfo = new FormData()
    // let image = document.getElementById("coverImg").files[0]
    // projectInfo.append("title", formInfo.title)
    // projectInfo.append("coverImg", image)
    // projectInfo.append("description", formInfo.description)
    // projectInfo.append("type", formInfo.type)
    // projectInfo.append("tags", formInfo.tags)
    // projectInfo.append("date", formInfo.date)
    // projectInfo.append("duration", formInfo.duration)
    // projectInfo.append("context", formInfo.context)
    // projectInfo.append("constraints", formInfo.constraints)
   

    async function sendProject(e) {
      e.preventDefault()
      console.log(e)
      // let coverImg = e.target["coverImg"].files[0]
      // console.log(coverImg)
      let projectDetails = {
        "title": e.target["title"].value,
        "description": e.target["description"].value,
        "type": e.target["type"].value,
        "tags": e.target["tags"].value,
        "date": e.target["date"].value,
        "duration": e.target["duration"].value,
        "context": e.target["context"].value,
        "constraints": e.target["constraints"].value
      }
      // projectDetails.append("title", e.target["title"].value)
      // projectDetails.append("description", e.target["description"].value)
      // // projectDetails.append("coverImg", coverImg)
      // projectDetails.append("type", e.target["type"].value)
      // projectDetails.append("tags", e.target["tags"].value)
      // projectDetails.append("date", e.target["date"].value)
      // projectDetails.append("duration", e.target["duration"].value)
      // projectDetails.append("context", e.target["context"].value)
      // projectDetails.append("constraints", e.target["constraints"].value)
    
      console.log(projectDetails)
      try {
        createProject(token, projectDetails)  
      } catch (error) {
        alert(error.message)
      }

    }
  
    return (
      <main className='admin'>
        <section>
          <h1>New Project</h1>
          <form onSubmit={(e) => sendProject(e)}>
            <div className="input-wrapper">
              <label htmlFor="title">Project Title</label>
              <input type="text" id="title"/>
            </div>

            <div className="input-wrapper">
              <label htmlFor="description">Project description</label>
              <input type="text" id="description" />
            </div>

            {/* <div className="input-wrapper">
              <label htmlFor="coverImg">Cover Image</label>
              <input type="file" accept=".png, .jpg, .jpeg, .svg" id="coverImg" />
            </div> */}

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
  
            <button className="btn-primary" >Send</button>
          </form>
        </section>
      </main>
    );
  }
  
  export default AdminNewProject;