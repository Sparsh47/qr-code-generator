const wrapper = document.querySelector(".wrapper"),
    generateBtn = wrapper.querySelector(".form button"),
    qrInput = wrapper.querySelector(".form input"),
    qrImg = wrapper.querySelector(".qr-code img")

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrValue}&format=png`;
    wrapper.classList.add("active");
})