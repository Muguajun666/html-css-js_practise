const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click',(e) => {
    panels.forEach(item => {
      item.classList.remove('active')
    })
    e.target.classList.add('active')
  })
})