var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");

    /*When the icon is clicked on, it will add the sidebar class (small-sidebar), and 
    if the class is already there it removes it */
}
