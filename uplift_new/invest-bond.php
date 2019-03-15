<?php
/* Template Name: invest-bond */

get_header(); ?>

    <main id="main">
        <section id="banner-video">
            <div class="container uplift-container">
              <div class="head-info">
                  <h2 class="strap">Invest in</h2>
                  <h1 class="title">IMPACT BONDS</h1>
                    
                  <p class="intro">Finance public projects around the country while earning interest on your 
                      investment with municipal bonds. Find open offerings and follow upcoming ones to stay in the loop.</p>

                  <a class="btn btn_round btn_round-black" href="#" id="discovery-today">Invest NOW</a>
                  <div class="image">
                      <img src="<?php bloginfo('template_directory') ?>/images/investbondp/combined-shape.svg" alt="">
                  </div>
              </div>
            </div>
        </section>

        <section id="impact-themes">
            <div class="container uplift-container">
                <div class="head-info">
                    <h2 class="title">
                        The Impact Themes
                    </h2>
                    <p class="intro">
                        Finance public projects around the country while earning interest on your investment with municipal bonds.<br> 
                        Find open offerings and follow upcoming ones to stay in the loop.
                    </p>
                </div>
                <div class="row uplift-row-article list-article">
                    <div class="col-lg-4 wrapper no-border">
                        <div class="article">
                            <img class="article-img-top" src="<?php bloginfo('template_directory') ?>/images/investbondp/article_01.png" alt="Card image cap">
                            <div class="article-body">
                            <a href="#"><h5 class="title">Card title</h5></a>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="article-footer">
                                <a href="#">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wrapper no-border">
                        <div class="article">
                            <img class="article-img-top" src="<?php bloginfo('template_directory') ?>/images/investbondp/article_01.png" alt="Card image cap">
                            <div class="article-body">
                            <a href="#"><h5 class="title">Card title</h5></a>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="article-footer">
                                <a href="#">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wrapper no-border">
                        <div class="article">
                            <img class="article-img-top" src="<?php bloginfo('template_directory') ?>/images/investbondp/article_01.png" alt="Card image cap">
                            <div class="article-body">
                            <a href="#"><h5 class="title">Card title</h5></a>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="article-footer">
                                <a href="#">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wrapper no-border">
                        <div class="article">
                            <img class="article-img-top" src="<?php bloginfo('template_directory') ?>/images/investbondp/article_01.png" alt="Card image cap">
                            <div class="article-body">
                            <a href="#"><h5 class="title">Card title</h5></a>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="article-footer">
                                <a href="#">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wrapper no-border">
                        <div class="article">
                            <img class="article-img-top" src="<?php bloginfo('template_directory') ?>/images/investbondp/article_01.png" alt="Card image cap">
                            <div class="article-body">
                            <a href="#"><h5 class="title">Card title</h5></a>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="article-footer">
                                <a href="#">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wrapper no-border">
                        <div class="article">
                            <img class="article-img-top" src="<?php bloginfo('template_directory') ?>/images/investbondp/article_01.png" alt="Card image cap">
                            <div class="article-body">
                            <a href="#"><h5 class="title">Card title</h5></a>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="article-footer">
                                <a href="#">View detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="become-investor" class="become-investor-orange">
          <div class="container uplift-container">
            <div class="head-info">
              <h3 class="title">
                    Make An Impact Now
              </h3>
              <p class="intro">
                There is no longer a tradeoff between social good and reaching your financial goals.               
                </p>
              <a class="btn btn_round btn_round-black" href="<?php bloginfo('url');?>/start-invest" id="start-invest">Start Investing</a>
              <h6 class="note">Start MAKE A SUGGESTION FOR IMPACT</h6>
            </div>
          </div>
        </section>

        <section id="subscribe">
          <div class="container uplift-container">
            <div class="icon"><img src="<?php bloginfo('template_directory') ?>/images/email-black.svg" alt="email"></div>
            <h3 class="headline-line-through headline-line-through-black"><span>Sign Up For Our Newsletter</span></h3>
            <form action="/subscribe" role="form" id="mc-subscribe-bot-form" class="subscribe-field input-group">
              <input type="email" name="" id="join-uplift-bottom" 
                  class="form-control top-search-field" value=""  title="" placeholder="Email Address">
              <button type="button" id="subscribe-bottom-btn" class="btn btn_round btn_round-green btn_round-black">Submit</button>
            </form>
          </div>
        </section>
    </main>

<?php get_footer(); ?>
