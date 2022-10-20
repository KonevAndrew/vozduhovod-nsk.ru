var article = new Articles.Pager();
$(document).ready(function() {
    article.paragraphsPerPage = 5; // Устанавливаем количество элементов на странице
    article.pagingContainer = $('#articlesPage'); // Устанавливаем основной контейнер
    article.paragraphs = $('div.articlesContent', article.pagingContainer); // Подсчитываемые элементы
    article.showPage(1); // Начинаем просмотр с первой страницы
});


var news = new News.Pager();
$(document).ready(function() {
    news.paragraphsPerPage = 5; // Устанавливаем количество элементов на странице
    news.pagingContainer = $('#newsPage'); // Устанавливаем основной контейнер
    news.paragraphs = $('div.newsContent', news.pagingContainer); // Подсчитываемые элементы
    news.showPage(1); // Начинаем просмотр с первой страницы
});


var all = new All.Pager();
$(document).ready(function() {
    all.paragraphsPerPage = 8; // Устанавливаем количество элементов на странице
    all.pagingContainer = $('#allPage'); // Устанавливаем основной контейнер
    all.paragraphs = $('div.allContent', all.pagingContainer); // Подсчитываемые элементы
    all.showPage(1); // Начинаем просмотр с первой страницы
});