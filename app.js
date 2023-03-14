const search = document.querySelector('.icon');

search.onclick = () =>{
	document.querySelector('.search-box').classList.toggle('active');
console.log('search')
}


window.onload = () => {
	document.querySelector('.about p').classList.add('active'); console.log('ok')
}


document.addEventListener('scroll', function() {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			document.querySelector('.jumbotron img').style.transform = `translate(0, ${scrollTop/3.3}px)`;
    		document.querySelector('.jumbotron h1').style.transform = `translate(0, ${scrollTop/3}px)`;
    		document.querySelector('.jumbotron h3').style.transform = `translate(0, ${scrollTop/3}px)`;
    		document.querySelector('.jumbotron p').style.transform = `translate(0, ${scrollTop/2}px)`;
    		if(scrollTop > 400){

				const thumbnails = document.querySelectorAll('.thumbnail');

				thumbnails.forEach(thumbnail => {
				  thumbnail.classList.add('active');
				});
				//document.querySelector('.Project .thumbnail').classList.add('active')
console.log('ok')
			}
			if(scrollTop < 400){
				const thumbnailsR = document.querySelectorAll('.thumbnail.active');
				thumbnailsR.forEach(thumbnail => {
				  thumbnail.classList.remove('active');
				});
			}
		});

