let showMore = document.querySelector("#show-more");
let items = 3;

showMore.onclick = () => {
    let projectsItem = [...document.querySelectorAll('.projects-item')];
    for (var i = items; i < items + 3 ; i++ ){
        projectsItem[i].style.display = "flex";
    }
    items += 3;
    if(items >= projectsItem.length){
        showMore.style.display = "none";
    }
}