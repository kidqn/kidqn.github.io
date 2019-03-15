<?php 
/*
 * Template Name: password lost
 */?>
<?php get_header();?>
    <main id="main">
        <section id="login-area"> 
            <div class="container uplift-container">
                <div class="inner">
                    <div class="wrapper-login-form">
                        <h2 class="title"><span>Lost password</span></h2>
                        <?php
                            global $wpdb;

                            $error = '';
                            $success = '';

                            // check if we're in reset form
                            if( isset( $_POST['action'] ) && 'reset' == $_POST['action'] ) 
                            {
                                $email = $wpdb->escape(trim($_POST['email']));

                                if( empty( $email ) ) {
                                    $error = 'Enter a username or e-mail address..';
                                } else if( ! is_email( $email )) {
                                    $error = 'Invalid username or e-mail address.';
                                } else if( ! email_exists( $email ) ) {
                                    $error = 'There is no user registered with that email address.';
                                } else {

                                    $random_password = wp_generate_password( 12, false );
                                    $user = get_user_by( 'email', $email );

                                    $update_user = wp_update_user( array (
                                            'ID' => $user->ID, 
                                            'user_pass' => $random_password
                                        )
                                    );

                                    // if  update user return true then lets send user an email containing the new password
                                    if( $update_user ) {
                                        $to = $email;
                                        $subject = 'Your new password';
                                        $sender = get_option('name');

                                        $message = 'Your new password is: '.$random_password;

                                        $headers[] = 'MIME-Version: 1.0' . "\r\n";
                                        $headers[] = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
                                        $headers[] = "X-Mailer: PHP \r\n";
                                        $headers[] = 'From: '.$sender.' <'.$email.'>' . "\r\n";

                                        $mail = wp_mail( $to, $subject, $message, $headers );
                                        if( $mail )
                                            $success = 'Check your email address for you new password.';

                                    } else {
                                        $error = 'Oops something went wrong updaing your account.';
                                    }

                                }

                                if( ! empty( $error ) )
                                    echo '<div class="message"><p class="error"><strong>ERROR:</strong> '. $error .'</p></div>';

                                if( ! empty( $success ) )
                                    echo '<div class="error_login"><p class="success">'. $success .'</p></div>';
                            }
                        ?>
                        <!--html code-->
                        <form method="post">
                            <fieldset>
                                <p>Please enter your username or email address. You will receive a link to create a new password via email.</p>
                                <p><label for="user_login">Username or E-mail:</label>
                                    <input type="text" name="user_login" id="user_login"  value="" /></p>
                                <p>
                                    <input type="hidden" name="action" value="reset" />
                                    <input type="submit" value="Get New Password" class="button" id="submit" />
                                </p>
                            </fieldset> 
                        </form>
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
