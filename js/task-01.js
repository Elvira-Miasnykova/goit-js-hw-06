const listItemEl = document.querySelectorAll('.item');
//console.log(listItemEl);
const listItemCount = listItemEl.length;

console.log("Number of categories:", listItemCount);

// for (let item of listItemEl) {
//     console.log("Category: ", item.firstElementChild.textContent);
//     console.log("Elements: ", item.querySelectorAll('li').length);
    
// }

listItemEl.forEach((item) => {
    console.log("Category: ", item.firstElementChild.textContent);
    console.log("Elements: ", item.querySelectorAll('li').length);
});