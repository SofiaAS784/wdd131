const chapter = document.querySelector('#favchap');
const button = document.querySelector('button');
const chapterList = document.querySelector('ul');

button.addEventListener('click', function () {
    if (chapter.value.trim() !== '') {
        const favChapter = document.createElement('li');
        const remove = document.createElement('button');

        favChapter.textContent = chapter.value;
        remove.textContent = '❌';

        favChapter.append(remove);
        chapterList.append(favChapter);

        remove.addEventListener('click', function () {
            chapterList.removeChild(favChapter);
            chapter.focus();

        });
        chapter.value = '';
    }
    chapter.focus();
});