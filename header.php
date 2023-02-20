<!DOCTYPE html>
<html>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name=viewport content="width=device-width, initial-scale=1">
    <title><?php bloginfo( 'name' ); ?></title>
    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
<header>


<!-- https://codepen.io/alvarotrigo/pen/RwQPGVv -->
    <button aria-label="Toggle menu" class="nav-button button-lines button-lines-x close" role="button" type="button">
      <span class="lines"></span>
    </button>
    <nav class="nav-wrapper">

<?php $args = [ 'theme_location' => 'primary' ];
wp_nav_menu( $args ); 
?>



</nav>

</header>
<div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>




