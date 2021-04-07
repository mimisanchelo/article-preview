'use strict'
const btnShare = document.getElementById('toggle')
const shareMenu = document.querySelector('.share-menu')

btnShare.addEventListener('click', function () {
  shareMenu.classList.toggle('hidden')
  btnShare.classList.toggle('active')
})
