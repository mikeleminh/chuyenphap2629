// ================================
// Chuyên Pháp K33
// script.js
// ================================


// ================================
// Highlight menu hiện tại
// ================================

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});


// ================================
// Tìm kiếm thành viên
// (chỉ hoạt động ở members.html)
// ================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const members = document.querySelectorAll(".member-card");

        members.forEach(member => {

            const text = member.innerText.toLowerCase();

            if (text.includes(keyword)) {

                member.style.display = "block";

            } else {

                member.style.display = "none";

            }

        });

    });

}


// ================================
// Hiệu ứng xuất hiện khi cuộn
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card, .feature, .member-card, .news-card, .timeline-content, .value-card").forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});


// ================================
// Nút Back To Top
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ================================
// Footer tự cập nhật năm
// ================================

const year = new Date().getFullYear();

document.querySelectorAll("footer small").forEach(item=>{

    item.innerHTML = `© ${year}`;

});
