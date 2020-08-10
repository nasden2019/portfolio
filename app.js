let texts = ['Typical Text Effect', 'That Impress', 'No One'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, index++);

    // document.querySelector('#text').textContent = letter; // para mobile
    document.querySelector('#text2').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
})();


// -------------LANGUAGES ------------
function cambioTabs(event, imgs) {
    // var tabSelectors = document.querySelector('.tab-selectors');

    // var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-contenido-item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // para agarrar la clase (SEGUIR MIRANDO PARA QUE FUNCIONE):
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    // tablinks[i].className = tablinks[i].className.replace("tab-border", "tab-border");
    //     this.classList.add("tab-border");
    //     const tabContentItem = document.querySelector(`#${this.id}-content`);
    //     tabContentItem.classList.add("show");
    // }

    document.getElementById(imgs).style.display = "block";
    // evt.currentTarget.className += "tab-border";
}