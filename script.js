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
        autoStart: true,
        showSeconds: true,
        countdown: false
    });
    
    // Функция обновления даты
    function updateDate() {
        var now = new Date();
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
    }
    
    // Обновляем время каждую секунду
    setInterval(function() {
        var currentTime = getCurrentTimeInSeconds();
        clock.setTime(currentTime);
        updateDate();
    }, 1000);
    
    // Первое обновление даты
    updateDate();
});
