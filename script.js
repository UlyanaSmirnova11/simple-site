$(document).ready(function() {
    console.log('=== FIXED FLIPCLOCK V2 - HOURLY COUNTER ===');
    
    var now = new Date();
    var totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    
    console.log('Initial time:', now.toLocaleTimeString(), 'Total seconds:', totalSeconds);
    
    // Используем HourlyCounter вместо TwentyFourHourClock
    var clock = new FlipClock($('.clock'), totalSeconds, {
        clockFace: 'HourlyCounter',
        autoStart: false,
        showSeconds: true
    });
    
    // Останавливаем
    clock.stop();
    
    // Добавляем стили для flip-эффекта
    $('head').append(`
        <style>
            .flip-clock-wrapper ul li a div div.inn {
                animation: flip 0.6s ease-in-out;
            }
            @keyframes flip {
                0% { transform: rotateX(0deg); }
                50% { transform: rotateX(-90deg); }
                100% { transform: rotateX(0deg); }
            }
        </style>
    `);
    
    function updateClock() {
        var now = new Date();
        var currentTotalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
        clock.setTime(currentTotalSeconds);
        
        console.log('Update:', now.toLocaleTimeString());
    }
    
    setInterval(updateClock, 1000);
});
