var event, ok, wantAnswer;
var masAnswer = []; //Добавлен массив для сохранения ответов
var Answers = [works.v1_5, works.v2_5, works.v3_5, works.v4_5];

do { //Выводим первый вопрос
    ok = false;
    event = +prompt(works.v1 + works.v1_1 + works.v1_2 + works.v1_3 + works.v1_4 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.v1_0, event);
        if (event != works.v1_5) {
            alert("Вы дали не правильный ответ");
            break;
        } else {
            do {
                ok = false;
                event = +prompt(works.v2 + works.v2_1 + works.v2_2 + works.v2_3 + works.v2_4 + '-1 - Выход из игры');
                if (event == -1) {
                    break;
                } else {
                    ok = isAnswer(works.v2_0, event);
                    if (event != works.v2_5) {
                        alert("Вы дали не правильный ответ");
                        break;
                    } else {
                        do {
                            ok = false;
                            event = +prompt(works.v3 + works.v3_1 + works.v3_2 + works.v3_3 + works.v3_4 + '-1 - Выход из игры');
                            if (event == -1) {
                                break;
                            } else {
                                ok = isAnswer(works.v3_0, event);
                                if (event != works.v3_5) {
                                    alert("Вы дали не правильный ответ");
                                    break;

                                } else {
                                    do {
                                        ok = false;
                                        event = +prompt(works.v4 + works.v4_1 + works.v4_2 + works.v4_3 + works.v4_4 + '-1 - Выход из игры');
                                        if (event == -1) {
                                            break;
                                        } else {
                                            ok = isAnswer(works.v4_0, event);
                                            if (event != works.v4_5) {
                                                alert("Вы дали не правильный ответ");
                                                break;
                                            }
                                        }
                                    } while (!ok);

                                }
                            }
                        } while (!ok);



                    }
                }
            } while (!ok);



        }
    }
} while (!ok);

alert('Спасибо за игру');

do { //Запрос номера вопроса
    wantAnswer = +prompt('Введите номер вопроса, чтобы узнать, что вы ответили \nили -1, чтобы закрыть окно', -1);
    if (wantAnswer == -1) {
        break;
    } else {
        alert("На " + wantAnswer + " вопрос вы ответили: " + masAnswer[wantAnswer - 1]);
    }

} while (wantAnswer);

//------------------------------------------
function isAnswer(q, event) {

    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }

    masAnswer.push(event); //Добавим ответ в массив
    console.log(masAnswer); // Покажем его в консоли
    return true;


}