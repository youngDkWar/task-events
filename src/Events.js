/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let btn = document.createElement('button');
    btn.innerHTML = 'Удали меня';
    btn.addEventListener('click', () => {
        btn.remove();
    });
    document.body.append(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    arr.forEach((e) => {
        let li = document.createElement('li');
        li.innerHTML = e;
        li.addEventListener('mouseover', () => {
            li.setAttribute('title', e);
        });
        ul.append(li);
    });
    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let ref = document.createElement('a');
    ref.setAttribute('href', 'https://tensor.ru/');
    ref.innerHTML = 'tensor';
    ref.addEventListener('click', () => {
        ref.innerHTML += ' https://tensor.ru/';
    });
    document.body.append(ref);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let createLi = () => {
        let li = document.createElement('li');
        li.innerHTML = 'Пункт';
        li.addEventListener('click', () => {
            li.innerHTML += '!';
        });
        return li;
    };
    let ul = document.createElement('ul');
    ul.append(createLi());

    let btn = document.createElement('button');
    btn.innerHTML = 'Добавить пункт';

    btn.addEventListener('click', () => {
        ul.append(createLi());
    });

    document.body.append(ul);
    document.body.append(btn);
}
