function setClock() {
    const now = new Date(); // 現在の日時を取得.dataはクラス。
    const hours = now.getHours(); // 現在の時を取得
    const minutes = now.getMinutes(); // 現在の分を取得
    const seconds = now.getSeconds(); // 現在の秒を取得

    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // 時針の角度を計算
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // 分針の角度を計算
    const secondsDegrees = ((seconds / 60) * 360) + 90; // 秒針の角度を計算

    document.querySelector('.hour_hand').style.transform = `rotate(${hoursDegrees}deg)`; // 時針の回転を適用
    document.querySelector('.minute_hand').style.transform = `rotate(${minutesDegrees}deg)`; // 分針の回転を適用
    document.querySelector('.second_hand').style.transform = `rotate(${secondsDegrees}deg)`; // 秒針の回転を適用
}

setInterval(setClock, 1000); // 1秒ごとにsetClock関数を実行

setClock(); // ページロード時に即座に時計を初期設定