let i = 2;

function favouriteButton() {
    if(i % 2 == 0){
    document.getElementById("favourite").style.backgroundColor = "brown",
    document.getElementById("favourite").style.color = "white",
    document.getElementById("favourite").style.borderColor = "brown",
    document.getElementById("favourite").textContent= "Favourited"
    i += 1;
}
    else if(i % 2 == 1){;
    document.getElementById("favourite").style.backgroundColor = "transparent",
    document.getElementById("favourite").style.color = "black",
    document.getElementById("favourite").style.borderColor = "black",
    document.getElementById("favourite").textContent= "Favourite"
    i += 1;
}
};

function submitButton(){
    let comment = (document.getElementById("comment").value);
    alert(comment);
};
