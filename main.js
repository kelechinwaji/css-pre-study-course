let btn = document.querySelector('.btn');

btn.addEventListener("click", function(){ 
    let createH2Text = prompt('Enter The Date and Heading of Your Note: ');
let createParagraphText = prompt('Enter Your Note: ');


let newArticle = document.createElement('article');
let createParagraph = document.createElement('p');
let createH2 = document.createElement('h2');

createH2.append(createH2Text);
createParagraph.append(createParagraphText);

newArticle.appendChild(createH2);
newArticle.appendChild(createParagraph);

let articleDestination = document.querySelector('.container');
articleDestination.insertBefore(newArticle, articleDestination.childNodes[0] );
    
});

