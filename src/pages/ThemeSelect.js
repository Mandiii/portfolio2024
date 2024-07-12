import { useDispatch } from "react-redux"
import { updateTheme } from "../state/theme/themeSlice"
function ThemeSelect() {

    const dispatch = useDispatch()
    function changeTheme(theme) {
        console.log(theme)
        dispatch(updateTheme(theme))
        console.log(theme)
    }

    return (
        <main>
        <button onClick={() => changeTheme("elegant")}>Elegant</button>
        <button onClick={() => changeTheme("snow")}>Snow</button>
    </main>
    )
    
}
export default ThemeSelect