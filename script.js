$(document).ready(function() {
    console.log('=== SIMPLE FLIP CLOCK ===');
    
    // Очищаем контейнер
    $('.clock').empty();
    
    function createFlipClock() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        
        var clockHTML = `
            <div class="flip-clock">
                <div class="flip-digit" data-digit="${hours[0]}">${hours[0]}</div>
                <div class="flip-digit" data-digit="${hours[1]}">${hours[1]}</div>
                <div class="separator">:</div>
                <div class="flip-digit" data-digit="${minutes[0]}">${minutes[0]}</div>
                <div class="flip-digit" data-digit="${minutes[1]}">${minutes[1]}</div>
                <div class="separator">:</div>
                <div class="flip-digit" data-digit="${seconds[0]}">${seconds[0]}</div>
                <div class="flip-digit" data-digit="${seconds[1]}">${seconds[1]}</div>
            </div>
        `;
        
        $('.clock').html(clockHTML);
    }
    
    // Добавляем стили для flip-эффекта
    $('head').append(`
        <style>
            .flip-clock {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
            }
            .flip-digit {
                width: 40px;
                height: 60px;
                background: #000;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                font-weight: bold;
                position: relative;
                overflow: hidden;
            }
            .flip-digit.flipping {
                animation: flip 0.6s ease-in-out;
            }
            @keyframes flip {
                0% { transform: rotateX(0deg); }
                50% { transform: rotateX(-90deg); }
                100% { transform: rotateX(0deg); }
            }
            .separator {
                font-size: 20px;
                font-weight: bold;
            }
        </style>
    `);
    
    function updateClock() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
        
        var digits = $('.flip-digit');
        if (digits.length === 6) {
            [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]].forEach((digit, index) => {
                var digitElement = digits[index];
                if ($(digitElement).attr('data-digit') !== digit) {
                    $(digitElement).addClass('flipping');
                    $(digitElement).attr('data-digit', digit);
                    $(digitElement).text(digit);
                    setTimeout(() => {
                        $(digitElement).removeClass('flipping');
                    }, 600);
                }
            });
        }
    }
    
    createFlipClock();
    setInterval(updateClock, 1000);
});
