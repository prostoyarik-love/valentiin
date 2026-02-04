const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const question = document.getElementById("question");
const subtext = document.getElementById("subtext");

let noClicks = 0;

noBtn.onclick = function() {
    noClicks++;

    subtext.textContent = "Ты серьёзно? 😐";

    // уменьшаем кнопку "Нет"
    noBtn.style.transform = "scale(" + Math.max(0.3, 1 - noClicks * 0.2) + ")";

    // увеличиваем кнопку "Да"
    yesBtn.style.transform = "scale(" + (1 + noClicks * 0.2) + ")";

    if (noClicks >= 4) {
        noBtn.disabled = true;
        subtext.textContent = "Ладно, выбора больше нет 😏";
    }
};

yesBtn.onclick = function() {
    question.textContent = "Я так и знал 😍";
    subtext.textContent = "Ты сделала меня самым счастливым ❤️";

    yesBtn.disabled = true;
    noBtn.disabled = true;
};
