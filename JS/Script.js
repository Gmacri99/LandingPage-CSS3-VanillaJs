var openModal = document.getElementById('open-modal')
var Modal = document.getElementById("modal")
var closeModal=document.getElementById("close-modal")

closeModal.onclick = function(){
    Modal.style.display="none"
}

openModal.onclick=function(){
    Modal.style.display="block"
}