var article = new Articles.Pager();
$(document).ready(function() {
    article.paragraphsPerPage = 5; // ������������� ���������� ��������� �� ��������
    article.pagingContainer = $('#articlesPage'); // ������������� �������� ���������
    article.paragraphs = $('div.articlesContent', article.pagingContainer); // �������������� ��������
    article.showPage(1); // �������� �������� � ������ ��������
});


var news = new News.Pager();
$(document).ready(function() {
    news.paragraphsPerPage = 5; // ������������� ���������� ��������� �� ��������
    news.pagingContainer = $('#newsPage'); // ������������� �������� ���������
    news.paragraphs = $('div.newsContent', news.pagingContainer); // �������������� ��������
    news.showPage(1); // �������� �������� � ������ ��������
});


var all = new All.Pager();
$(document).ready(function() {
    all.paragraphsPerPage = 8; // ������������� ���������� ��������� �� ��������
    all.pagingContainer = $('#allPage'); // ������������� �������� ���������
    all.paragraphs = $('div.allContent', all.pagingContainer); // �������������� ��������
    all.showPage(1); // �������� �������� � ������ ��������
});