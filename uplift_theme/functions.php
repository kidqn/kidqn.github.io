<?php
function theme_setup(){
    register_nav_menu('topnav', __('Main menu'));
}
add_action('init', 'theme_setup');

//* Add custom body class to the head
add_filter( 'body_class', 'custom_class' );
function custom_class( $classes ) {
    if ( is_page_template( 'invest-bond.php' ) ) {
        $classes[] = 'invest-bond-p';
    }

    if ( is_page_template( 'invest-suistain.php' ) ) {
        $classes[] = 'invest-suistain-p';
    }

    if ( is_home() ) {
        $classes[] = 'home-p';
    }
    return $classes;
}

function change_flag ($output) {
    if ( is_page_template( 'invest-bond.php' ) ) {
        $output = 'header-black';
    }
    if ( is_page_template( 'invest-suistain.php' ) ) {
        $output = 'header-brown';
    }
    if ( is_home() ) {
        $output = '';
    }
    return $output;
}
add_filter('dinhlam_flag', 'change_flag');