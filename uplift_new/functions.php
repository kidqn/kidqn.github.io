<?php
function theme_setup(){
    register_nav_menu('topnav', __('Main menu'));
}
add_action('init', 'theme_setup');

function load_js() {
    wp_enqueue_script('service', get_template_directory_uri() .'/js/service.js');		
    if(is_page()) { //Check if we are viewing a page
        global $wp_query;

        //Check which template is assigned to current page we are looking at
        $template_name = get_post_meta( $wp_query->post->ID, '_wp_page_template', true );
        if($template_name === 'invest-tech.php' || $template_name === 'invest-diversity.php' ||
           $template_name === 'invest-healthcare.php' || $template_name === 'invest-suistain.php' ||
           $template_name === 'invest-generic.php'){
            //If page is using slider portfolio template then load our slider script
            wp_enqueue_script('jquery.waypoints.min', get_template_directory_uri() .'/vendors/jquery.waypoints.min.js');		
            wp_enqueue_script('carousel-service', get_template_directory_uri() .'/js/carousel-service.js');		
        }
        if($template_name === 'invest.php'){
               //If page is using slider portfolio template then load our slider script
           wp_enqueue_script('invest-srv', get_template_directory_uri() .'/js/invest-srv.js');		
        }
        if($template_name === 'resources.php'){
            //If page is using slider portfolio template then load our slider script
            wp_enqueue_script('resources', get_template_directory_uri() .'/js/resources.js');		
        }
    }
}

add_action( 'wp_footer', 'load_js');


// FITLER HOOK
// Add custom body class to the head
add_filter( 'body_class', 'custom_class' );
function custom_class( $classes ) {
    if ( is_page_template( 'invest.php' ) ) {
        $classes[] = 'invest-p';
        return $classes;
    }

    if ( is_page_template( 'invest-bond.php' ) ) {
        $classes[] = 'invest-bond-p';
        return $classes;
    }

    if ( is_page_template( 'invest-suistain.php' ) ) {
        $classes[] = 'invest-suistain-p';
        return $classes;
    }

    if ( is_page_template( 'invest-tech.php' ) ) {
        $classes[] = 'invest-tech-p';
        return $classes;
    }

    if ( is_page_template( 'invest-healthcare.php' ) ) {
        $classes[] = 'invest-healthcare-p';
        return $classes;
    }

    if ( is_page_template( 'invest-diversity.php' ) ) {
        $classes[] = 'invest-diversity-p';
        return $classes;
    }

    if ( is_page_template( 'invest-generic.php' ) ) {
        $classes[] = 'invest-generic-p';
        return $classes;
    }

    if ( is_page_template( 'resources.php' ) ) {
        $classes[] = 'resources-p';
        return $classes;
    }

    if ( is_page_template( 'thankyou.php' ) ) {
        $classes[] = 'thankyou-p';
        return $classes;
    }

    if ( is_page_template( 'login.php' ) ) {
        $classes[] = 'login-p';
        return $classes;
    }

    if ( is_page_template( 'company.php' ) ) {
        $classes[] = 'company-p';
        return $classes;
    }

    if ( is_page_template( 'pricing.php' ) ) {
        $classes[] = 'pricing-p';
        return $classes;
    }

    if ( is_home() ) {
        $classes[] = 'home-p';
        return $classes;
    }

    $classes[] = 'default-p';
    return $classes;
}

//header handle logic
function change_header_flag ($output) {
    if ( is_page_template( 'invest.php' ) || is_page_template( 'resources.php' ) ) {
        return $output = 'header-green';
    }

    if ( is_page_template( 'invest-bond.php' ) ) {
        return $output = 'header-black';
    }
    if ( is_page_template( 'invest-suistain.php' ) ) {
        return $output = 'header-brown';
    }

    if ( is_page_template( 'invest-tech.php' ) ) {
        return $output = 'header-grey';
    }

    if ( is_page_template( 'invest-healthcare.php' ) ) {
        return $output = 'header-blue';
    }

    if ( is_page_template( 'invest-diversity.php' ) ) {
        return $output = 'header-darkblue';
    }

    if ( is_page_template( 'invest-generic.php' ) ) {
        return $output = 'header-darkgreen';
    }

    if ( is_home() ) {
        return $output = '';
    }
    return $output = 'header-green';
}
add_filter('header_flag', 'change_header_flag');

function change_header_logo ($output) {
    if ( is_page_template( 'invest.php' ) || is_page_template( 'resources.php' )  ) {
        return $output = 'color_logo';
    }

    if ( is_page_template( 'invest-bond.php' ) ) {
        return $output = 'logo_white';
    }
    if ( is_page_template( 'invest-suistain.php' ) ) {
        return $output = 'logo_brown';
    }
    if ( is_page_template( 'invest-tech.php' ) ) {
        return $output = 'logo_grey';
    }
    if ( is_page_template( 'invest-healthcare.php' ) ) {
        return $output = 'logo_blue';
    }
    if ( is_page_template( 'invest-diversity.php' ) ) {
        return $output = 'logo_darkblue';
    }
    if ( is_page_template( 'invest-generic.php' ) ) {
        return $output = 'logo_darkgreen';
    }
    if ( is_home() ) {
        return $output;
    }
    return $output = 'color_logo';
}
add_filter('header_logo_flag', 'change_header_logo');


//footer handle logic
function change_footer_flag ($output) {
    if ( is_page_template( 'invest-bond.php' ) ) {
        return $output = 'footer-black';
    }
    if ( is_page_template( 'invest-suistain.php' ) ) {
        return $output = 'footer-brown';
    }
    if ( is_page_template( 'invest-tech.php' ) ) {
        return $output = 'footer-grey';
    }
    if ( is_page_template( 'invest-healthcare.php' ) ) {
        return $output = 'footer-blue';
    }
    if ( is_page_template( 'invest-diversity.php' ) ) {
        return $output = 'footer-darkblue';
    }
    if ( is_page_template( 'invest-generic.php' ) ) {
        return $output = 'footer-darkgreen';
    }
    return $output;
}
add_filter('footer_flag', 'change_footer_flag');

function change_footer_social_icon ($output) {
    if ( is_page_template( 'invest-bond.php' ) ) {
        return $output = '-orange';
    }
    if ( is_page_template( 'invest-suistain.php' ) ) {
        return $output = '-black';
    }
    if ( is_page_template( 'invest-tech.php' ) ) {
        return $output = '-grey';
    }
    if ( is_page_template( 'invest-healthcare.php' ) ) {
        return $output = '-blue';
    }
    if ( is_page_template( 'invest-diversity.php' ) ) {
        return $output = '-lightblue';
    }
    if ( is_page_template( 'invest-generic.php' ) ) {
        return $output = '-darkgreen';
    }
    return $output;
}
add_filter('footer_social_icon_flag', 'change_footer_social_icon');

function change_footer_logo ($output) {
    if ( is_page_template( 'invest.php' ) || is_page_template( 'resources.php' )  ) {
        return $output = 'color_logo';
    }
    if ( is_page_template( 'invest-bond.php' ) ) {
        return $output = 'logo_orange';
    }
    if ( is_page_template( 'invest-suistain.php' ) ) {
        return $output = 'logo_screen';
    }
    if ( is_page_template( 'invest-tech.php' ) ) {
        return $output = 'logo_lightgrey';
    }
    if ( is_page_template( 'invest-healthcare.php' ) ) {
        return $output = 'logo_lightblue';
    }
    if ( is_page_template( 'invest-diversity.php' ) ) {
        return $output = 'logo_lightdarkblue';
    }
    if ( is_page_template( 'invest-generic.php' ) ) {
        return $output = 'logo_lightdarkgreen';
    }
    return $output = 'color_logo';
}
add_filter('footer_logo_flag', 'change_footer_logo');

/* handle login */
//Function login page
function redirect_login_page() {
    $login_page = home_url( '/login/' );
    $page_viewed = basename($_SERVER['REQUEST_URI']);
     
    if( $page_viewed == "wp-login.php" && $_SERVER['REQUEST_METHOD'] == 'GET') {
        wp_redirect($login_page);
        exit;
    }
}
add_action('init','redirect_login_page');

// add lost password text
add_action( 'login_form_middle', 'add_lost_password_link' );
function add_lost_password_link() {
    return '<a class="lost-password" href="../wp-login.php?action=lostpassword">Lost Password?</a>';
}

//Login Failed
function login_failed() {
    $login_page = home_url( '/login/' );
    wp_redirect( $login_page . '?login=failed' );
    exit;
}
add_action( 'wp_login_failed', 'login_failed' );

//Login failed pass or user
function verify_username_password( $user, $username, $password ) {
    $login_page = home_url( '/login/' );
    if( $username == "" || $password == "" ) {
        wp_redirect( $login_page . "?login=empty" );
        exit;
    }
}
add_filter( 'authenticate', 'verify_username_password', 1, 3);

//Log Out
function logout_page() {
    $login_page = home_url( '/login/' );
    wp_redirect( $login_page . "?login=false" );
    exit;
}
add_action('wp_logout','logout_page');

// Handle password lost page
/**
 * Redirects the user to the custom "Forgot your password?" page instead of
 * wp-login.php?action=lostpassword.
 */
function redirect_to_custom_lostpassword() {
    global $pagenow;

    if ( $pagenow == 'wp-login.php' && 
        isset( $_REQUEST[ 'action' ] ) && 
        $_REQUEST[ 'action' ] == 'lostpassword' && 
        ! isset( $_REQUEST[ 'skip' ] )
    ) {
        wp_redirect( home_url( '/password-lost' ) );
        exit;;
    }

}
add_action('init','redirect_to_custom_lostpassword');
	
add_theme_support( 'post-thumbnails' );