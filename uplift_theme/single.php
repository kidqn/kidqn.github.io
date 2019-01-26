<?php
/**
 * The template for displaying all single posts and attachments
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

			// Include the single post content template.
			get_template_part( 'template-parts/content', 'single' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) {
				comments_template();
			}

			if ( is_singular( 'attachment' ) ) {
				// Parent post navigation.
				the_post_navigation( array(
					'prev_text' => _x( '<span class="meta-nav">Published in</span><span class="post-title">%title</span>', 'Parent post link', 'uplifttheme' ),
				) );
			} elseif ( is_singular( 'post' ) ) {
				// Previous/next post navigation.
				the_post_navigation( array(
					'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Next', 'uplifttheme' ) . '</span> ' .
						'<span class="screen-reader-text">' . __( 'Next post:', 'uplifttheme' ) . '</span> ' .
						'<span class="post-title">%title</span>',
					'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Previous', 'uplifttheme' ) . '</span> ' .
						'<span class="screen-reader-text">' . __( 'Previous post:', 'uplifttheme' ) . '</span> ' .
						'<span class="post-title">%title</span>',
				) );
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
		<?php get_footer(); ?>
	</main><!-- .site-main -->

