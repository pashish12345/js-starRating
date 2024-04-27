let stars = document.querySelectorAll('.star')

let clicked = document.querySelector('.rating')

for (let i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1

  ;['click', 'mouseover', 'mouseout'].forEach((el, index) => {
    stars[i].addEventListener(el, rating)
  })
}

function rating(e) {
  let starValue = this.starValue
  let type = e.type

  stars.forEach((el, index) => {
    if (type === 'click') {
      clicked.innerHTML = `your Rating is ${starValue}`
    }

    if (type === 'click') {
      if (index < starValue) {
        el.classList.add('orange')
      } else {
        el.classList.remove('orange')
      }
    }

    if (type === 'mouseover') {
      if (index < starValue) {
        el.classList.add('magneta')
      } else {
        el.classList.remove('magneta')
      }
    }

    if (type === 'mouseout') {
      el.classList.remove('magneta')
    }
  })
}
