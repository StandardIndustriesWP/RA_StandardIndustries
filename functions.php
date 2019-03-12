<?php

if (!class_exists('Timber')) {
    add_action('admin_notices', function() {
        echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url(admin_url('plugins.php#timber')) . '">' . esc_url(admin_url('plugins.php')) . '</a></p></div>';
    });

    add_filter('template_include', function($template) {
        return get_stylesheet_directory() . '/static/no-timber.html';
    });

    return;
}

Timber::$dirname = array('templates');
Timber::$autoescape = false;

/**
 * Class StandardIndustries
 */
class StandardIndustries extends Timber\Site {
    // Add Timber support
    public function __construct() {
        add_action('after_setup_theme', array($this, 'theme_supports'));
        add_filter('timber_context', array($this, 'add_to_context'));
        add_filter('get_twig', array($this, 'add_to_twig'));
        add_action('init', array($this, 'register_post_types'));
        add_action('init', array($this, 'register_taxonomies'));
        parent::__construct();
    }

    // Custom post types
    public function register_post_types() {

    }

    // Custom taxonomies
    public function register_taxonomies() {

    }

    /**
     * This is where you add some context
     * @param string $context context['this'] Being the Twig's {{ this }}
     */

    /**
     * Adds initial items to the context (can be changed in-template)
     * @param $context
     * @return mixed
     */
    public function add_to_context($context) {
        $context['menu'] = new Timber\Menu();
        $context['site'] = $this;
        return $context;
    }

    public function theme_supports() {
        // Add default posts and comments RSS feed links to head
        add_theme_support('automatic-feed-links');

        // Add title tag support
        add_theme_support('title-tag');

        // Add featured image / post thumbnail support
        add_theme_support('post-thumbnails');

        // Add html5 markup support for search form, comment form, comments
        add_theme_support(
            'html5', array(
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
            )
        );

        // Add support for post formats (https://codex.wordpress.org/Post_Formats)
        add_theme_support(
            'post-formats', array(
                'aside',
                'image',
                'video',
                'quote',
                'link',
                'gallery',
                'audio',
           )
       );

        // Add support for menus
        add_theme_support('menus');
    }

    /** This Would return 'foo bar!'
     * @param string $text being 'foo', then returned 'foo bar!'
     */

    /**
     * Example filter to be added to Twig, adds and exclamation mark
     * @param $text
     * @return string
     */
    public function exclaim($text) {
        $text .= '!';
        return $text;
    }

    /**
     * Register extensions to Twig
     * @param $twig
     * @return mixed
     */
    public function add_to_twig($twig) {
        $twig->addExtension(new Twig_Extension_StringLoader());
        $twig->addFilter(new Twig_SimpleFilter('exclaim', array($this, 'exclaim')));
        return $twig;
    }

}

new StandardIndustries();
