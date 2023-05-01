const modeBtn = document.getElementById('mode-btn')
const bodyEl = document.getElementsByClassName('home-body')

modeBtn.addEventListener('click', handleModeChange)

function handleModeChange(event) {
    if (event.target.innerHTML === 'Day') {
        document.body.style.backgroundImage = "url('https://i.imgur.com/mSODwDU.jpg')"
        modeBtn.innerHTML = 'Night'
    } else {
        document.body.style.backgroundImage = "url('https://i.imgur.com/cFs1PHv.jpg')"
        modeBtn.innerHTML = 'Day'
    }
}
