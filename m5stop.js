MutationObserver = window.MutationObserver || window.WebKitMutationObserver;


	//definisco il blocco da schiantare in overlay
	blocker = '<div class="m5sblocker">'+
					'<div class="m5sblocker-profile-fader"></div>'+
					'<div class="m5sblocker-inner">'+
						'<div class="m5sblocker-txt">'+
							'<div class="m5sblocker-disclaimer fwb">ATTENZIONE, può contenere materiale grillesco</div>'+
							'<div class="m5sblocker-ctas">'+
								'<span class="m5sblocker-cta quote _42ft _4jy0 _4jy3 _517h">Sostituisci con perla random</span>'+
								'<span class="m5sblocker-close _42ft _4jy0 _4jy3 _517h">Mi arrischio.</span>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
	
	//definisco le chiavi di ricerca
	keywords = [
		/\b(beppe )?(grillo)\b/gi,
		/\b(andrea )?(scanzi)\b/gi,
		/\b(alessandro )?(di battista)\b/gi,
		///\b(5 )?(stelle)\b/gi,
		/\b(m5s)\b/gi,
		/\b(renzie)\b/gi,
		/\b(5 stelle)\b/gi,
		/\b(5stelle)\b/gi,
		/\b(casaleggio)\b/gi,
		/\b(luigi )?(di maio)\b/gi,
		/\b(giulia )?(sarti)\b/gi,
		/\b(vito )?(crimi)\b/gi,
		/\b(mattia )?(calise)\b/gi
//		/\b(paola )?(taverna)\b/gi,
//		/\b(vinciamonoi)\b/gi,
//		/\b(pidimenoelle)\b/gi
	];
	

	
	var newPost =
			'<div class="topBorder"></div>'+
			'<div class="timelineUnitContainer">'+
				'<div role="article">'+
					'<div class="userContentWrapper m5sBlockDone"></div>'+
				'</div>'+	
			'</div>'+
			'<div class="bottomBorder"></div>';


//var item1 = $( "li.item-1" )[ 0 ];
//$( "li.item-ii" ).find( item1 ).css( "background-color", "red" );

$.fn.randomQuote = function() {
	var element = this;
	
	if ($('body').hasClass('home')) {
		userInfo = $('.clearfix._5x46');
	}
	
	else if ($('body').hasClass('timelineLayout')) {
		userInfo = $('.mbs.pbs._1_m');
	}
	
	else if ($('body').hasClass('pagesTimelineLayout')) {
		userInfo = $('.clearfix._5x46');
	}
	
	else {
		userInfo = $('.clearfix._5x46');
	}
	
	var userInfo = this.find($(userInfo));
	
	element.wrapInner('<div class="temp_controller"></div>');
	
	var blocker = element.find('.m5sblocker');
	var old = element.find('.temp_controller');
	
	blocker.appendTo(element);
	
	old.height(old.height()).contents().remove();
		
	blocker.animate({
		'opacity' :0
	},150,function () {
		blocker.remove()
	})
	
	function successo(results) {
		
		var curHeight = old.height();
		old.css('height', 'auto');
		
		old.append(newPost).css({'opacity' : '0'}).find('.timelineUnitContainer').prepend(userInfo);
		
		//var authLink = results.titles.replace(' ', '+')
		
		var str = '<span class="m5sblock-quote">'+results.quote+'</span><br><br>('+results.titles+')';
		
		var html = $.parseHTML( str );
		element.find('.userContentWrapper').append( html );
		
		var autoHeight = old.height();
		old.height(curHeight).animate({
			'opacity' : '1',
			'height' : autoHeight
		
		}, 150);
		

		//se è vuota recuperane un altra
		if (old.find('.m5sblock-quote').text() == 'undefined') {
			console.log('quote undefined, restart...')
			
			element.randomQuote()
			
		}

	}
	
	function test(results) {
		console.log(results.titles)
		console.log('cit: '+results.quote)
		console.log('------------')
	}
	
	function testError(errore) {
		console.error('Errore: '+errore);
	}
	
	function errore(errore) {
		console.error('Errore: '+errore);
		console.log('restart della funzione...')
		go()
	}

	authors = [
		"Karl Popper",
		"Karl Marx",
		"Antonio Gramsci",
		"Thomas Hobbes",
		"John Locke",
		"Immanuel Kant",
		"Friedrich Nietzsche",
		"Marcel Proust",
		"Bertolt Brecht",
		"Platone",
		"Albert Einstein",
		"Schopenhauer",
		"Aristotele",
		"Sigmund Freud",
		"Blaise Pascal",
		"Sartre",
		"Hegel",
		"Montaigne",
		"John Maynard Keynes",
		"Wittgenstein",
		"Kierkegaard",
		"Isaac Newton",
		"Martin Heidegger",
		"Carl Gustav Jung",
		"Michel Foucault",
		"Simone Weil",
		"Cesare Beccaria",
		"Palmiro Togliatti",
		"Enrico Berlinguer",
		"Giacomo Matteotti",
		"Filippo Turati",
		"Giorgio Amendola",
		"Sandro Pertini",
		"Tommaso Moro",
		"Robert Owen",
		"Henri de Saint-Simon",
		"Charles Fourier",
		"Pierre-Joseph Proudhon",
		"Alexander Herzen",
		"John Stuart Mill",
		"Friedrich Engels",
		"Michail Bakunin",
		"Léon Blum",
		"Benedetto Croce",
		//risorgimento
		"Adelaide Cairoli",
		"Amatore Sciesa",
		"Beppe Fenoglio",
		"Carlo Cattaneo",
		"Carlo Pisacane",
		"Enrico Toti",
		"Felice Orsini",
		"Francesco Crispi",
		"Gabriele Rossetti",
		"Giovanni Berchet",
		"Giuseppe Mazzini",
		"Goffredo Mameli",
		"Guglielmo Pepe",
		"Luigi Settembrini",
		"Madame de Staël",
		"Massimo d'Azeglio",
		"Pietro Colletta",
		"Silvio Pellico",
		"Stendhal",
		"Tommaso Campanella",
		"Ugo Foscolo",
		"Vincenzo Cuoco",
		"Vincenzo Gioberti",
		"Vittorio Alfieri"
//		"Luigi Einaudi",
//		"Alcide De Gasperi"
	];
	
	
	function go() {
		var author = authors[Math.floor(Math.random()*authors.length)];
		console.log(author)
		WikiquoteApi.getRandomQuote(author, successo, errore );
	}
	go()
	
	//testa l'array di autori
//	for ( var i = 0; i < authors.length; i = i + 1 ) {
//		//console.log( authors[ i ] );
//		WikiquoteApi.getRandomQuote(authors[ i ], test, testError );
//	}
		
};


	
$.fn.block = function() {
	var current = this
	if (
		!this.hasClass('m5sblocked')
		&&
		!this.parents('.m5sblocked').length > 0
		) {

		
		this.addClass('m5sblocked').prepend(blocker);
		
		this.find('.m5sblocker-close').click(function () {
			
			$(this).closest('div.m5sblocker').animate({
				'opacity' :0
			},150,function () {
				$(this).closest('div.m5sblocker').remove()
			})
			
						
			
		})
		
		this.find('.m5sblocker-cta.quote').click(function () {
			//qui chiamo la citazione
			current.randomQuote()
		})
		
		
	}
};


var observer = new MutationObserver(function (mutations) {

	if ($('body').hasClass('home')) {
		//definisco i contenitori dei post
		var wallItem = $('.userContentWrapper');
		var container = $('.userContentWrapper');
	}
	
	else if ($('body').hasClass('timelineLayout')) {
		var wallItem = $('.userContentWrapper, .fbTimelineUnit');
		var container = $('.fbTimelineUnit');
	}
	
	else if ($('body').hasClass('pagesTimelineLayout')) {
		var wallItem = $('.timelineUnitContainer');
		var container = $('.timelineUnitContainer');
	}
	
	else {
		var wallItem = $('.userContentWrapper');
		var container = $('.userContentWrapper');
	}
	
	wallItem.each(function () {
		var element = $(this);
		
		$.each( keywords, function( key, value ) {
			//console.log($this);
			var rSearchTerm = new RegExp(value);
			//console.log($this)
			element.contents().filter(function(value) {
			    //return (rSearchTerm).test($(this).text()); // return every match as jQuery obj
			    return (rSearchTerm).test($(this).text()); // return every match as jQuery obj
			}).closest(container).block(); // <--example, do your stuff here.
			
		});
		
		
		
	})
	
});



observer.observe(document.body, {
    childList: true,
    attributes: false,
    characterData: true,
    subtree: true
});


