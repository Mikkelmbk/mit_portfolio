// function getState() {
//     console.log(localStorage.getItem("chosenTheme"))
//     return localStorage.getItem("chosenTheme");
// }

// function switchState() {
//     if(localStorage.getItem('chosenTheme') == "true"){
//         localStorage.setItem('chosenTheme', "false")

//     }
//     else{
//         localStorage.setItem('chosenTheme',"true")
//     }
// }

// function init(themeProviderElement, themeCheckboxElement) {
//     if (getState() == "false") {
//         setDarkTheme(themeProviderElement, themeCheckboxElement)
//         return;
//     }
//     setLightTheme(themeProviderElement, themeCheckboxElement);
// }

// function setLightTheme(themeProviderElement, themeCheckboxElement) {
//     themeProviderElement.href = "assets/css/light-theme.css";
//     themeCheckboxElement.checked = "false";
// }

// function setDarkTheme(themeProviderElement, themeCheckboxElement) {
//     themeProviderElement.href = "assets/css/dark-theme.css";
//     themeCheckboxElement.checked = "true";
// }

// document.addEventListener('DOMContentLoaded', () => {
//     // let themeSwitchElement = document.querySelector('.switch');
//     let themeCheckboxElement = document.querySelector('.checkbox');
//     let themeProviderElement = document.querySelector('#theme-provider');
//     init(themeProviderElement, themeCheckboxElement);
    
//     themeCheckboxElement.addEventListener('change', () => {

//         if (getState() == "true") {
//             setLightTheme(themeProviderElement, themeCheckboxElement);
//             switchState();
//         } else {
//             setDarkTheme(themeProviderElement, themeCheckboxElement);
//             switchState();
//         }
//         // prompt("Heeeej Mikkeeeel :D")
//     });
// });

let switchControl = 0;
document.addEventListener('DOMContentLoaded',()=>{
    let themeSwitchElement = document.querySelector('.switch');
    let themeCheckboxElement = document.querySelector('.checkbox');
    let themeProviderElement = document.querySelector('#theme-provider');
    // initTheme();


    themeSwitchElement.addEventListener('click',()=>{
        changeTheme();
    })

    function changeTheme(){
        if(switchControl == 0){
            themeProviderElement.href = "assets/css/light-theme.css";
            switchControl = 1;
        }
        else if(switchControl == 1){
            themeProviderElement.href = "assets/css/dark-theme.css";
            switchControl = 0;
        }
    }

    function initTheme(){
        if(switchControl == 0){
            themeProviderElement.href = "assets/css/light-theme.css";
            switchControl = 1;
        }
        else if(switchControl == 1){
            themeProviderElement.href = "assets/css/dark-theme.css";
            switchControl = 0;
        }
    }

    // function initTheme(){
    //     if(switchControl == 0){
    //         themeProviderElement.href = "assets/css/light-theme.css"; 
    //     }
    //     else if(switchControl == 1){
    //         themeProviderElement.href = "assets/css/dark-theme.css";
    //     }
    // }


});