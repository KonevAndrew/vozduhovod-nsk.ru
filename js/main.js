// JavaScript Document
$(function(){
	(function() {
		var context = $('.terms'),
		defenition = $('dd', context),
		link = $('dt a', context);

		defenition.filter('not(:first)').hide();
		link.click(function() {

		$(this).parent().next('dd').slideToggle();
		return false;
		})
	})();	
		
		$(function(){
		
		$('.resume').click(function() {
            elements = {
                'targetPopup': $($(this).attr('href'))
        };

      	$.extend(elements, {
            'popupClose': $('.close-popup', elements.targetPopup)
        });

        elements.popupClose.on('click.pp', closePopup);
        $(document).on('click.pp', function(e) {
            if (!$(e.target).closest('.popup-resume').length) {
                closePopup();
            }
        });


		positionY = $(this).offset().top - 492;
        $('.popup-resume').css({'top': positionY + 'px'});
		
		elements.targetPopup
            .show();
        
        function closePopup() {
            elements.targetPopup.hide();
            elements.popupClose.off('.pp');
            $(document).off('.pp');
            return false;
        }
        return false;
    });
	
		 $('.popup-button').click(function() {
            $($(this).closest('form')).submit();
            return false;
        })
		
		$('#resume').validate({
        'rules': {
            'rf[fio]': 'required',
            'rf[phone]': 'required',
			'rf[file]': 'required',
            'rf[email]': {
				
				'required':true,
				'email':true
				}
        },
		'messages':{
			
			'email': ''
			
			},
            submitHandler : function(form) {
            sendMessage('cls-form', 'message');
        }
    });	
 });
 		
		
	(function() {
		var context = $('.description'),
		tabs = $('.cpt-item a', context);
		$(tabs).click(
			function() {		
				if (!$(this).parent().hasClass('cpt-item-select')) {
				var tabIndex = $(tabs).index($(this));
				$('.cpt-item-select').removeClass('cpt-item-select');
				$(this).parent().addClass('cpt-item-select');
				$('.description-item', context)
					.eq(tabIndex)
					.show()
					.end()
					.not(':eq(' + tabIndex + ')')
					.hide();
			}
		return false;
		}).first().click();
	})();
	
	$('#contacts').validate({
        'rules': {
            'cf[fio]': 'required',
			'cf[text]': 'required',
            'cf[email]': {
				
				'required':true,
				'email':true
				}
        },
		'messages':{
			
			'email': ''
			
			},
            submitHandler : function(form) {
            sendMessage('cls-form', 'message');
        }
    });	
 	
	(function() {
		var context = $('.description'),
		tabs = $('.cpt-item a', context);
		$(tabs).click(
			function() {		
				if (!$(this).parent().hasClass('cpt-item-select')) {
				var tabIndex = $(tabs).index($(this));
				$('.cpt-item-select').removeClass('cpt-item-select');
				$(this).parent().addClass('cpt-item-select');
				$('.description-item', context)
					.eq(tabIndex)
					.show()
					.end()
					.not(':eq(' + tabIndex + ')')
					.hide();
			}
		return false;
		}).first().click();
	})();
	
	
	var certView = function() {
    var context, elements, data;

    function init() {
        context = $('.production-slide-box');
        elements = {
            'items': $('.ps-img-list li', context)
          , 'itemLinks': $('.ps-img-list li a', context)
          , 'itemScroll': $('.ps-img-list-hider', context)
          , 'itemScrollList': $('.ps-img-list', context)
          , 'itemArrows': $('.list-arrows', context)

          , 'port': $('.ps-img-box', context)
          , 'portArrows': $('.ps-arrows', context)
          , 'portImgHolder': $('.img-port', context)
          , 'portImg': $('.img-port img', context)
          , 'portTitle': $('.port-title', context)
		  , 'figureMask': $('.figure', context)
		  , 'listShadow': $('.list-shadow', context)
        };
        data = {
            'scrolledClass': 'cert-view-scrolled'
          , 'selectedItemClass': 'cert-view-list-scroll-sel'
          , 'disabledArrowClass': 'disabled'
		  , 'hiddenArrowClass': 'hidden'
          , 'visibleItems': 9
          , 'currentListItem': 0
          , 'selectedListItem': 0
          , 'activityFlag': false
        };

        var itemFullWidth = parseInt(elements.items.last().outerWidth(), 10) + parseInt(elements.items.first().css('marginRight'), 10);
        elements.itemScroll.width(itemFullWidth * data.visibleItems);
		elements.itemScrollList.width(itemFullWidth * elements.items.length);

        if (elements.items.length > 5) {

            context.addClass(data.scrolledClass);

            elements.itemArrows.on('click', function() {
                var $that = $(this),
                    direction = $that.hasClass('top') ? -1 : 1;

                if (!$that.hasClass(data.disabledArrowClass)) {

                    data.currentListItem += direction;

                    elements.itemScrollList.animate({
                        'left': -((itemFullWidth * data.currentListItem))
                    });

                    checkListArrows();
                }

                return false;
            });

            function scrollMove(event, delta) {
                var direction = delta > 0 ? 0 : 1;
                elements.itemArrows.eq(direction).click();

                return false;
            }

            /*elements.itemScroll.on('mousewheel', scrollMove);*/

            function checkListArrows() {
                elements.itemArrows.removeClass(data.disabledArrowClass);
				elements.listShadow.removeClass(data.disabledArrowClass);

                if (data.currentListItem == 0) {
					elements.itemArrows.eq(0).addClass(data.disabledArrowClass);
					elements.listShadow.eq(0).addClass(data.disabledArrowClass);
				}
                if (data.currentListItem == elements.items.length - data.visibleItems) {
					elements.itemArrows.eq(1).addClass(data.disabledArrowClass);
					elements.listShadow.eq(1).addClass(data.disabledArrowClass);
				}
            }

        }

        elements.portArrows.on('click', clickPortArrow);
        elements.itemLinks.on('click', changeCert);
    }

    function changeCert() {
        var $that = $(this),
            relativeItem = $that.closest(elements.items);

        if (!relativeItem.hasClass(data.selectedItemClass) && data.activityFlag !== true) {
            elements.items.removeClass(data.selectedItemClass);
            relativeItem.addClass(data.selectedItemClass);

            loadCert($that);
        }

        return false;
    }

    function loadCert(that) {
        var $that = that
          , newImage = $(new Image())
          , fullSrc = $that.attr('href')
		  , fig = $that.data()
          , itemIndex = elements.itemLinks.index($that);
		
		
        elements.portImgHolder.css({
            'width':elements.portImgHolder.width()
          , 'height':elements.portImgHolder.height()
        });

        elements.portImg.fadeOut(function () {
            var $that = $(this)
              , resetCache = $('html').hasClass('ie7') ? '?' + new Date().getTime() : '';

            $that.remove();
            data.activityFlag = true;

            newImage.load(function () {
                var $that = $(this),
                    newDimensions = {
                        'width':$that.width()
                      , 'height':$that.height()
                    };

                elements.portTitle.text('Страница ' + (itemIndex + 1));
                data.selectedListItem = itemIndex;
		
                checkPortArrows();

                elements.portImgHolder.animate({
                    'width':newDimensions.width
                  , 'height':newDimensions.height
                }, function () {
                    $that.fadeIn();
                    elements.portImg = $that;
                    data.activityFlag = false;
					elements.figureMask.removeClass();
					elements.figureMask.addClass('figure ' + fig['figure']);
                });
            })
                .hide()
                .attr('src', fullSrc + resetCache)
                .appendTo(elements.portImgHolder);
        });
		

        return false;
    }

    function clickPortArrow() {
        var $that = $(this),
            direction = $that.hasClass('right') ? 1 : -1,
            targetIndex = data.selectedListItem + direction;

        if (!$that.hasClass(data.disabledArrowClass)) {
            elements.itemLinks.eq(targetIndex).click();

            if (targetIndex > data.currentListItem + data.visibleItems - 1) elements.itemArrows.eq(1).click();	
            if (targetIndex < data.currentListItem) elements.itemArrows.eq(0).click();
			
        }

        return false;
    }

    function checkPortArrows() {
        elements.portArrows.removeClass(data.disabledArrowClass);

        if (data.selectedListItem == 0) elements.portArrows.eq(0).addClass(data.disabledArrowClass);
        if (data.selectedListItem == elements.items.length - 1) elements.portArrows.eq(1).addClass(data.disabledArrowClass);
    }

    return {
        init: init
    }
}();

	certView.init(); 
	
})