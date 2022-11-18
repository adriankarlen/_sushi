const setDateTime = () => {
    const date = new Date();
    let today = date.toDateString();
    let time = date.toLocaleTimeString();
    document.getElementById('date-time').innerHTML =
        '<p id="date">' + today + '</p><p id="time">' + time + '</p>';
    setTimeout(setDateTime, 1000);
};

export { setDateTime };
