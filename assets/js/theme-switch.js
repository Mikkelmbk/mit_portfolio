let switchControl = 0;
document.addEventListener('DOMContentLoaded',()=>{
    let themeSwitchElement = document.querySelector('.switch');
    let themeProviderElement = document.querySelector('#theme-provider');
    themeDisplayed();


    themeSwitchElement.addEventListener('click',()=>{
        themeDisplayed();
    })

    function themeDisplayed(){
        if(switchControl == 0){
            themeProviderElement.href = "assets/css/light-theme.css";
            switchControl = 1;
        }
        else if(switchControl == 1){
            themeProviderElement.href = "assets/css/dark-theme.css";
            switchControl = 0;
        }
    }


});