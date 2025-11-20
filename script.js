$(document).ready(function() {
    // Получаем точное текущее время
    var now = new Date();
    var startTime = now.getTime(); // timestamp в миллисекундах
    
    // Создаем flipclock с нулевым временем
    var clock = new FlipClock($('.clock'), 0, {
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
    
    // Функция обновления времени
    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        
        // Вычисляем общее время в секундах
        var totalSeconds = hours * 3600 + minutes * 60 + seconds;
        
        // Устанавливаем точное время
        clock.setTime(totalSeconds);
    }
    
    // Обновляем сразу
    updateDate();
    updateTime();
    
    // Обновляем время каждую секунду
    setInterval(function() {
        updateDate();
        updateTime();
    }, 1000);
});
