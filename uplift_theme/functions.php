<?php
function theme_setup(){
    register_nav_menu('topnav', __('Main menu'));
}
add_action('init', 'theme_setup');

//* Add custom body class to the head
add_filter( 'body_class', 'custom_class' );
function custom_class( $classes ) {
    if ( is_page_template( 'testpage.php' ) ) {
        $classes[] = 'invest-bond-p';
    }
    if ( is_home() ) {
        $classes[] = 'home-p';
    }
    return $classes;
}