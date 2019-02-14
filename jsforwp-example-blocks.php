<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     Ravelblocks
 * @author      Meagen Voss (@vossisboss)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Ravelblocks
 * Plugin URI:  https://gutenberg.courses
 * Description: A plugin for interacting with the Ravelry API.
 * Version:     0.1
 * Author:      Meagen Voss
 * Author URI:  https://twitter.com/zgordon
 * Text Domain: ravelblocks
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Gutenberg_Courses\Example_Blocks;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

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

// Register meta boxes
include __DIR__ . '/lib/meta-boxes.php';

// Block Templates
include __DIR__ . '/lib/block-templates.php';

// Dynamic Blocks
include __DIR__ . '/blocks/12-dynamic/index.php';
