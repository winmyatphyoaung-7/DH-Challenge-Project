
const changeColorToLight = () => {
    document.documentElement.setAttribute('data-theme' , 'light');
    localStorage.setItem('data-theme' , 'light');
}

const changeColorToDark = () => {
    document.documentElement.setAttribute('data-theme' , 'dark');

    localStorage.setItem('data-theme' , 'dark');
}


let changeColor = document.getElementById("changeColor");

changeColor.addEventListener ("change" , () => {
    let theme = localStorage.getItem('data-theme');
   

    if (theme === 'dark') {
        changeColorToLight();
      
        
    }else {
        changeColorToDark();
    }
})

let theme = localStorage.getItem('data-theme');

if(theme === "dark") {
    changeColorToDark();
}else {
    changeColorToLight();
    changeColor.setAttribute("checked", "checked")
}