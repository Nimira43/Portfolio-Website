
// Mouse Circle
const mouseCircle = document.querySelector('.mouse-circle')
const mouseDot = document.querySelector('.mouse-dot')

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `
        top: ${y}px;
        left: ${x}px;
        opacity: 1;   
    `
    mouseDot.style.cssText = `
        top: ${y}px;
        left: ${x}px;
        opacity: 1;   
    `
}

// Animated Circles
const circles = document.querySelectorAll('.circle')
const mainImg = document.querySelector('.main-circle img')

let mX = 0
let mY = 0
const z = 100
const animateCircles = (e, x, y) => {
    if (x < mX) {
        circles.forEach(circle => {
            circle.style.left = `${z}px`
        })
        mainImg.style.left = `${z}px`
    } else if (x > mX) {
        circles.forEach(circle => {
            circle.style.left = `-${z}px`
        })
        mainImg.style.left = `-${z}px`
    }
    if (y < mY) {
        circles.forEach(circle => {
            circle.style.top = `${z}px`
        })
        mainImg.style.top = `${z}px`
    } else if (y > mY) {
        circles.forEach(circle => {
            circle.style.top = `-${z}px`
        })
        mainImg.style.top = `-${z}px`
    }
    mX = e.clientX
    mY = e.clientY
}

// Event Listeners

document.body.addEventListener('mousemove', e => {
    let x = e.clientX
    let y = e.clientY
    mouseCircleFn(x, y)
    animateCircles(e, x, y)
})

document.body.addEventListener('mouseleave', () => {
    mouseCircle.style.opacity = '0'
    mouseDot.style.opacity = '0'
})

// Main Button

const mainBtn = document.querySelector('.main-btn')
let ripple
mainBtn.addEventListener('mouseenter', e => {
    const left = e.clientX - e.target.getBoundingClientRect().left
    const top = e.clientY - e.target.getBoundingClientRect().top
    ripple = document.createElement('div')
    ripple.classList.add('ripple')
    ripple.style.left = `${left}px`
    ripple.style.top = `${top}px`
    mainBtn.prepend(ripple)
})
mainBtn.addEventListener('mouseleave', () => {
    mainBtn.removeChild(ripple)
})

// About Me Text

const aboutMeText = document.querySelector('.about-me-text')
const aboutMeTextContent = 'I am a coder in JavaScript and Python and their frameworks, designing websites and games. I also study Cyber Security.'
Array.from(aboutMeTextContent).forEach(char => {
    const span = document.createElement('span')
    span.textContent = char
    aboutMeText.appendChild(span)
    span.addEventListener('mouseenter', (e) => {
        e.target.style.animation = 'aboutMeTextAnim 10s infinite'
    })
})
