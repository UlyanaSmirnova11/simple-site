$(document).ready(function() {
    // Функция для получения текущего времени в секундах
    function getCurrentTimeInSeconds() {
        var now = new Date();
        return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    }
    
    // Создаем flipclock с текущим временем
    var currentTime = getCurrentTimeInSeconds();
    var clock = new FlipClock($('.clock'), currentTime, {
        clockFace: 'TwentyFourHourClock',
        autoStart: false, // ВЫКЛЮЧАЕМ автостарт!
        showSeconds: true,
        countdown: false
    });
    
    // Функция обновления даты и времени
    function updateDateTime() {
        var now = new Date();
        
        // Обновляем дату
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
        
        // Обновляем время (только если изменилась секунда)
        var currentTime = getCurrentTimeInSeconds();
        clock.setTime(currentTime);
    }
    
    // ТОЛЬКО обновляем время каждую секунду (не даем flipclock самому обновляться)
    setInterval(updateDateTime, 1000);
    
    // Первое обновление
    updateDateTime();
});
