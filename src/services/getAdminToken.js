const getAdminToken = async(username, password) => {

    let response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
            "accept": "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data.token)
        return data.token;
    } else if (response.status === 400) {
        const error = await response.json();
        throw new Error(error.message);
    } else {
        throw new Error("An unidentified error occurred. Please, check the connection to the server and try again.");
    }
}
export default getAdminToken;