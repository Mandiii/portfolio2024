const getProjects = async() => {    
    let response = await fetch('http://localhost:3001/api/projects', {
        method: 'GET',
        headers: {
            "accept": "application/json",
            "content-Type": "application/json"
        }
    })
    if (response.ok) {
        const data = await response.json();
        return data;
    } else if (response.status === 400) {
        console.log("error")
        const error = await response.json();
        throw new Error(error.message);
    } else {
        throw new Error("An unidentified error occurred. Please, check the connection to the server and try again.");
    }
}

export default getProjects