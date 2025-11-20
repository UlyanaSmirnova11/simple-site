$(document).ready(function() {
    // Функция обновления всего
    function updateAll() {
        var now = new Date();
        
        // Обновляем дату
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
        
        // Вычисляем общее время в секундах
        var totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        
        // Устанавливаем время
        $('.clock').FlipClock(totalSeconds, {
            clockFace: 'TwentyFourHourClock',
            autoStart: false,
            showSeconds: true
        });
    }
    
    // Обновляем каждую секунду
    setInterval(updateAll, 1000);
    updateAll(); // Первый запуск
});
