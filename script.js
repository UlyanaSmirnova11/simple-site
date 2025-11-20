$(document).ready(function() {
    // Функция для получения времени по Перми (UTC+5)
    function getPermTime() {
        var now = new Date();
        // Пермь = UTC+5
        var permOffset = 5 * 60 * 60 * 1000; // 5 часов в миллисекундах
        var permTime = new Date(now.getTime() + permOffset);
        return permTime;
    }
    
    // Создаем flipclock
    var clock = $('#clock').FlipClock({
        clockFace: 'TwentyFourHourClock',
        autoStart: false, // Не автостарт, будем управлять вручную
        showSeconds: true
    });
    
    // Функция обновления даты и времени
    function updateDateTime() {
        var permTime = getPermTime();
        
        // Обновляем дату
        $('#date').text('Дата: ' + permTime.toLocaleDateString('ru-RU'));
        
        // Обновляем время (правильно вычисляем секунды)
        var totalSeconds = permTime.getHours() * 3600 + 
                          permTime.getMinutes() * 60 + 
                          permTime.getSeconds();
        clock.setTime(totalSeconds);
    }
    
    // Обновляем время каждую секунду
    setInterval(updateDateTime, 1000);
    
    // Первый запуск
    updateDateTime();
});
