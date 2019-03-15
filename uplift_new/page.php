<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

	<main id="main">
		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();

			// Include the page content template.
			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) {
				comments_template();
			}

			// End of the loop.
		endwhile;
		?>
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
	</main><!-- .site-main -->
	
<?php get_footer(); ?>
