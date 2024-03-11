const zxHeader = document.getElementById("zxHeader");
const zxHamburgerMenu = document.getElementById("zxHamburgerMenu");
const zxNavbar = document.getElementById("zxNavbar");

zxHamburgerMenu.onclick = () => {
    zxHeader.classList.toggle("zxSliders");
};

document.addEventListener("click", (e) => {
    if (!zxHamburgerMenu.contains(e.target) && !zxNavbar.contains(e.target)) {
        zxHeader.classList.remove("zxSliders")
    }
});

const ZXLinks = document.querySelectorAll("ZXLink");
ZXLinks.forEach((ZXLinks) => {
    ZXLinks.addEventListener("click", (e) => {
        zxHeader.classList.remove("zxSliders");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const h4Element = document.getElementById('dynamicText');

    if (h4Element) {
        const skills = ['Junior Web Developer', 'Finishing Operator', 'Undergraduate Management at Indonesia Open University'];
        let index = 0;
        let typing = true;
        let typedText = '';

        function typeSkill() {
            let text = skills[index];
            let chars = text.split('');

            function type() {
                if (chars.length > 0) {
                    typedText += chars.shift();
                    h4Element.innerHTML = `<span class="typing-effect">${typedText}</span>`;
                    setTimeout(type, 100);  // Waktu antara setiap karakter
                } else {
                    typing = false;
                    setTimeout(erase, 1000);  // Tunggu sejenak sebelum menghapus
                }
            }

            function erase() {
                if (typedText.length > 0) {
                    typedText = typedText.slice(0, -1);
                    h4Element.innerHTML = `<span class="typing-effect">${typedText}</span>`;
                    setTimeout(erase, 50);  // Waktu antara setiap karakter dihapus
                } else {
                    typing = true;
                    index = (index + 1) % skills.length;
                    setTimeout(typeSkill, 1000);  // Tunggu sejenak sebelum memulai kalimat baru
                }
            }

            if (typing) {
                type();
            } else {
                erase();
            }
        }

        typeSkill();
    }
});
