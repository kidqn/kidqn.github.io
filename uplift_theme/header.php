<?php
/**
 * The template for displaying the header
 */

?><!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/vendors/owlcarousel/owl.carousel.min.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/vendors/animate.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/style.css">
    <title>Uplift</title>
    <?php wp_head(); ?>
  </head>
<body <?php body_class(); ?>>
    <header id="top-nav" class="navbar <?php 
        $flag="";
        echo apply_filters('header_flag', $flag);
      ?>">
        <a class="navbar-brand" href="<?php bloginfo('url');?>" aria-label="uplift">
            <img class="logo" src="<?php bloginfo('template_directory') ?>/images/<?php 
                  $flag="logo";
                  echo apply_filters('header_logo_flag', $flag);
            ?>.svg">
            <img class="logo-color" src="<?php bloginfo('template_directory') ?>/images/<?php 
                    $flag="color_logo";
                    echo apply_filters('footer_logo_flag', $flag);
            ?>.svg">
        </a>
      
        <div class="navbar-nav-scroll ml-auto mr-auto">
          <ul class="navbar-nav bd-navbar-nav flex-row menu-home">
            <li class="nav-item dropdown">
              <a class="nav-item nav-link" href="<?php bloginfo('url');?>/invest" id="invest-option">Invest</a>
              <div class="dropdown-menu sub-menu">
                <div class="sub-menu-container">
                  <div class="row h-100">
                    <div class="col-sm-5 left-side">
                        <h3 class="title">Investment Philosophy</h3>
                        <p>Our goal is to simplify socially responsible investing 
                          so that more people, collectively, can make an impact with their power as investors.</p>
                        <a href="#">LEARN MORE</a>
                    </div>
                    <div class="col-sm-7 right-side">
                        <h3 class="title">INVEST IN</h3>
                        <div class="row">
                          <div class="col-sm-6">
                              <ul>
                                <li>
                                  <a class="nav-link active" href="<?php bloginfo('url');?>/invest-suistain" >SUSTAINABILITY</a>
                                </li>
                                <li>
                                  <a class="nav-link active" href="<?php bloginfo('url');?>/invest-tech" >Technology
                                  </a>
                                </li>
                                <li>
                                    <a class="nav-link active" href="<?php bloginfo('url');?>/invest-healthcare" >Healthcare</a>
                                </li>
                              </ul>
                          </div>
                          <div class="col-sm-6">
                              <ul>
                                <li>
                                  <a class="nav-link active" href="<?php bloginfo('url');?>/invest-diversity" >Diversity & Inclusion
                                  </a>
                                </li>
                                <li>
                                  <a class="nav-link active" href="<?php bloginfo('url');?>/invest-generic" >Generic ESG
                                  </a>
                                </li>
                                <li>
                                  <a class="nav-link active" href="<?php bloginfo('url');?>/invest-bond" >IMPACT Bonds
                                  </a>
                                </li>
                              </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#" id="pricing-option">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#" id="esg-option">ESG LEADERS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" >Resources</a>
            </li>
          </ul>
        </div>
      
        <ul class="navbar-nav flex-row d-none d-md-flex right-menu">
          <li class="nav-item">
            <a class="nav-link active" href="#" >Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" >IB</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" >English</a>
          </li>
          <li>
            <a class="btn btn_round btn_round-green" href="#" id="start-invest">Start Investing</a>
          </li>
        </ul>
      
    </header>