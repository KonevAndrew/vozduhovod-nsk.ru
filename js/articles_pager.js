var Articles = {};
Articles.Pager = function() {

	// Парметры по умолчанию 
    this.paragraphsPerPage = 5; 						// Количество элементов на странице
    this.currentPage = 1;								// Страница, которая открыается при инициализации
    this.pagingControlsContainer = "#pagingControls"; 	// Контейнер для ванигации 
    this.pagingContainerPath = "#articlesPage";				// Контейнер c содержанием
    
	// Подсчет общего количества страниц
    this.numPages = function() {
        var numPages = 0;
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
            numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
        }
        
        return numPages;
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
        renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
    }
    
	// Обновляем навигацю.
	// Аргументы:
	//  container - контейнер для содержания текущей страницы;
	//  currentPage - номер текущей страницы;
	//  numPages - общее колчисетво страниц.
    var renderControls = function(container, currentPage, numPages) {
		// Формируем разметку навигации
        var pagingControls = "<span class='pageNavi'>Страницы</span><ul>";
        for (var i = 1; i <= numPages; i++) {
            if (i != currentPage) {
                pagingControls += "<li><a href='#' onclick='article.showPage(" + i + "); return false;'>" + i + "</a></li>";
            } else {
                pagingControls += "<li>" + i + "</li>";
            }
        }
        
        pagingControls += "</ul>";
        
        $('#articlesPage > div').addClass("articlesContent"); 
		// Вставляем разметку навигации в DOM
        $(container).html(pagingControls);
    }
}