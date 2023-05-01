const modeBtn = document.getElementById('mode-btn')
const bodyEl = document.getElementsByClassName('home-body')
const kkImg = document.getElementsByClassName('kk-img')

modeBtn.addEventListener('click', handleModeChange)

function handleModeChange(event) {
    if (event.target.innerHTML === 'Day') {
        document.body.style.backgroundImage = "url('https://i.imgur.com/mSODwDU.jpg')"
        modeBtn.innerHTML = 'Night'
        kkImg[0].src = 'https://i.imgur.com/kRorks5.png'
    } else {
        document.body.style.backgroundImage = "url('https://i.imgur.com/cFs1PHv.jpg')"
        modeBtn.innerHTML = 'Day'
        kkImg[0].src = 'https://i.imgur.com/yBD4epQ.png'
    }
}
