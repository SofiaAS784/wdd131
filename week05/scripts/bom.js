const chapter = document.querySelector('#favchap');
const button = document.querySelector('button');
const chapterList = document.querySelector('ul');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function () {
    if (chapter.value.trim() !== '') {
        displayList(chapter.value)
        chaptersArray.push(chapter.value);
        setChapterList();
        chapter.value = '';
        chapter.focus();
    }
});

function displayList(item) {
    let favChapter = document.createElement('li');
    let remove = document.createElement('button');

    favChapter.textContent = item;
    remove.textContent = '❌';
    remove.classList.add('delete');

    favChapter.append(remove);
    chapterList.append(favChapter);

    remove.addEventListener('click', function () {
        chapterList.removeChild(favChapter);
        removeChapter(favChapter.textContent);
        chapter.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function removeChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}