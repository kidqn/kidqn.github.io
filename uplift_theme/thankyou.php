<?php
/* Template Name: thankyou*/

get_header(); ?>

	<main id="main">
      <section id="share-idea">
          <div class="container uplift-container">
            <div class="head-info">
                <h2 class="title">THANK YOU</h2>
                <p class="intro">Thank you for sending us your idea, together we can make the world better. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <h4>Share the idea with your friend:</h4>
            <form action="/sharenow" role="form" id="sharenow-form" class="sharenow-field input-group">
                <input type="email" name=""
                class="form-control top-search-field" value="Kurtcobain@music.com"  title="" placeholder="Email Address">
                <button type="button" id="subscribe-bottom-btn" class="btn btn_round">Share now</button>
            </form>
            <p class="note">Use a comma and make a space to send to more than 1 recipient. </p>
            <p class="sub-note">(EmailExample1@gmail.com, Example2@iCloud.com)</p>
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
      <?php get_footer(); ?>
	</main><!-- .site-main -->
