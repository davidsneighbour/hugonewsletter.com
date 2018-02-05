function checkout( productID ){

	shopClient.fetchProduct( productID ).then( function( product ){
		
		var variant = product.variants[0];
		var quantity = $( ".ticket-number" ).val();

		window.open( variant.checkoutUrl( quantity ), "_blank" );
	}).catch( function(){
		console.log('Request failed');
	});
}

function checkout2( productID ){

	shopClient.fetchProduct( productID ).then( function( product ){
		
		var variant = product.variants[0];
		var quantity = $( ".ticket-number" ).val();

		$( ".buy-button" ).attr( "href", variant.checkoutUrl( quantity ));
	}).catch( function(){
		console.log('Request failed');
	});
}

	shopClient = ShopifyBuy.buildClient({
		accessToken: "f1bc486a26c2f3223539bf3154543bda",
		domain: "night-of-acrylics.myshopify.com",
		appId: "6"
	});

$(document).ready(function(){


	//$( ".buy-button" ).click( function( event ){

	//	event.preventDefault();

	//	checkout( $( this ).attr( "data-product-id" ));
	//});

	//$( ".buy-button" ).attr( "href", checkout2( $( this ).attr( "data-product-id" )));
	//$( ".buy-button" ).attr( "href", checkout2( $( this ).attr( "data-product-id" )));
	checkout2( $( ".buy-button" ).attr( "data-product-id" ) );

	$( ".ticket-number" ).change( function( event ){
		checkout2( $( ".buy-button" ).attr( "data-product-id" ) );
	});

	// block events that have expired since the site was last generated from being sold
	if( $( ".buy-button" ) ){

		var now = new Date();
		var ticketDeadline = eventDate + (5 * 60 * 1000);

		if( ticketDeadline < now){
			$( ".buy-button-wrapper" ).text( "Tickets are no longer available." );
		}
	}
});

// globals
var shopClient;
