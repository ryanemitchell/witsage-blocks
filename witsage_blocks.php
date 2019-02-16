<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     ryanemitchell/witsageblocks
 * @author      Ryan Mitchell (@ryanemitchell)
 * @license     GPL3+
 *
 * @wordpress-plugin
 * Plugin Name: WitSage Blocks
 * Plugin URI:  https://witdelivers.com
 * Description: Blocks for use with the WitSage theme framework by Wit Digital.
 * Version:     1.0.0
 * Author:      Ryan Mitchell
 * Author URI:  https://github.com/ryanemitchell
 * Text Domain: witsageblocks
 * Domain Path: /languages
 * License:     GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 */

namespace witdigital\witsage_blocks;

//  Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

//Global functions
include_once __DIR__ . '/lib/witsage-blocks-functions.php';

// Include Dynamic blocks
include_once __DIR__ . '/blocks/witage-starter-dynamic-block/witsage-starter-dynamic-block.php';
