<?php
function witsage_blocks_starter_dynamic_block_block_handler( $atts ) {
	return witsage_blocks_starter_dynamic_block(
		$atts['blockVisibility'],
		$atts['blockContrast'],
		$atts['textAlignment'],
		$atts['blockAlignment'],
		$atts['richMessage']
	);
}

function witsage_blocks_starter_dynamic_block(
	$blockVisibility,
	$blockContrast,
	$textAlignment,
	$blockAlignment,
	$richMessage
) {


	ob_start(); //start buffer
	?>

	<?php
//   Show all local vars for debugging
//	print("<pre class=\"block-debug\">".print_r(get_defined_vars(),true)."</pre>");
	?>

	<div class=" align<?php echo $blockAlignment . ' ' . $blockVisibility . ' ' . $blockContrast . ' ' . $textAlignment ?>">
		<!-- Start of .wp-block -->

		<?php echo $richMessage ?>

	</div> <!-- End of . -->

	<?php
	return ob_get_clean(); // stop buffer

}

/**
 * Register block
 */
add_action( 'init', function () {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	$dir = dirname( __FILE__ );

	$index_js = 'index.js';
	wp_register_script(
		'witsage_blocks_starter_dynamic_block',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components'
		),
		filemtime( "$dir/$index_js" )
	);

	register_block_type( 'witsage-blocks/starter-dynamic-block', array(
		'editor_script'   => 'witsage_blocks_starter_dynamic_block',
		'render_callback' => 'witsage_blocks_starter_dynamic_block_block_handler',
		'attributes'      => [
			'blockVisibility' => [
				'default' => 'show-for-all'
			],
			'blockContrast'   => [
				'default' => 'witsage-block-light'
			],
			'textAlignment'   => [
				'default' => ''
			],
			'blockAlignment'  => [
				'default' => ''
			],
			'richMessage'     => [
				'default' => ''
			],
		]
	) );
} );
