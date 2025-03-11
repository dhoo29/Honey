document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const date = document.getElementById('date').value;

    if (name1 && name2 && date) {
        localStorage.setItem('name1', name1);
        localStorage.setItem('name2', name2);
        localStorage.setItem('date', date);
        window.location.href = 'persentase.html';
    }
});