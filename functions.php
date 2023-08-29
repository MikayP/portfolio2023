<?php

function main_css(){
    wp_enqueue_style('main_style', get_template_directory_uri()  . '/library/dist/styles/main.css'  );
    wp_enqueue_style('bootstrap-grid', get_template_directory_uri()  . '/library/bootstrap.min.css'  );
    wp_enqueue_style('AOS_css', 'https://unpkg.com/aos@2.3.1/dist/aos.css');
}

function my_scripts() {
    // Register the script like this for a plugin:
        
    wp_enqueue_script( 'main_js', get_template_directory_uri()  . '/library/dist/scripts/main.js', array('jquery'), '1.0', true);
    wp_script_add_data('main_js', 'type', 'module');  // Add this line
    wp_enqueue_script( 'AOS_js', 'https://unpkg.com/aos@2.3.1/dist/aos.js');

}

// function side_projects_css(){
//     wp_enqueue_style('project_style', get_template_directory_uri()  . '/library/dist/styles/side_projects/baby_tracker.css'  );
//     wp_enqueue_style('bootstrap-grid', get_template_directory_uri()  . '/library/bootstrap.min.css'  );
//     wp_enqueue_style('AOS_css', 'https://unpkg.com/aos@2.3.1/dist/aos.css');
// }


// function side_projects_scripts() {
//     // Register the script like this for a plugin:
//     wp_enqueue_script( 'project_js', get_template_directory_uri()  . '/library/dist/scripts/side_projects/baby_tracker.js', array('jquery'), '1.0', true);
//     wp_enqueue_script( 'AOS_js', 'https://unpkg.com/aos@2.3.1/dist/aos.js');

// }

add_theme_support( 'menus' );

// entually create conditional for css and js
// if (is_page_template('menu_and_footer.php')){
    add_action('wp_enqueue_scripts', 'main_css');
    add_action('wp_enqueue_scripts', 'my_scripts');

// }else{
//     add_action('wp_enqueue_scripts', 'side_projects_css');
//     add_action('wp_enqueue_scripts', 'side_projects_scripts');
// }

/* Add Featured Image Support To Your WordPress Theme */
function add_featured_image_support_to_your_wordpress_theme() {
    add_theme_support( 'post-thumbnails' );
    }
    add_action( 'after_setup_theme', 'add_featured_image_support_to_your_wordpress_theme' );
    
    
    /* This function allows you use odd and even classes */
    
    function oddeven_post_class ( $classes ) {
    global $current_class;
    $classes[] = $current_class;
    $current_class = ($current_class == 'odd') ? 'even' : 'odd';
    return $classes;
    }
    add_filter ( 'post_class' , 'oddeven_post_class' );
    global $current_class;
    $current_class = 'odd';

register_nav_menus( [ 'primary' => __( 'Primary Menu' ) ] );

function post_title_shortcode(){
    return get_the_title();
}
add_shortcode('post_title','post_title_shortcode');


add_action('wp_head','my_analytics', 20);
function my_analytics() {
?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MKEEY78DWZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MKEEY78DWZ');
</script>
<?php
}