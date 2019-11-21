var modal = document.getElementById("mainModal");

var img = document.getElementById("mainImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementById("close")[0];

span.onclick = function() {
	 modal.style.display = "none"; 
}