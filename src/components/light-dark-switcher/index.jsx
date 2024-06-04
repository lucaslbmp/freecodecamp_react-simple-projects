import useLocalStorage from "./useLocalStorage";
import './styles.css'

export default function LightDarkMode(){
    const [theme, setTheme] = useLocalStorage('theme', "dark");

    const handleChangeBackgroundColor = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return(
        <div className="light-dark-mode" data-theme={theme}>
            <div className={"container-dark-light"}>
                <p>Hello world!</p>
                <button onClick={handleChangeBackgroundColor}>Change theme</button>
            </div>
        </div>
    )
}