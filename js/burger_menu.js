function toggleBurgerMenu() {
    let currentStatus = !(document.getElementById("menu").style.display == "")

    if(currentStatus) {
        document.getElementById("menu").style.display = ""
    } else {
        document.getElementById("menu").style.display = "inline"
    }
}