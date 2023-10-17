function updateTime() {
    const timeElement = document.getElementById('clock');
    const amPmElement = document.getElementById('amPm');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Determine if it's AM or PM
    const amPm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12 || 12;

    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    timeElement.innerHTML = `<p class='clck'>${clockStr}</p>`;
    amPmElement.innerHTML = `<p>${amPm}</p>`;
    
    setTimeout(updateTime, 1000);
}
