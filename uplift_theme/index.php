<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

    <main id="main">
        <section id="banner-video">
            <div class="home-banner-img"></div>
            <video id="uplift-video" loop="loop" preload="auto" class="uplift-video" id="uplift-video" autoplay="autoplay" poster="<?php bloginfo('template_directory') ?>/images/banner_video_image.jpg">
                <source src="" type="video/mp4">
            </video>
            <div class="container uplift-container">
              <div class="head-info">
                  <h1 class="title">INVEST TO MAKE <br>
                    A WORLD OF DIFFERENCE</h1>
                    
                  <p class="intro">Why sacrifice your value for financial returns? <br>
                    You can get the best of both worlds</p>

                  <a class="btn btn_round btn_round-green" href="#" id="discovery-today">DISCOVER UPLIFT TODAY</a>
              </div>
            </div>
        </section>
        <section id="about">
            <div class="container uplift-container">
              <div class="head-info">
                <h2 class="title">We care about INVESTING with social impact</h2>
                <p class="intro"><b>UPLIFT INVESTING</b> is a data driven Investment Advisory platform helping clients secure their financial future through Socially Conscious Investing.</p>
              </div>
            </div>
        </section>

        <section id="embrace-your-power">
            <div class="container uplift-container">
              <div class="sidebar">
                <img src="<?php bloginfo('template_directory') ?>/images/shape.svg" alt="shape">
                <h3>Socially Responsible Investing does not have to sacrifice returns</h3>
                <p>Environmental, Social and Governance (ESG) refers to the three central factors in measuring the sustainability 
                  and ethical impact of an investment in a company or a business. By supporting companies and projects with 
                  leading sustainability and ethical business practices collectively, our clients achieve the social benefits desired as well as the financial rewards.</p>
              </div>
              <div class="head-info">
                  <h4 class="title">EMBRACE YOUR POWER AS INVESTORS</h4>
                  <p class="intro">Tell us the values that you care about and we are here to listen.</p>
              </div>
              <div class="how-it-works">
                <h3 class="headline-line-through"><span>Together we can</span></h3>
                <div class="row">
                  <div class="col-md-4 item">
                    <div class="icon"><img src="<?php bloginfo('template_directory') ?>/images/money-bag.svg" alt=""></div>
                    <p>Secure your financial future</p>
                  </div>
                  <div class="col-md-4 item">
                      <div class="icon"><img src="<?php bloginfo('template_directory') ?>/images/chat.svg" alt=""></div>
                      <p>Give voice to the values that you care about</p>
                  </div>
                  <div class="col-md-4 item">
                      <div class="icon"><img src="<?php bloginfo('template_directory') ?>/images/combined-shape.svg" alt=""></div>
                      <p>Ensure the world is sustainable for future generations</p>
                  </div>
                </div>
                <div class="nav-bottom"><a href="">SEE HOW IT WORKS</a></div>
              </div>
            </div>
        </section>

        <section id="portfolios">
          <div class="container uplift-container">
            <div class="wrapper">
                <h2 class="title">
                    Our Equity Model Portfolios by ESG themes
                </h2>
                <p class="intro">See performance of our ESG thematic portfolios</p>
    
                <div class="row uplift-row list-models">
                  <div class="col-lg-4 item">
                    <a class="card h-100" href="#">
                      <div class="card-body">
                          <div class="icon">
                              <img src="<?php bloginfo('template_directory') ?>/images/homep/model-subtain.svg" alt="...">
                          </div>
                          <h3 class="card-title">Sustainability</h3>
                          <p class="card-text">You always get to choose how to invest your money, but you'll never be alone. 
                              We give you the choices, tools, and tips you need to build a portfolio that reflects you.</p>
                          <h4 class="card-heading">Sample Holdings:</h4>
                          <p class="card-text">Apple Inc, Facebook Inc, Microsoft Inc, Google Inc, Cisco Systems Inc...</p>
                      </div>
                      <div class="card-label"></div>
                    </a>
                  </div>
                  <div class="col-lg-4 item">
                    <a class="card h-100" href="#">
                      <div class="card-body">
                          <div class="icon">
                              <img src="<?php bloginfo('template_directory') ?>/images/homep/model-tech.svg" alt="...">
                          </div>                          <h3 class="card-title">TECHNOLOGY</h3>
                          <p class="card-text">You always get to choose how to invest your money, but you'll never be alone. 
                              We give you the choices, tools, and tips you need to build a portfolio that reflects you.</p>
                          <h4 class="card-heading">Sample Holdings:</h4>
                          <p class="card-text">Apple Inc, Facebook Inc, Microsoft Inc, Google Inc, Cisco Systems Inc...</p>
                      </div>
                      <div class="card-label"></div>
                    </a>
                  </div>
                  <div class="col-lg-4 item">
                    <a class="card h-100" href="#">
                      <div class="card-body">
                          <div class="icon">
                              <img src="<?php bloginfo('template_directory') ?>/images/homep/model-health.svg" alt="...">
                          </div>                        <h3 class="card-title">HEALTHCARE</h3>
                          <p class="card-text">You always get to choose how to invest your money, but you'll never be alone. 
                              We give you the choices, tools, and tips you need to build a portfolio that reflects you.</p>
                          <h4 class="card-heading">Sample Holdings:</h4>
                          <p class="card-text">Apple Inc, Facebook Inc, Microsoft Inc, Google Inc, Cisco Systems Inc...</p>
                      </div>
                      <div class="card-label"></div>
                    </a>
                  </div>
                  <div class="col-lg-4 item">
                    <a class="card h-100" href="#">
                      <div class="card-body">
                          <div class="icon">
                              <img src="<?php bloginfo('template_directory') ?>/images/homep/model-balance.svg" alt="...">
                          </div>
                          <h3 class="card-title">DIVERSITY &amp; INCLUSION
                          </h3>
                          <p class="card-text">You always get to choose how to invest your money, but you'll never be alone. 
                              We give you the choices, tools, and tips you need to build a portfolio that reflects you.</p>
                          <h4 class="card-heading">Sample Holdings:</h4>
                          <p class="card-text">Apple Inc, Facebook Inc, Microsoft Inc, Google Inc, Cisco Systems Inc...</p>
                      </div>
                      <div class="card-label">
                      </div>
                    </a>
                  </div>
                  <div class="col-lg-4 item">
                    <a class="card h-100" href="#">
                      <div class="card-body">
                          <div class="icon">
                              <img src="<?php bloginfo('template_directory') ?>/images/homep/model-esg.svg" alt="...">
                          </div>
                          <h3 class="card-title">GENERIC ESG</h3>
                          <p class="card-text">You always get to choose how to invest your money, but you'll never be alone. 
                              We give you the choices, tools, and tips you need to build a portfolio that reflects you.</p>
                          <h4 class="card-heading">Sample Holdings:</h4>
                          <p class="card-text">Apple Inc, Facebook Inc, Microsoft Inc, Google Inc, Cisco Systems Inc...</p>
                      </div>
                      <div class="card-label">
                      </div>
                    </a>
                  </div>
                  <div class="col-lg-4 item">
                    <div class="card h-100 sidebar">
                        <div class="card-body text-white">
                            <div class="icon">
                                <img src="<?php bloginfo('template_directory') ?>/images/homep/build-your-own.svg" alt="...">
                            </div>
                            <h3 class="card-title">Build your own</h3>
                            <p class="card-text">You always get to choose how to invest your money, but you'll never be alone. 
                                We give you the choices, tools, and tips you need to build a portfolio that reflects you.</p>
                        </div>
                        <div class="card-footer">
                          <a href="#">Contact us now</a>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section id="become-investor">
          <div class="container uplift-container">
            <div class="head-info">
              <h3 class="title">
                Become An Impact Investor Now
              </h3>
              <p class="intro">
                There is no longer a tradeoff between social good and reaching your financial goals. 
              </p>
              <a class="btn  btn_round btn_round-green" href="#" id="start-invest">Start Investing</a>
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
              <button type="button" id="subscribe-bottom-btn" class="btn btn_round btn_round-darkgreen">Submit</button>
            </form>
          </div>
        </section>
    </main>

<?php get_footer(); ?>
