$(document).ready(function() {
    console.log('=== FLIPCLOCK DEBUG ===');
    
    // Получаем точное текущее время
    var initialTime = new Date();
    var initialTotalSeconds = initialTime.getHours() * 3600 + initialTime.getMinutes() * 60 + initialTime.getSeconds();
    
    console.log('Initial time:', initialTime.getHours() + ':' + initialTime.getMinutes() + ':' + initialTime.getSeconds());
    console.log('Initial total seconds:', initialTotalSeconds);
    
    // Создаем flipclock с текущим временем
    var clock = new FlipClock($('.clock'), initialTotalSeconds, {
        clockFace: 'TwentyFourHourClock',
        autoStart: false, // ВАЖНО: false!
        showSeconds: true,
        countdown: false
    });
    
    console.log('FlipClock created, autoStart: false');
    
    // ОСТАНАВЛИВАЕМ ВСЕ внутренние таймеры flipclock
    if (clock.stop) {
        clock.stop();
        console.log('Clock stopped');
    }
    
    // Обнуляем интервалы
    if (clock.interval) {
        clearInterval(clock.interval);
        clock.interval = null;
    }
    
    // Переменные для контроля
    var lastSeconds = initialTotalSeconds;
    var updateCount = 0;
    
    // Функция точного обновления
    function updateTime() {
        var now = new Date();
        var currentTotalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        
        // Обновляем только если секунда изменилась
        if (currentTotalSeconds !== lastSeconds) {
            updateCount++;
            
            // Обновляем дату
            $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
            
            // Обновляем время
            clock.setTime(currentTotalSeconds);
            lastSeconds = currentTotalSeconds;
            
            console.log('Update ' + updateCount + ':', 
                       now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(),
                       'Total seconds:', currentTotalSeconds);
        }
    }
    
    // Запускаем с высокой частотой проверки, но обновляем только при изменении
    setInterval(updateTime, 50); // Проверяем каждые 50ms
    
    // Первое обновление
    updateTime();
    
    console.log('=== FLIPCLOCK READY ===');
});
