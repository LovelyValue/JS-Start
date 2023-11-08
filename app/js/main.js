const btns = document.querySelectorAll("button");
const overlay = document.querySelector('.overlay');
// btn.onclick = function() {
// 	alert('Click');
// };

// btn.addEventListener('click', () => {
// 	alert('Click');
// });

// btn.addEventListener('mouseenter', () => {
// 	alert('Hover');
// });

// btn.addEventListener('mouseenter', (e) => {
// 	//  console.log(e.target);
// 	 e.target.remove();
// });

// let i = 0;
const deleteElement = (e) => {
	console.log(e.target);
	console.log(e.type);
	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', deleteElement);
	// }
};

// btn.addEventListener('click', deleteElement);
// btn.addEventListener('overlay', deleteElement);

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
	event.preventDefault();

	console.log(event.traget);
});  