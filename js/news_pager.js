var News = {};
News.Pager = function() {

	// Парметры по умолчанию 
    this.paragraphsPerPage = 5; 						// Количество элементов на странице
    this.currentPage = 1;								// Страница, которая открыается при инициализации
    this.pagingControlsNewsContainer = "#pagingControlsNews"; 	// Контейнер для ванигации 
    this.pagingContainerPath = "#newsPage";				// Контейнер c содержанием
    
	// Подсчет общего количества страниц
    this.numPagesNews = function() {
        var numPagesNews = 0;
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
            numPagesNews = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
        }
        
        return numPagesNews;
    };
    
	// Выводим страницу. 
	// Аргументы:
	// 	page - номер страницы, которую нужно вывести
    this.showPage = function(page) {
        this.currentPage = page;
        var html = "";
		// Формируем содержание текущей страницы
        for (var i = (page-1)*this.paragraphsPerPage; i < ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage; i++) {
            if (i < this.paragraphs.length) {
                var elem = this.paragraphs.get(i);
                html += "<" + elem.tagName + ">" + elem.innerHTML + "</" + elem.tagName + ">";
            }
        }
        
		// Включаем сформированное содержание в структуру DOM
        $(this.pagingContainerPath).html(html);
        
		// Обновляем навигацию
        renderControls(this.pagingControlsNewsContainer, this.currentPage, this.numPagesNews());
    }
    
	// Обновляем навигацю.
	// Аргументы:
	//  container - контейнер для содержания текущей страницы;
	//  currentPage - номер текущей страницы;
	//  numPagesNews - общее колчисетво страниц.
    var renderControls = function(container, currentPage, numPagesNews) {
		// Формируем разметку навигации
        var pagingControlsNews = "<span class='pageNavi'>Страницы</span><ul>";
        for (var i = 1; i <= numPagesNews; i++) {
            if (i != currentPage) {
                pagingControlsNews += "<li><a href='#' onclick='news.showPage(" + i + "); return false;'>" + i + "</a></li>";
            } else {
                pagingControlsNews += "<li>" + i + "</li>";
            }
        }
        
        pagingControlsNews += "</ul>";
        
        $('#newsPage > div').addClass("newsContent"); 
		// Вставляем разметку навигации в DOM
        $(container).html(pagingControlsNews);
    }
}