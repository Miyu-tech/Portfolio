const wakeUpBtn = document.getElementById('wakeUpBtn');
const message = document.getElementById('message');
const stickerBoard = document.getElementById('stickerBoard');

let wakeUpDays = JSON.parse(localStorage.getItem("wakeUpDays")) || [];

const stickers = [
    "https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@14.0.0/color/72x72/1F340.png", // 🍀
    "https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@14.0.0/color/72x72/1F33C.png", // 🌸
    "https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji@14.0.0/color/72x72/1F381.png"  // 🎁
];

const getToday = () => {
    const now = new Date();
    return now.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
};

function renderStickers() {
    stickerBoard.innerHTML = "";
    wakeUpDays.forEach((day, index) => {
        const sticker = document.createElement("div");
        sticker.classList.add("sticker");

        const img = document.createElement("img");
        img.src = stickers[index % stickers.length];
        img.alt = "Sticker";

        const dateText = document.createElement("div");
        dateText.textContent = day;

        sticker.appendChild(img);
        sticker.appendChild(dateText);
        stickerBoard.appendChild(sticker);
    });
}

wakeUpBtn.addEventListener("click", () => {
    const today = getToday();

    if (!wakeUpDays.includes(today)) {
        wakeUpDays.push(today);
        localStorage.setItem("wakeUpDays", JSON.stringify(wakeUpDays));
        renderStickers();
    }
    message.classList.remove("hidden");
});

renderStickers();

