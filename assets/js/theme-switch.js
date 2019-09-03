document.addEventListener('DOMContentLoaded', () => {
    let themeSwitchElement = document.querySelector('.switch');
    let themeCheckboxElement = document.querySelector('.checkbox');
    let themeProviderElement = document.querySelector('#theme-provider');

    if (localStorage.currentTheme == null) {
        localStorage.currentTheme = "light";
        themeProviderElement.href = "assets/css/light-theme.css";
    }
    else {
        console.log("hej")
    }



    themeSwitchElement.addEventListener('click', () => {
        changeTheme();
    });

    function changeTheme() {
        if (localStorage.currentTheme == "light") {
            themeProviderElement.href = "assets/css/light-theme.css";
            localStorage.currentTheme = "dark";
        }
        else {
            themeProviderElement.href = "assets/css/dark-theme.css";
            localStorage.currentTheme = "light";
        }
    }

});