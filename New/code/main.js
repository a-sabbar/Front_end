let isClick = false
let nmbofclick = 0;

function profile_list_on() {
    if(!isClick)
    {
        nmbofclick++;
        document.getElementById("profile").style.display="flex";
        isClick = true;
        console.log(nmbofclick);
    }
}

function profile_list_of() {
    if(isClick && nmbofclick === 2)
    {
        document.getElementById("profile").style.display="none";
        nmbofclick = 0;
    }
    if(!isClick)
    {
        document.getElementById("profile").style.display="none";
        nmbofclick = 0;
    }
    isClick = false;
}

function open_link(link) {
    window.open(link);
}

if((new Date).getHours() <= 12 && (new Date).getHours() >= 0)
    document.querySelector(".time").textContent = "morning";
else
    document.querySelector(".time").textContent = "evening";

