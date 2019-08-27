document.addEventListener('DOMContentLoaded',()=>{

    let themeSwitchElement = document.querySelector('.switch');
    let switchControl = 0;

    let themeProviderElement = document.querySelector('#theme-provider');
    console.log(themeProviderElement);

    themeSwitchElement.addEventListener('click',()=>{
        if(switchControl == 0){
            themeProviderElement.href = "assets/css/light-theme.css";
            switchControl = 1;
        }
        else if(switchControl == 1){
            themeProviderElement.href = "assets/css/dark-theme.css";
            switchControl = 0;
        }
    })



});