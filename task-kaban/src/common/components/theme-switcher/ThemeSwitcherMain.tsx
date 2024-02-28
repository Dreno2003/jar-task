import React from 'react'
import useDarkMood from '@hooks/useDarkMood'

export default function ThemeSwitcherMain() {
    const [appTheme, setTheme] = useDarkMood();
    const [darkMood, setDarkMood] = React.useState(appTheme === 'light' ? true : false);

    const toogleAppTheme = (checked: any) => {
        setTheme(appTheme);
        setDarkMood(checked);
        console.log( appTheme , 'TEST DARK MODD')
    }


    return (
        <div>
            <input type="radio" checked={darkMood} onChange={toogleAppTheme} />
        </div>
    )
}
