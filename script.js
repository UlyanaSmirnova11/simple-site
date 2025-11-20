$(document).ready(function() {
    console.log('=== FLIPCLOCK DEBUG ===');
    
    // Получаем точное текущее время
    var initialTime = new Date();
    var initialTotalSeconds = initialTime.getHours() * 3600 + initialTime.getMinutes() * 60 + initialTime.getSeconds();
    
    console.log('Initial time:', initialTime.toLocaleTimeString());
    console.log('Initial total seconds:', initialTotalSeconds);
    
    // Создаем flipclock с текущим временем
    var clock = new FlipClock($('.clock'), initialTotalSeconds, {
        clockFace: 'TwentyFourHourClock',
        autoStart: false,
        showSeconds: true,
        countdown: false
    });
    
    console.log('FlipClock created, autoStart: false');
    
    // АГРЕССИВНАЯ ОСТАНОВКА всех внутренних процессов
    if (typeof clock.stop === 'function') {
        clock.stop();
    }
    
    // Очищаем все возможные интервалы
    if (clock.interval) {
        clearInterval(clock.interval);
        clock.interval = null;
    }
    
    if (clock._interval) {
        clearInterval(clock._interval);
        clock._interval = null;
    }
    
    // Дополнительные меры для остановки
    clock.running = false;
    
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
            
            // ОСТАНАВЛИВАЕМ перед обновлением (дополнительная защита)
            if (typeof clock.stop === 'function') {
                clock.stop();
            }
            
            // Обновляем время
            clock.setTime(currentTotalSeconds);
            lastSeconds = currentTotalSeconds;
            
            console.log('Update ' + updateCount + ':', 
                       now.toLocaleTimeString(),
                       'Total seconds:', currentTotalSeconds);
            
            // Сразу останавливаем после обновления
            if (typeof clock.stop === 'function') {
                clock.stop();
            }
        }
    }
    
    // Более редкая проверка - достаточно 200ms
    setInterval(updateTime, 200);
    
    // Первое обновление
    updateTime();
    
    console.log('=== FLIPCLOCK READY ===');
});
