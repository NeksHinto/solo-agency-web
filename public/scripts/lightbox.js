const lightbox = document.createElement('div')
lightbox.className = 'page_lightbox__OJ8S1'
document.body.appendChild(lightbox)
        
        const images = document.querySelector('main').querySelectorAll('img')
        images.forEach(image => {
            image.addEventListener('click', e => {
              console.log('hola')
                lightbox.classList.remove('page_lightbox__OJ8S1')
                lightbox.classList.add('page_lightbox__active__dviH9')
                const img = document.createElement('img')
                img.src = image.src
                while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild)
                }
                lightbox.appendChild(img)
            })
        })
        
  lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('page_lightbox__active__dviH9')
  lightbox.classList.add('page_lightbox__OJ8S1')
})