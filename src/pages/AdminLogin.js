import getAdminToken from "../services/getAdminToken";
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin} from "../state/adminLogin/adminSlice";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
  
  
    async function updateAdminToken() {
      try {
        const newToken = await getAdminToken(username, password);
        console.log(newToken)
        dispatch(adminLogin(newToken));
        localStorage.setItem("token", newToken);
        navigate("/add-project")

      } catch (error) { 
        alert(error.message);
      }
    }
  
    return (
      <main>
        <section className="sign-in-content">
          <h1>Sign In</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={username}
                     onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" value={password}
                     onChange={(event) => setPassword(event.target.value)} />
            </div>
  
            <button className="sign-in-button" onClick={() => updateAdminToken()}>Sign In</button>
          </form>
        </section>
      </main>
    );
  }
  
  export default Login;