<?php
//add button to admin bar
function shd_custom_button_example( $wp_admin_bar ) {
	$args = array(
		'id' => 'shd-divi-save-button',
		'title' => 'Save',
		'meta' => array(
			'class' => 'shd-button-class--save',
			)
		);
	$wp_admin_bar->add_node($args);
}
add_action( 'admin_bar_menu', 'custom_button_example', 1500 );

//add script for button function
function visual_button() {
	wp_enqueue_script( 'button-query', get_stylesheet_directory_uri() . '/js/visual.save.js', array( 'jquery' ), null, false );
}

//slot styling for button into admin pages - note, must also add to the stylesheet for it to carry to the non-admin pages - I also changed the background-color: green; to make more visible
function admin_button_styling() {
	echo ' <style>
#wpadminbar li.shd-button-class--save {
	display: none;
}
</style>';
}
add_action( 'admin_head', 'admin_button_styling' );
