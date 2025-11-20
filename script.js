$(document).ready(function() {
    // Получаем точное текущее время
    var now = new Date();
    var currentTimeInSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    
    // Создаем flipclock с текущим временем
    var clock = new FlipClock($('.clock'), currentTimeInSeconds, {
        clockFace: 'TwentyFourHourClock',
        autoStart: false, // ВЫКЛЮЧАЕМ автообновление
        showSeconds: true,
        countdown: false
    });
    
    // Функция обновления даты
    function updateDate() {
        var now = new Date();
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
    }
    
    // Переменная для отслеживания предыдущего времени
    var previousSeconds = currentTimeInSeconds;
    
    // Функция обновления времени
    function updateTime() {
        var now = new Date();
        var currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        
        // Обновляем только если время изменилось
        if (currentSeconds !== previousSeconds) {
            clock.setTime(currentSeconds);
            previousSeconds = currentSeconds;
        }
    }
    
    // Обновляем дату сразу
    updateDate();
    
    // Проверяем время каждые 100ms, но обновляем только при изменении секунды
    setInterval(function() {
        updateTime();
        updateDate();
    }, 100);
});
