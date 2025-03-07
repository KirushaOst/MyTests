document.addEventListener('DOMContentLoaded', function () {
    console.log('Страница готова епта')

    const input = document.querySelector('#input-id');

    let inputTextContent = `Пример с input`;
    input.textContent = inputTextContent;
    console.log(input.textContent);
    const countSymb = document.querySelector('.count-symb');

    const lengthString = (string) => {
        return string.length;
    };


    input.addEventListener('input', (event) => {
        if (lengthString(event.target.value) < 6) {
            console.log(input.textContent);
            input.id = 'inputError';
            countSymb.textContent = `Введено менее 6 символов (${lengthString(event.target.value)} символов)`;
        }
        else if (lengthString(event.target.value) > 40) {
            input.id = 'inputError';
            countSymb.textContent = `Введено более 40 символов`;
        }
        else if (6 < lengthString(event.target.value) < 40){
            input.id = 'inputSuccess';
            countSymb.textContent = ``;
        }
        else if (lengthString(event.target.value) === 0) {
            inputTextContent = `Пример с input`
        }
    });



    const button = document.getElementById('button');
    button.addEventListener('click', (e) => {
        changeTextColor();
    });

    const listColors = [
        {active: false, color: 'green'},
        {active: false, color: 'blue'},
        {active: false, color: 'red'},
        {active: false, color: 'yellow'},
        {active: false, color: 'brown'},
        {active: false, color: 'purple'}
    ];

    const textElements = document.querySelectorAll('.color-change');

    function changeTextColor() {
        if (listColors.every(({active}) => active)) {
            listColors.forEach((color, index) => {
                textElements[index].classList.remove(color.color);
                color.active = false;
            });
            return;
        }


        listColors.some((color, index) => {
            if (!color.active) {
                textElements[index].classList.add(color.color);
                color.active = true;
                return true;
            }
        });
    };


    const mouseMoveZone = document.getElementById('mouseMove'); /* сохранение элемента в const */
    const textForMoveZone = mouseMoveZone.querySelector('p');

    mouseMoveZone.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        // console.log(event);

        textForMoveZone.textContent = `Координаты мыши в это блоке: x = ${x}, y = ${y}`;
    });

    mouseMoveZone.addEventListener('mouseleave', () => {
        textForMoveZone.textContent = `Мышь за пределами блока`;
    });


    const listClubs = [
        {
            name: 'Барселона',
            people: [
                'Гави',
                'Педри',
                'Щесны',
                'Ямаль',
            ],
            logo: 'https://upload.wikimedia.org/wikipedia/uz/thumb/4/47/FC_Barcelona_%28crest%29.svg/400px-FC_Barcelona_%28crest%29.svg.png',
            coach: 'Флик Ханс-Дитер'
        },
        {
            name: 'Реал М.',
            people: [
                'Вини Ж',
                'Вальверде',
                'Мбаппе',
                'Модрич',
                'Рюдигер',
                'Белингем',
            ],
            logo: 'https://picfiles.alphacoders.com/227/227782.png',
            coach: 'Папа Карло'
        },
        {
            name: 'МЮ',
            people: [
                'Каземиро',
                'Фернандос',
                'Онана',
            ],
            logo: 'https://fbi.cults3d.com/uploaders/13386850/illustration-file/d1a731b5-f7ce-4a7c-a0c0-8bbde7cb7a82/manu.png',
            coach: 'хуй знает, скоро опять уволят'
        },
        {
            name: 'Аль-Наср',
            people: [
                'Роналду',
            ],
            logo: 'https://upload.wikimedia.org/wikipedia/az/thumb/4/4e/Əl-Nəsr_FK.png/800px-Əl-Nəsr_FK.png',
            coach: 'Хз, Рон везде рулит'
        }
    ]

    const creatMyElement = ({tag = 'div', place, className}) => {
        const newTag = document.createElement(tag);
        if (className) {
            newTag.classList.add(className);
        }
        place.append(newTag);
        return newTag;
    }

    listClubs.forEach((club) => {
        const divForClub = creatMyElement({
            place: document.querySelector('#list .childDiv'),
            className: 'placeForClub'
        });

        const divForLogo = creatMyElement({
            place: divForClub,
            className: 'logoClub'
        });

        const imgLogo = creatMyElement({tag: 'img', place: divForLogo});
        imgLogo.src = club.logo;
        imgLogo.alt = club.name;

        const divDescriptionOfClub = creatMyElement({
            place: divForClub,
            className: 'DescriptionOfClub'
        });

        const divForName = creatMyElement({
            place: divDescriptionOfClub,
            className: 'nameClub'
        });
        divForName.textContent = club.name;


        const divPlayerOfClub = creatMyElement({
            place: divDescriptionOfClub,
            className: 'playerOfClub'
        })
        divPlayerOfClub.textContent = `Лучшие игроки: ${club.people.join(', ')}`;

        const divForCoach = creatMyElement({
            place: divDescriptionOfClub,
            className: 'divForCoach'
        })
        divForCoach.textContent = `Тренер: ${club.coach}`;
    });

    const words = [
        "яблоко", "машина", "компьютер", "радар", "телефон",
        "аргентина", "заказ", "кино", "метро", "топот",
        "молоко", "кабан", "дед", "город", "окно", "и", "маам",
        "лампа", "ротатор", "человек", "шалаш", "носорог"
    ];

    const creatDivFor = ({tag = 'div', place, className}) => {
        const newTag = document.createElement(tag);
        if (className) {
            newTag.classList.add(className);
        }
        place.append(newTag);
        return newTag;
    }



    ////////////////////////////////////////////////////
    //////// ТВОЕ ПОСЛЕДНЕЕ ЗАДАНИЯ (НЕ УГРОЗА) ////////
    ////////////////////////////////////////////////////


    const startWords = creatDivFor({
        place: document.querySelector('.startWord'),
        className: 'startWord'
    });

    words.forEach(function(element) {
        // console.log(element);

        const oneStartWord = creatDivFor({
            place: startWords,
            className: 'oneStartWord'
        });
        oneStartWord.textContent = element;

    });

    const polindromWords = creatDivFor({
        place: document.querySelector('.polindromWords'),
        className: 'polindromWords'
    });

    //// ПЕРВАЯ ФУНКЦИЯ //////
    const polindrom1 = (word) => {///////////ТУТ ГПТ ПОМОГ ИСПРАВИТЬ
        // ({word}) => (word), ЧТОБЫ ЧИТАТЬ СЛОВА КАК СТРОКУ, А НЕ ОБЪЕКТ


        let length = word.length % 2 === 0 ? word.length / 2 : ((word.length + 1) / 2);

        let check = true;
        if (word.length % 2 === 0 ) {
            for (let i = 0; i < word.length / 2; i++) {
                if (word[i] !== word[word.length - i - 1]) check = false
            }
            if (check === true){
                const onePolindromWords = creatDivFor({
                    place: polindromWords,
                    className: 'onePolindromWords'
                });
                onePolindromWords.textContent = word;
            }
        }
        else {
            for (let i = 0; i < (word.length - 1 )/ 2; i++) {
                if (word[i] !== word[word.length - i - 1]) check = false;
            }
            if (check === true){
                const onePolindromWords = creatDivFor({
                    place: polindromWords,
                    className: 'onePolindromWords'
                });
                onePolindromWords.textContent = word;
            }
        }
    };
    /////// ВТОРАЯ ФУНКЦИЯ /////
    const polindrom2 = (word) => {
        let reversed = word.split('').reverse().join('');/// спросил у гпт
        if (word === reversed) {
            const onePolindromWords = creatDivFor({
                place: polindromWords,
                className: 'onePolindromWords'
            });
            onePolindromWords.textContent = word;
        }
    };
//////// ПЕРЕБЕРАЕМ ЭЛЕМЕНТЫ И ВЫЗВАЕМ СООТВЕТСТВУЮЩИЕ ФУНКЦИИ //////
    words.forEach(function(word, index) {
        if (index % 2 === 0) {
            polindrom1(word);
        }
        else {
            polindrom2(word);
        }
    })

    //////////////////////// ШАПКА ПРИ СКРОЛЛЕ /////////////////////////////

    const head = document.querySelector('.header > p');

    let distanceSectionsTop = [];

    const updateListParentCoordinate = () => {
        distanceSectionsTop = [];

        document.querySelectorAll('.parentDiv').forEach(section => {
            distanceSectionsTop.push({
                name: section.querySelector('p').textContent,
                distance: section.offsetTop,
            });
        });
    };

    updateListParentCoordinate();

    window.addEventListener('resize', () => {
        updateListParentCoordinate();
    })

    window.addEventListener('scroll', (event) => {
        distanceSectionsTop.forEach(({name, distance}) => {
            if (window.scrollY + 60 > distance) head.textContent = name;
        })

        if (window.scrollY < 32) head.textContent = 'Мое обучение';
    });
});


