import { createStore } from "redux";
const initialState = [];
let recordState;

const reducer = function (state = initialState, action) {
    recordState = state;
    switch (action.type) {
        case 'addBook':
            return [
                ...state,
                {
                    bookId: action.info.bookId,
                    bookName: action.info.bookName
                }
            ];
        case 'delBook':
            return state.filter(book => book.bookId != action.info.bookId);
        default:
            return [...state];
    }
}
const store = createStore(reducer);

const root = document.getElementById('app');

const addBook = document.getElementById('addBook');
const delBook = document.getElementById('delBook');
const bookList = document.getElementById('bookList');

const addBookBtn = document.createElement('button');
const bookNameInput = document.createElement('input');
const delBookBtn = document.createElement('button');
const bookIdInput = document.createElement('input');

addBookBtn.innerText = 'Add Book';
delBookBtn.innerText = 'Delete Book';

function* generateID() {
    let id = 0;
    while (true) {
        yield id++;
    }
}
const generateId = generateID();
const genBookId = () => generateId.next().value;

addBookBtn.addEventListener('click', () => {
    const bookName = bookNameInput.value;
    if (bookName) {
        store.dispatch({
            type: 'addBook',
            info: {
                bookId: genBookId(),
                bookName: bookName
            }
        });
    }
});
delBookBtn.addEventListener('click', () => {
    const bookId = bookIdInput.value;
    if (bookId) {
        store.dispatch({
            type: 'delBook',
            info: {
                bookId: bookId
            }
        });
    }
});


addBook.appendChild(bookNameInput);
addBook.appendChild(addBookBtn);
delBook.appendChild(bookIdInput);
delBook.appendChild(delBookBtn);

store.subscribe(() => {
    const books = store.getState();
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.innerText = book.bookName;
        bookList.appendChild(li);
    });
});

const showNewList = store.subscribe(() => {
    const currentState = store.getState();
    if (currentState.length != recordState.length) {
        bookList.innerHTML = '';
        currentState.forEach(book => {
            bookList.appendChild(createBookList(book));
        });
    }
});

function createBookList(info) {
    const element = document.createElement('li');
    element.innerText = `BookId: ${info.bookId}, BookName: ${info.bookName}`;
    return element;
}   