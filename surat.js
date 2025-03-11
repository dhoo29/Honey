document.addEventListener("DOMContentLoaded", function() {
    const name1 = localStorage.getItem('name1') || 'Dia';
    const name2 = localStorage.getItem('name2') || 'Kamu';
    document.getElementById('coupleNames').innerText = `${name1} ❤️ ${name2}`;

    document.getElementById('submitButton').addEventListener("click", function() {
        let percentage = document.getElementById("lovePercentage").value;

        if (percentage === "" || percentage < 0 || percentage > 100) {
            alert("Masukkan angka antara 0 hingga 100!");
            return;
        }

        let recipientEmail = "ridomaulana193@gmail.com"; // Ganti dengan email pribadi Ridho Maulana
        let subject = `Persentase Cinta dari ${name1} untuk ${name2}`;
        let body = `Halo Ridho Maulana,\n\n${name1} telah menentukan persentase cintanya kepada ${name2} sebesar ${percentage}%. \n\nSalam Romantis! ❤️`;

        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setTimeout(() => {
            window.location.href = "surat.html";
        }, 3000);
    });
});