export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', () => {
        button.remove();
    });

    document.body.append(button);
}

export function createArrList(arr) {
    const list = document.createElement('ul');

    arr.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;

        li.addEventListener('mouseover', () => {
            li.title = li.textContent;
        });

        list.append(li);
    });

    document.body.append(list);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let clicked = false;

    link.addEventListener('click', (event) => {
        if (!clicked) {
            event.preventDefault();
            link.textContent = `${link.textContent} ${link.href}`;
            clicked = true;
        }
    });

    document.body.append(link);
}

export function createList() {
    const list = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    const addListItem = () => {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        list.append(li);
    };

    addListItem();

    list.addEventListener('click', (event) => {
        const li = event.target.closest('li');
        if (li) {
            li.textContent = `${li.textContent}!`;
        }
    });

    button.addEventListener('click', addListItem);

    document.body.append(list, button);
}
