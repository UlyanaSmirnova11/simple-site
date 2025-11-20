$(document).ready(function() {
    // Создаем flipclock
    var clock = $('#clock').FlipClock({
        clockFace: 'TwentyFourHourClock',
        autoStart: true,
        showSeconds: true
    });
    
    // Функция обновления даты
    function updateDate() {
        var now = new Date();
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
    }
    
    // Обновляем время каждую секунду
    setInterval(function() {
        var now = new Date();
        var totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        clock.setTime(totalSeconds);
        updateDate();
    }, 1000);
    
    updateDate();
});
