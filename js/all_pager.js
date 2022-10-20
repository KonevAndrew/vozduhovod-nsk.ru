var All = {};
All.Pager = function() {

	// Парметры по умолчанию 
    this.paragraphsPerPage = 5; 						// Количество элементов на странице
    this.currentPage = 1;								// Страница, которая открыается при инициализации
    this.pagingControlsAllContainer = "#pagingControlsAll"; 	// Контейнер для ванигации 
    this.pagingContainerPath = "#allPage";				// Контейнер c содержанием
    
	// Подсчет общего количества страниц
    this.numPagesAll = function() {
        var numPagesAll = 0;
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
            numPagesAll = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
        }
        
        return numPagesAll;
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
        renderControls(this.pagingControlsAllContainer, this.currentPage, this.numPagesAll());
    }
    
	// Обновляем навигацю.
	// Аргументы:
	//  container - контейнер для содержания текущей страницы;
	//  currentPage - номер текущей страницы;
	//  numPagesAll - общее колчисетво страниц.
    var renderControls = function(container, currentPage, numPagesAll) {
		// Формируем разметку навигации
        var pagingControlsAll = "<span class='pageNavi'>Страницы</span><ul>";
        for (var i = 1; i <= numPagesAll; i++) {
            if (i != currentPage) {
                pagingControlsAll += "<li><a href='#' onclick='all.showPage(" + i + "); return false;'>" + i + "</a></li>";
            } else {
                pagingControlsAll += "<li>" + i + "</li>";
            }
        }
        
        pagingControlsAll += "</ul>";
        
        $('#allPage > div').addClass("allContent"); 
		// Вставляем разметку навигации в DOM
        $(container).html(pagingControlsAll);
    }
}