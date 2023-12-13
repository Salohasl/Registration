function upForm(){
    document.getElementById('form').style.display = 'flex';
    document.getElementById('btn').style.display = 'none';
};


//Смена темы для Body (с зимы на лето)
function funcSummer(){
    const theme = document.querySelector("#theme-link"); 
    // Если текущий адрес содержит "style/winter.css"
    if (theme.getAttribute("href") == "style/winter.css") {
        // …то переключаемся на "style/summer.css"
        theme.href = "style/summer.css";
        // В противном случае… 
    } else {
        // …переключаемся на "light-theme.css"
        theme.href = "style/winter.css";
    }
};

