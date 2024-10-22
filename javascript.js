// Fungsi untuk mengupdate lebar skill bar berdasarkan data-percent
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
    });
}

// Memanggil fungsi saat halaman dimuat
window.addEventListener('load', animateSkillBars);










// Modal Logic
var modal = document.getElementById("educationModal");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

// Ambil semua elemen dengan kelas "education-item"
var educationItems = document.querySelectorAll(".education-item");

// Setiap kali item pendidikan diklik, buka modal dan tampilkan gambar besar
educationItems.forEach(function(item) {
    item.addEventListener("click", function() {
        var imgSrc = this.querySelector("img").src;
        modal.style.display = "block";
        modalImg.src = imgSrc;
        captionText.innerHTML = this.querySelector(".education-title").innerText;
    });
});

// Menutup modal ketika klik pada tombol close (x)
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};









// Ambil semua elemen dengan kelas "education-item"
var educationItems = document.querySelectorAll(".education-item");

// Setiap kali item pendidikan diklik, toggle kelas 'active' untuk menampilkan border
educationItems.forEach(function(item) {
    item.addEventListener("click", function() {
        // Hapus kelas 'active' dari semua item
        educationItems.forEach(function(otherItem) {
            otherItem.classList.remove("active");
        });

        // Toggle kelas 'active' pada item yang diklik
        this.classList.toggle("active");
    });
});







// Menambahkan event listener ke semua link proyek
var projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah aksi default (untuk demo saja)
        window.open(this.href, '_blank'); // Membuka proyek di tab baru
    });
});













document.querySelectorAll('.education-box').forEach(function(box) {
    box.addEventListener('click', function() {
        // Menghapus kelas active dari semua kotak
        document.querySelectorAll('.education-box').forEach(function(innerBox) {
            innerBox.classList.remove('active');
        });
        
        // Menambahkan kelas active pada kotak yang diklik
        this.classList.add('active');
    });
});






