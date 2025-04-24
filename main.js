function Soat() {
    const hozir = new Date();
    const soat = String(hozir.getHours())
    const daqiqa = String(hozir.getMinutes())
    const sekund = String(hozir.getSeconds())
    document.getElementById('soat').textContent = `${soat}:${daqiqa}:${sekund}`;
}


Soat();