const modeBtn = document.getElementById('mode-btn')
const bodyEl = document.getElementsByClassName('home-body')
const kkImg = document.getElementsByClassName('kk-img')

modeBtn.addEventListener('click', handleModeChange)

function handleModeChange(event) {
    if (event.target.innerHTML === 'DAY') {
        document.body.style.backgroundImage = "url('https://i.imgur.com/mSODwDU.jpg')"
        modeBtn.innerHTML = 'NIGHT'
        kkImg[0].src = 'https://i.imgur.com/kRorks5.png'
        document.getElementById('home-headline-and-description').setAttribute('class', 'background-readability')
        document.getElementById('mode-btn').style.color = '#4E6683'
        document.getElementById('mode-btn').style.borderColor = '#4E6683'
    } else {
        document.body.style.backgroundImage = "url('https://i.imgur.com/cFs1PHv.jpg')"
        modeBtn.innerHTML = 'DAY'
        kkImg[0].src = 'https://i.imgur.com/yBD4epQ.png'
        console.log(document.getElementsByClassName('home-headline-and-description')[0])
        document.getElementById('home-headline-and-description').removeAttribute('class', 'background-readability')
        document.getElementById('mode-btn').style.color = '#F6F3E4'
        document.getElementById('mode-btn').style.borderColor = '#F6F3E4'
    }
}
