( function () {
	return {

		init: function () {

			this.basic({

				triggerSub : $( '.trigger-sub' ),
		 		body : $( 'body' ),
			 	subMenu : $( '.about-submenu' ),
			 	navDropMenu : $( '.nav-drop-menu' ),
			 	triggerSub : $( '.trigger-sub' ),
			 	triggerNavDrop : $( '.nav-dropdown-trigger' ),
			 	navDropMenu : $( '.nav-drop-menu' )

			});

			this.emailSignup();

			$( 'main' ).removeClass( 'hide' );

		},
		emailSignup: function () {

			$( '#email-subscribe' ).on( 'submit', function ( e ) {

				e.preventDefault();

				fbq( 'track', 'Lead' );

				$.ajax({

					method: 'POST',
					url: 'https://api.hubblecontacts.com/webhooks/subscribers.json',
					dataType: 'json',
					data: {

						email: $( 'input[type="email"]', $( this ) ).val()

					},
					crossDomain: true,
					success: function ( data ) {

						$( '.thank-you' ).addClass( 'visible' );

						window.setTimeout( function () {

							$( '.thank-you' ).addClass( 'submitted' );

						}, 150 );

					},
					error: function ( data ) {

					}

				});

			});

		},
		basic: function ( opts ) {

				var triggerSub = opts.triggerSub,
			 		body = opts.body,
				 	subMenu = opts.subMenu,
				 	navDropMenu = opts.navDropMenu,
				 	triggerSub = opts.triggerSub,
				 	triggerNavDrop = opts.triggerNavDrop,
				 	navDropMenu = opts.navDropMenu
				;

			  $( window ).scroll( function () {

				var num = 150;

				if ( $( window).scrollTop() > num ) {

				  $( 'body' ).addClass( 'scroll' );

				  if ( navDropMenu.hasClass( 'opened' ) ) {

					navDropMenu.removeClass( 'opened' );

				  }
				  if ( subMenu.hasClass( 'opened' ) ) {

					subMenu.removeClass( 'opened' );

				  }
				  if ( triggerSub.hasClass( 'opened' ) ) {

					  triggerSub.removeClass( 'opened' );

				  }
				  if ( $( 'body' ).hasClass( 'template-index' ) ) {

					if ( $( '.desktop-nav' ).hasClass( 'sub-opened' ) ) {

					  $( '.desktop-nav' ).removeClass( 'sub-opened' );

					}

				  }

				} else {

				  $( 'body' ).removeClass( 'scroll' );

				}
			  });

			  $(document).ready( function(){

				  closeSubMenu = function() {

					  if ( $( 'body' ).hasClass( 'template-index' ) ) {

						subMenu.removeClass('opened');
						triggerSub.removeClass('opened');

						window.setTimeout( function () {

						  $( '.desktop-nav' ).removeClass( 'sub-opened' );

						}, 100 );

					  } else {

						subMenu.removeClass('opened');
						triggerSub.removeClass('opened');

					  }
				  };

				  openSubMenu = function() {

					  if ( $( 'body' ).hasClass( 'template-index' ) ) {

						$( '.desktop-nav' ).addClass( 'sub-opened' );

						window.setTimeout( function () {

						  subMenu.addClass('opened');
						  triggerSub.addClass('opened');

						}, 100 );

					  } else {

						subMenu.addClass('opened');
						triggerSub.addClass('opened');

					  }
				  };

				  triggerSub.on('click', function(e) {
					   if (subMenu.hasClass('opened') && triggerSub.hasClass('opened')) {
						 closeSubMenu();
					   }
					   else {
						  openSubMenu();
					   }
					   e.preventDefault();
				  });

				  body.on('mouseup', fun);

				  function fun(e){
					if (!subMenu.is(e.target)
					&& subMenu.has(e.target).length === 0
					&& !triggerSub.is(e.target)
						&& triggerSub.has(e.target).length === 0)
					{
					  closeSubMenu();
					}
				  };

					  closeNavDropMenu = function() {
						  navDropMenu.removeClass('opened');
						  triggerNavDrop.removeClass('opened');
					  };

				  triggerNavDrop.on('click', function(e) {
					   if (navDropMenu.hasClass('opened') && triggerNavDrop.hasClass('opened')) {
						  navDropMenu.removeClass('opened');
						  triggerNavDrop.removeClass('opened');
					   }
					   else {
						  navDropMenu.addClass('opened');
						  triggerNavDrop.addClass('opened');
					   }
					   e.preventDefault();
				  });

				  body.on('mouseup', fun2);

				  function fun2(e){
					if (!navDropMenu.is(e.target)
					&& navDropMenu.has(e.target).length === 0
					&& !triggerNavDrop.is(e.target)
						&& triggerNavDrop.has(e.target).length === 0)
					{
					  closeNavDropMenu();
					}
				  };

			  });

		}

	}
} ().init());