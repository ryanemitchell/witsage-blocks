<?php

namespace witdigital\witsage_blocks;

// Create Category
add_filter( 'block_categories', function ( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'witsage-blocks',
				'title' => __( 'WitSage Blocks', 'witsage_blocks' ),
			),
		)
	);
}, 10, 2 );

function is_editor_context( $verbose = null ) {
//  Check if page is being loaded in the editor by checking URL structure for context=edit
//	@TODO There has to be a better way. Cannot get_current_screen as the page is an API request.
//  @bodyC heck if page is being loaded in the editor by checking URL structure for context=edit
	$current_url = $_SERVER['REQUEST_URI'];

	if ( isset( $verbose ) ) {
		echo $current_url;
	}

	if ( strpos( $current_url, 'context=edit' ) !== false ) {
		return true;
	}

	return false;

}
