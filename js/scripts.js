var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var itemsByTagName = document.getElementsByTagName('li').length;
    element.innerHTML = ('item ' + itemsByTagName);
    list.appendChild(element);
});