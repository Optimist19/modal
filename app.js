
const modalBtn = document.querySelector(".modal-btn")
const modalOver = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")

modalBtn.addEventListener("click", function(){
	modalOver.classList.add("open-modal")
	// modalOver.classList.toggle("open-modal")

	console.log(modalBtn.classList)
})

closeBtn.addEventListener("click", function(){
	modalOver.remove("open-modal")
})