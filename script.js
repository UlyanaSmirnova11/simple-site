$(document).ready(function() {
    // Глобальная переменная для хранения clock
    var clock;
    
    // Функция инициализации или обновления часов
    function initOrUpdateClock() {
        var now = new Date();
        var totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        
        if (!clock) {
            // Первая инициализация
            clock = new FlipClock($('.clock'), totalSeconds, {
                clockFace: 'TwentyFourHourClock',
                autoStart: false,
                showSeconds: true,
                countdown: false
            });
        } else {
            // Обновление существующих часов
            clock.setTime(totalSeconds);
        }
    }
    
    // Функция обновления даты
    function updateDate() {
        var now = new Date();
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
    }
    
    // Основная функция обновления
    function updateAll() {
        updateDate();
        initOrUpdateClock();
    }
    
    // Запускаем сразу
    updateAll();
    
    // Обновляем каждую секунду
    setInterval(updateAll, 1000);
});
