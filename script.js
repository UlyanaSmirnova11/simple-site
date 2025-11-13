function updateDateTime() {
    const now = new Date();
    
    // Форматирование даты
    const dateString = now.toLocaleDateString('ru-RU');
    
    // Форматирование времени
    const timeString = now.toLocaleTimeString('ru-RU');
    
    // Обновление элементов на странице
    document.getElementById('date').textContent = 'Дата: ' + dateString;
    document.getElementById('time').textContent = 'Время: ' + timeString;
}

// Обновляем время сразу при загрузке
updateDateTime();

// Обновляем время каждую секунду
setInterval(updateDateTime, 1000);