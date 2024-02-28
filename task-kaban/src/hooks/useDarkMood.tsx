
import React from 'react'

export default function useDarkMood() {
    const [theme, setTheme] = React.useState(localStorage.theme);
    const appTheme = theme === 'dark' ? 'light' : 'dark';

    React.useEffect(() => {
        const root = window.document.documentElement;
        //remove and add the root document classlist  to reflect the current theme
        root.classList.remove(appTheme);
        root.classList.add(theme);

        //save theme to local storage
        localStorage.setItem('theme', theme);
    }, [theme, appTheme])

    return [appTheme, setTheme] as const;
}
