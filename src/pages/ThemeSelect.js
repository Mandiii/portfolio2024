import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { updateTheme } from "../state/theme/themeSlice"
function ThemeSelect() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentTheme = useSelector((state) => state.theme.theme);
    function changeTheme(theme) {
        console.log(theme)
        dispatch(updateTheme(theme))
        console.log(theme)
        navigate(-1)
    }

    return (
        <main id="themeSelect">
            <h1>Select a theme</h1>
            <div className="buttons-container">
                <button id="elegant" className={(currentTheme==="elegant"? "active" : "")} onClick={() => changeTheme("elegant")}>Elegant</button>
                <button id="snow" className={(currentTheme==="snow"? "active" : "")} onClick={() => changeTheme("snow")}>Snow</button>
            </div>
            
        </main>
    )
    
}
export default ThemeSelect