$(document).ready(function() {
    console.log('=== ADVANCED FLIP CLOCK WITH FLIP ANIMATION ===');
    
    // Очищаем контейнер
    $('.clock').empty();
    
    // Создаем кастомные flip-часы с анимацией
    function createAdvancedFlipClock() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        
        var clockHTML = `
            <div class="advanced-flip-clock">
                <div class="flip-digit-container">
                    <div class="flip-digit" data-digit="${hours[0]}">
                        <div class="flip-card">
                            <div class="top">${hours[0]}</div>
                            <div class="bottom">${hours[0]}</div>
                        </div>
                    </div>
                    <div class="flip-digit" data-digit="${hours[1]}">
                        <div class="flip-card">
                            <div class="top">${hours[1]}</div>
                            <div class="bottom">${hours[1]}</div>
                        </div>
                    </div>
                </div>
                <div class="separator">:</div>
                <div class="flip-digit-container">
                    <div class="flip-digit" data-digit="${minutes[0]}">
                        <div class="flip-card">
                            <div class="top">${minutes[0]}</div>
                            <div class="bottom">${minutes[0]}</div>
                        </div>
                    </div>
                    <div class="flip-digit" data-digit="${minutes[1]}">
                        <div class="flip-card">
                            <div class="top">${minutes[1]}</div>
                            <div class="bottom">${minutes[1]}</div>
                        </div>
                    </div>
                </div>
                <div class="separator">:</div>
                <div class="flip-digit-container">
                    <div class="flip-digit" data-digit="${seconds[0]}">
                        <div class="flip-card">
                            <div class="top">${seconds[0]}</div>
                            <div class="bottom">${seconds[0]}</div>
                        </div>
                    </div>
                    <div class="flip-digit" data-digit="${seconds[1]}">
                        <div class="flip-card">
                            <div class="top">${seconds[1]}</div>
                            <div class="bottom">${seconds[1]}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        $('.clock').html(clockHTML);
    }
    
    // Добавляем стили для flip-эффекта
    $('head').append(`
        <style>
            .advanced-flip-clock {
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Arial', sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            }
            
            .flip-digit-container {
                display: flex;
                gap: 3px;
            }
            
            .flip-digit {
                position: relative;
                width: 50px;
                height: 80px;
                perspective: 400px;
            }
            
            .flip-card {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .flip-digit.flipping .flip-card {
                transform: rotateX(-90deg);
            }
            
            .top, .bottom {
                position: absolute;
                width: 100%;
                height: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #2c3e50;
                color: white;
                font-size: 36px;
                font-weight: bold;
                overflow: hidden;
                backface-visibility: hidden;
            }
            
            .top {
                top: 0;
                border-radius: 8px 8px 0 0;
                border-bottom: 1px solid #34495e;
                transform-origin: bottom;
            }
            
            .bottom {
                bottom: 0;
                border-radius: 0 0 8px 8px;
                transform-origin: top;
                transform: rotateX(180deg);
            }
            
            .top:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 1px;
                background: rgba(255,255,255,0.1);
            }
            
            .separator {
                margin: 0 15px;
                font-size: 32px;
                font-weight: bold;
                color: white;
                animation: pulse 1s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { 
                    opacity: 1;
                    transform: scale(1);
                }
                50% { 
                    opacity: 0.7;
                    transform: scale(1.1);
                }
            }
            
            /* Тень для глубины */
            .flip-digit:before {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 5%;
                width: 90%;
                height: 10px;
                background: rgba(0,0,0,0.3);
                border-radius: 50%;
                filter: blur(4px);
                z-index: -1;
            }
        </style>
    `);
    
    // Функция для анимации переворота цифры
    function flipDigit(digitElement, newValue) {
        var currentValue = digitElement.getAttribute('data-digit');
        
        if (currentValue !== newValue) {
            digitElement.classList.add('flipping');
            digitElement.setAttribute('data-digit', newValue);
            
            setTimeout(() => {
                var top = digitElement.querySelector('.top');
                var bottom = digitElement.querySelector('.bottom');
                top.textContent = newValue;
                bottom.textContent = newValue;
                digitElement.classList.remove('flipping');
            }, 300);
        }
    }
    
    function updateAdvancedClock() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        
        $('#date').text('Дата: ' + now.toLocaleDateString('ru-RU'));
        
        // Находим все цифровые элементы
        var digitElements = $('.flip-digit');
        
        if (digitElements.length === 6) {
            // Анимируем каждую цифру
            flipDigit(digitElements[0], hours[0]);
            flipDigit(digitElements[1], hours[1]);
            flipDigit(digitElements[2], minutes[0]);
            flipDigit(digitElements[3], minutes[1]);
            flipDigit(digitElements[4], seconds[0]);
            flipDigit(digitElements[5], seconds[1]);
        } else {
            createAdvancedFlipClock();
        }
        
        console.log('Update:', now.toLocaleTimeString());
    }
    
    // Инициализация
    createAdvancedFlipClock();
    
    // Обновление каждую секунду
    setInterval(updateAdvancedClock, 1000);
    
    console.log('=== ADVANCED FLIP CLOCK READY ===');
});
