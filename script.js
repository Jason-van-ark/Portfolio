const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const modalFeatures = document.getElementById("modalFeatures");

cards.forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.dataset.title || "Over dit project";
        modalImage.src = card.dataset.image;
        modalText.textContent = card.dataset.description;

        modalFeatures.innerHTML = "";

        if (card.dataset.features) {
            const features = card.dataset.features.split(",");
            features.forEach(feature => {
                const li = document.createElement("li");
                li.textContent = feature.trim();
                modalFeatures.appendChild(li);
            });
        }
        else if (card.dataset.fallback) {
            const li = document.createElement("li");
            li.textContent = card.dataset.fallback;
            modalFeatures.appendChild(li);
        }
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});