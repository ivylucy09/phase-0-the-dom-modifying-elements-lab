// Write your code here!
// removing DOM node main
document.getElementById('main').remove();
//has a newHeader variable that points to the <h1> node
const newHeader = document.createElement('h1');
//newHeader variable points to the <h1> node that has an id of 'Victory'
newHeader.id = 'victory';
// newHeader has a text
newHeader.textContent = 'Ivy is the champion';
document.body.appendChild(newHeader);
