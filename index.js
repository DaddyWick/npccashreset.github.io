window.onload = async(event) => {
    const startButtons = document.querySelectorAll('.btn-start')
    const resetButtons = document.querySelectorAll('.btn-reset')
    startButtons.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            const id = btn.id
            const npc = id.split('_')[1]
            startTimer()
        })
    })
    await loadTimersFromLocalStorage()
    updateTime()
}
// npc -> seconds only that are on cd
const dataSeconds = {}

const milisecondsInAWeek = 604800000

const secondsInADay = 86400
const secondsInAHour = 3600
const secondsInAMinute = 60

let test =86410

updateTime = async() => {
    setInterval(async() =>{
        console.log(await convertSecondsToHuman(test))
    }, 1000)
}

convertSecondsToHuman = async(seconds) => {
    const d = Math.floor(seconds / secondsInADay)
    seconds %= secondsInADay
    const h = Math.floor(seconds / secondsInAHour)
    seconds %= secondsInAHour
    const m = Math.floor(seconds / secondsInAMinute)
    seconds %= secondsInAMinute
    test--
    if (test == 0) test = 0
    return `${d}d ${h}h ${m}m ${seconds}s`
}

startTimer = async(npc, dateTime = (Date.now() + milisecondsInAWeek)) => {
    
}

saveTimerToLocalStorage = async(npc, dateTime) => {
    const storageData = JSON.parse(localStorage.getItem('npcTimers'))
    storageData[npc] = dateTime
    localStorage.setItem('npcTimers', JSON.stringify(storageData))
}

loadTimersFromLocalStorage = async() => {
    const storageData = localStorage.getItem('npcTimers')
    if (!storageData) {
        localStorage.setItem(JSON.stringify({}))
        return {}
    }
    data = JSON.parse(storageData)
    return
}