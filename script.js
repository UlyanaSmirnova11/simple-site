let clockHours, clockMinutes, clockSeconds;

function initClocks() {
    clockHours = new FlipClock(document.getElementById('clock-hours'), 0, {
        clockFace: 'HourCounter',
        autoStart: false
    });
    
    clockMinutes = new FlipClock(document.getElementById('clock-minutes'), 0, {
        clockFace: 'MinuteCounter', 
        autoStart: false
    });
    
    clockSeconds = new FlipClock(document.getElementById('clock-seconds'), 0, {
        clockFace: 'SecondCounter',
        autoStart: false
    });
}

function updateDateTime() {
    const now = new Date();
    
    const dateString = now.toLocaleDateString('ru-RU');
    
    document.getElementById('date').textContent = 'Дата: ' + dateString;
    
    updateFlipClock(now);
}

function updateFlipClock(now) {
    const hours = now.getHours();
    const minutes = now.getMinutes(); 
    const seconds = now.getSeconds();
    
    if (clockHours) {
        clockHours.setTime(hours);
    }
    if (clockMinutes) {
        clockMinutes.setTime(minutes);
    }
    if (clockSeconds) {
        clockSeconds.setTime(seconds);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initClocks();
    updateDateTime();
    
    // Обновляем время каждую секунду
    setInterval(updateDateTime, 1000);
});
