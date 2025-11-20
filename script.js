$(document).ready(function() {
    console.log('=== CUSTOM CLOCK SOLUTION ===');
    
    function updateAllDisplays() {
        var now = new Date();
        
        // Обновляем дату
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
        
        // Получаем компоненты времени
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        
        // Форматируем в 2 цифры
        var timeString = 
            hours.toString().padStart(2, '0') + ':' + 
            minutes.toString().padStart(2, '0') + ':' + 
            seconds.toString().padStart(2, '0');
        
        console.log('Current time:', timeString);
        
        // ОБНОВЛЯЕМ FLIPCLOCK ВРУЧНУЮ
        updateFlipClockDigits(hours, minutes, seconds);
    }
    
    function updateFlipClockDigits(hours, minutes, seconds) {
        // Преобразуем время в отдельные цифры
        var hourStr = hours.toString().padStart(2, '0');
        var minuteStr = minutes.toString().padStart(2, '0');
        var secondStr = seconds.toString().padStart(2, '0');
        
        // Находим все flip-элементы и обновляем их
        var flipElements = $('.flip-clock-divider, .flip-clock-piece');
        
        // Альтернативный подход - обновляем через CSS/HTML
        $('.clock').html(`
            <div style="display: flex; justify-content: center; font-size: 48px; font-family: monospace;">
                <span>${hourStr}</span>:<span>${minuteStr}</span>:<span>${secondStr}</span>
            </div>
        `);
    }
    
    // Обновляем каждую секунду
    setInterval(updateAllDisplays, 1000);
    updateAllDisplays(); // Первое обновление
    
    console.log('=== CUSTOM CLOCK READY ===');
});
