<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>

    <footer id="footer" class="<?php 
        $flag="";
        echo apply_filters('footer_flag', $flag);
      ?>">
      <div class="container uplift-container">
        <div class="wrapper navbar">
          <div class="left-side">
            <div class="logo">
              <img src="<?php bloginfo('template_directory') ?>/images/<?php 
                    $flag="color_logo";
                    echo apply_filters('footer_logo_flag', $flag);
              ?>.svg" alt="">
            </div>
            <p class="copyright">© Uplift. Copyright 2018</p>
          </div>
          <div class="mid-side">
            <ul class="footer-mid-menu row-flex">
              <li>
                  <a href="<?php bloginfo('url');?>/invest" class="nav-link">
                    Invest            
                  </a>
                  <a href="<?php bloginfo('url');?>/pricing" class="nav-link">
                    Pricing
                  </a>
                  <a href="<?php bloginfo('url');?>/resources" class="nav-link">
                    Resource                       
                  </a>
                  <!-- <a href="#" class="nav-link">
                    Institutional 
                  </a> -->
              </li>

              <li>
                  <a href="<?php bloginfo('url');?>/company" class="nav-link">
                    Company                     
                  </a>
                  <a href="#" class="nav-link">
                    Disclaimer
                  </a>
                  <a href="<?php bloginfo('url');?>/contact" class="nav-link">
                    Contact                       
                  </a>
                  <!-- <a href="#"class="nav-link">
                    FAQ 
                  </a> -->
              </li>

              <li>
                  <!-- <a href="#" class="nav-link">
                    Giving                     
                  </a>
                  <a href="#" class="nav-link">
                    Build Your Own Portfolio
                  </a> -->
                  <a href="#" class="nav-link">
                    Suggest a Theme                       
                  </a>
              </li>
            </ul>
          </div>
          <div class="right-side">
            <a href="#" class="nav-link">
              Follow us                     
            </a>
            <ul class="social-follow">
              <li>
                <a href="https://www.facebook.com/UpliftInvesting/" class="fb">
                  <img src="<?php bloginfo('template_directory') ?>/images/footer/social-fb<?php 
                    $flag="";
                    echo apply_filters('footer_social_icon_flag', $flag);
                  ?>.svg" alt="logo uplift">
                </a>
              </li>
              <li>
                <a href="https://twitter.com/upliftinvesting" class="twitter">
                  <img src="<?php bloginfo('template_directory') ?>/images/footer/social-twitter<?php 
                    $flag="";
                    echo apply_filters('footer_social_icon_flag', $flag);
                  ?>.svg" alt="logo uplift">
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/upliftinvesting/about/" class="linkedin">
                  <img src="<?php bloginfo('template_directory') ?>/images/footer/social-linkedin<?php 
                    $flag="";
                    echo apply_filters('footer_social_icon_flag', $flag);
                  ?>.svg" alt="logo uplift">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    <script src="<?php bloginfo('template_directory') ?>/vendors/owlcarousel/owl.carousel.min.js"></script>
    <script src="<?php bloginfo('template_directory') ?>/vendors/jquery-mousewheel/jquery.mousewheel.min.js"></script> 
    <!-- FontAwesome -->
    <script defer src="https://use.fontawesome.com/releases/v5.6.3/js/all.js" integrity="sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1" crossorigin="anonymous"></script>  
    <!-- custom js -->
    <?php wp_footer(); ?>

  </body>
</html>
