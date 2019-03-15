<?php 
/*
 * Template Name: login page
 */?>
<?php get_header();?>
    <main id="main">
        <section id="login-area"> 
            <div class="container uplift-container">
                <div class="inner">
                    <div class="wrapper-login-form">
                        <h2 class="title"><span>Login</span></h2>
                        <?php  
                        $login  = (isset($_GET['login']) ) ? $_GET['login'] : 0;
                        if ( $login === "failed" ) {  
                            echo '<p class="login-msg"><strong>ERROR:</strong> Invalid username and/or password.</p>';  
                        } elseif ( $login === "empty" ) {  
                            echo '<p class="login-msg"><strong>ERROR:</strong> Username and/or Password is empty.</p>';  
                        } elseif ( $login === "false" ) {  
                            echo '<p class="login-msg"><strong>ERROR:</strong> You are logged out.</p>';  
                        }
                        $args = array(  
                            'redirect' => home_url(),   
                            'form_id'  => 'uplift-login-form',
                            'label_username' => __( 'Email Address:' ),
                            'label_password' => __( 'Password' ),
                            // 'label_remember' => __( 'Remeber me' ),
                            'label_log_in'   => __( 'Login' ),
                            'id_username' => 'user',  
                            'id_password' => 'pass',  
                            )   
                        ;?>  
                        <?php wp_login_form( $args ); ?>  
                    </div>
                </div>
            </div>
        </section>

        <section id="subscribe">
            <div class="container uplift-container">
            <div class="icon"><img src="<?php bloginfo('template_directory') ?>/images/homep/email.svg" alt="email"></div>
            <h3 class="headline-line-through headline-line-through-black"><span>Sign Up For Our Newsletter</span></h3>
            <form action="/subscribe" role="form" id="mc-subscribe-bot-form" class="subscribe-field input-group">
                <input type="email" name="" id="join-uplift-bottom" 
                    class="form-control top-search-field" value=""  title="" placeholder="Email Address">
                <button type="button" id="subscribe-bottom-btn" class="btn btn_round  btn_round-darkgreen">Submit</button>
            </form>
            </div>
        </section>
    </main>
<?php get_footer();?>  
