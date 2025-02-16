// https://github.com/russellgoldenberg/scrollama#examples


		var main = d3.select('main')
		var scrolly = main.select('#scrolly');
		var figure = scrolly.select('figure');
		var article = scrolly.select('article');
		var step = article.selectAll('.step');

		// initialize the scrollama
		var scroller = scrollama();

		// generic window resize listener event
		function handleResize() {
			// 1. update height of step elements
			var stepH = Math.floor(window.innerHeight * 0.75);
			step.style('height', stepH + 'px');

			var figureHeight = window.innerHeight / 2
			var figureMarginTop = (window.innerHeight - figureHeight) / 8 

			figure
				.style('height', figureHeight + 'px')
				.style('top', figureMarginTop + 'px');


			// 3. tell scrollama to update new element dimensions
			scroller.resize();
		}

		// scrollama event handlers
		function handleStepEnter(response) {
			console.log(response)
			// response = { element, direction, index }

			// add black text color to current step only
			step.classed('is-active', function (d, i) {
				return i === response.index;
			})

			// update graphic based on step
			figure.select('img').attr("src", response.element.getAttribute("data-src"));
			// figure.select('div').
			// figure.select('svg', 'img').attr("src", response.element.getAttribute("data-src"));
			// if(response.element.getAttribute("data-src")==="Layer_1")
			// figure.innerHTML = document.querySelector("#"+response.element.getAttribute("data-src")).outerHTML;
			// else figure.select('img').attr("src", response.element.getAttribute("data-src"));
		}

		function setupStickyfill() {
			d3.selectAll('.sticky').each(function () {
				Stickyfill.add(this);
			});
		}

		function init() {
			setupStickyfill();

			// 1. force a resize on load to ensure proper dimensions are sent to scrollama
			handleResize();

			// 2. setup the scroller passing options
			// 		this will also initialize trigger observations
			// 3. bind scrollama event handlers (this can be chained like below)
			scroller.setup({
				step: '.step',
				offset: 0.75,
				debug: false,
				
			})
	
			
			
			// if (response.direction == "up"){
			// 	scroller.setup({
			// 	step: '#scrolly article .step',
			// 	offset: 0.25,
			// 	debug: false,
			// 	})	
			// }
				.onStepEnter(handleStepEnter)


			// setup resize event
			window.addEventListener('resize', handleResize);
		}

		// intialize
		init();
	