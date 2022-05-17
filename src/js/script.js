// 參數修改區
const countdown_name = "WorldSkills Shanghai";
const countdown_date = new Date('2022/10/12 00:00:00').getTime();


////////////// 以下為程式內容，請勿修改 //////////////

const countdown_update = () => {
    let now = new Date().getTime();

    let distance = countdown_date - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let days_small = (distance / (1000 * 60 * 60 * 24)) - days;
    days_small = Math.floor(days_small.toFixed(7) * 10000000);

    $('#countdown_days').text(days);
    $('#countdown_days_small').text(days_small);
}

const clock_update = () => {
    let now = new Date();

    let month = now.getMonth() + 1;
    let day = now.getDate();
    let week = now.getDay();
    let week_text;
    switch (week) {
        case 0:
            week_text = '週日';
            break;
        case 1:
            week_text = '週一';
            break;
        case 2:
            week_text = '週二';
            break;
        case 3:
            week_text = '週三';
            break;
        case 4:
            week_text = '週四';
            break;
        case 5:
            week_text = '週五';
            break;
        case 6:
            week_text = '週六';
            break;
    }
    let hour = now.getHours();
    let hour_text = "上午";
    if(hour > 12) {
        hour -= 12;
        hour_text = "下午";
    }
    let minute = now.getMinutes();
    let minute_text = minute.toString().padStart(2, '0');

    let date = month.toString() + "月" + day.toString() + "日" +
                " " + week_text +
                " " + hour_text + hour.toString() + ":" + minute_text;

    $('#clock_text').text(date);
}

$(document).ready(() => {
    $('#countdown_name').text(countdown_name);

    countdown_update();
    clock_update();

    const update_countdown = setInterval(countdown_update, 10);
    const update_clock = setInterval(clock_update, 1000);

    $(document).bind("contextmenu", (e) => {
        return false;
    });
});