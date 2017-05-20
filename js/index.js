(function(){
	let codigo = document.getElementById('texto');

	codigo.addEventListener('keypress', getPhoto);
	codigo.addEventListener('keyup', mostrar);

	function getPhoto (e) {
		if ((event.keyCode < 48) || (event.keyCode > 57)) 
	  	event.returnValue = false;
	}

	function mostrar(e){
		e.preventDefault();
		let codigo = document.getElementById('texto');
		let photo = document.getElementById('photo');
		
		if(codigo.value.length == 9){
			let url = "https://intranet.cibertec.edu.pe/Programas/imagen/fotos/cibertec/0001"+codigo.value+".jpg";
			photo.setAttribute('src', url);
		}else{
			photo.setAttribute('src', '');
		}
	}
})();