const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listImages = document.querySelector(".gallery");
listImages.style.listStyle = "none";
listImages.style.display = "flex";
listImages.style.flexDirection = "column";
listImages.setAttribute('flex-direction', 'column');
//console.log(listImagesRef.hasAttribute("flex-direction"));

const listImagesRef = (attributes) => {
  const { url, alt } = attributes;
  return `<li> <img src = ${url} alt = ${alt} width = "620" height = "340"></li>`;
};

const pasteImages = images.map(listImagesRef).join('');
listImages.insertAdjacentHTML("afterbegin", pasteImages);
console.log(pasteImages);
