const createProject = async(token, projectInfo) => {    
    let response = await fetch('http://localhost:3001/api/projects', {
        method: 'POST',
        headers: {
            "accept": "application/json",
            "content-Type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: projectInfo
    })
    if (response.ok) {
        const data = await response.json();
        return data.body;
    } else if (response.status === 400) {
        const error = await response.json();
        throw new Error(error.message);
    } else {
        throw new Error("An unidentified error occurred. Please, check the connection to the server and try again.");
    }
}

export default createProject