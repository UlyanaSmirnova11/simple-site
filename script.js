$(document).ready(function() {
    // Получаем точное текущее время
    var now = new Date();
    var currentTime = now.getTime(); // timestamp в миллисекундах
    
    // Вычисляем начальное время в секундах
    var startSeconds = Math.floor(currentTime / 1000);
    
    // Создаем flipclock
    var clock = new FlipClock($('.clock'), startSeconds, {
        clockFace: 'TwentyFourHourClock',
        autoStart: false, // ВАЖНО: false!
        showSeconds: true,
        countdown: false
    });
    
    // Функция обновления даты
    function updateDate() {
        var now = new Date();
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
    }
    
    // Функция точного обновления времени
    function updateTime() {
        var now = new Date();
        var currentSeconds = Math.floor(now.getTime() / 1000);
        clock.setTime(currentSeconds);
    }
    
    // Инициализация
    updateDate();
    updateTime();
    
    // Точный интервал обновления
    setInterval(function() {
        updateDate();
        updateTime();
    }, 1000);
});
