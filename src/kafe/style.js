/* @echo header */

	/**
	* ### Version <!-- @echo VERSION -->
	* Common adjustment and manipulation methods for html layouts.
	*
	* @module <!-- @echo MODULE -->
	* @class <!-- @echo NAME_FULL --> 
	*/
	var style = {};

	/**
	* Equalizes the height css property of every element in a selector. If no height is currently present, the method computes the height values before equalizing. Elements must be visible at the time or will be considered as having a height of 0.
	*
	* @method equalHeight
	* @param {String|jQueryObject|DOMElement} selector The affected elements.
	* @param {Object} [options] Additional options.
	*	@param {Number} [options.nbPerRow=0] Allows the elements to be compared in groups of a given number.
	*	@param {Boolean} [options.resetHeight=false] Resets css height of all elements to 'auto' before comparing.
	*	@param {Boolean} [options.borderBox=false] If true, heights will be computed as if the elements had the 'box-sizing' css attribute to 'border-box'.
	* @example
	*	<!-- @echo NAME_FULL -->.equalHeight('.products', { nbPerRow: 3, resetHeight: true });
	* @example
	*	$('.products').<!-- @echo PACKAGE -->('<!-- @echo NAME -->.equalHeight', { nbPerRow: 3, resetHeight: true });
	*/
	style.equalHeight = function() {
		var
			$o          = $(arguments[0]),
			options     = arguments[1] || {},
			nbPerRow    = options.nbPerRow,
			resetHeight = !!options.resetHeight,
			borderBox   = !!options.borderBox,

			_doIt = function() {
				var
					$z = $(arguments[0]),
					maxOuterHeight = Math.max.apply(Math, $z.map(function(){ return $(this).outerHeight(); }).get())
				;
				$z.each(function() {
					var $this = $(this);
					$this.height( (borderBox) ? maxOuterHeight : (maxOuterHeight - ($this.outerHeight() - $this.height())) );
				});
			}
		;


		if (resetHeight) {
			$o.height('auto');
		}

		if (!!nbPerRow) {
			var max = Math.ceil($o.length / nbPerRow);
			for (var i=0; i<max; ++i) {
				_doIt($($o.splice(0, nbPerRow)));
			}
		} else {
			_doIt($o);
		}
	};


	/**
	* Replaces &lt;hr&gt; tags into &lt;div class="hr"&gt;&lt;/div&gt; tags to eliminate styling restrictions.
	*
	* @method replaceHr
	* @param {String|jQueryObject|DOMElement} [selector='hr'] Restricts the process to a specific context.
	* @example
	*	<!-- @echo NAME_FULL -->.replaceHr('.page-content');
	* @example
	*	$('.page-content').<!-- @echo PACKAGE -->('<!-- @echo NAME -->.replaceHr');
	*/
	style.replaceHr = function() {
		var $e = (arguments[0]) ? $('hr:not(.<!-- @echo PACKAGE -->-replacehr-processed)', $(arguments[0])) : $('hr');
		$e.addClass('<!-- @echo PACKAGE -->-replacehr-processed').hide().wrap('<div class="hr"></div>');
	};


	/**
	* Vertically align an element inside its parent. Elements must be visible at the time or positioning calculations will fail.
	*
	* @method vAlign
	* @param {String|jQueryObject|DOMElement} selector Affected elements.
	* @param {String|jQueryObject|DOMElement} [parent=DIRECT_PARENT] Container in which we want to be centered.
	* @example
	*	<!-- @echo NAME_FULL -->.vAlign('.menu-items > .label');
	* @example
	*	$('.menu-items > .label').<!-- @echo PACKAGE -->('<!-- @echo NAME -->.vAlign');
	*/
	style.vAlign = function(e, parent) {
		$(e).each(function(){
			var
				$this   = $(this),
				$parent = (parent) ? $(parent) : $this.parent()
			;
			$this.css({display: 'block', marginTop: Math.floor(($parent.height() - $this.height()) / 2) + 'px'});
		});
	};


	// Add as jQuery plugin
	kafe.fn.plugIntojQuery('', {
		'<!-- @echo NAME -->.equalHeight': function(obj, parameters) {
			style.equalHeight(obj, parameters[0]);
		},
		'<!-- @echo NAME -->.replaceHr': function(obj, parameters) {
			style.replaceHr(obj);
		},
		'<!-- @echo NAME -->.vAlign': function(obj, parameters) {
			style.replaceHr(obj, parameters[0]);
		}
	});


	return style;

/* @echo footer */