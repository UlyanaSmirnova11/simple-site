$(document).ready(function() {
    console.log('=== FIXED FLIPCLOCK V1 ===');
    
    var clock;
    
    function initClock() {
        // Очищаем контейнер
        $('.clock').empty();
        
        // Получаем текущее время
        var now = new Date();
        var totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        
        console.log('Initializing clock with:', now.toLocaleTimeString(), 'Total seconds:', totalSeconds);
        
        // Создаем новый FlipClock
        clock = new FlipClock($('.clock'), totalSeconds, {
            clockFace: 'TwentyFourHourClock',
            autoStart: false,
            showSeconds: true,
            countdown: false
        });
        
        // Агрессивная остановка
        if (clock.stop) clock.stop();
        if (clock.interval) clearInterval(clock.interval);
        if (clock._interval) clearInterval(clock._interval);
        clock.running = false;
    }
    
    function updateClock() {
        var now = new Date();
        var currentTotalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        
        // Обновляем дату
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
        
        // Полностью пересоздаем часы каждую минуту (или при сбое)
        if (now.getSeconds() === 0) {
            console.log('Minute change - recreating clock');
            initClock();
        } else {
            // Просто обновляем время
            if (clock && clock.setTime) {
                clock.setTime(currentTotalSeconds);
            }
        }
        
        console.log('Update:', now.toLocaleTimeString(), 'Total seconds:', currentTotalSeconds);
    }
    
    // Инициализация
    initClock();
    
    // Обновление каждую секунду
    setInterval(updateClock, 1000);
});
