<?php

// Serve a static HTML page if the Timber plugin is not activated
if (!class_exists('Timber')) {
    add_action('admin_notices', function() {
        echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url(admin_url('plugins.php#timber')) . '">' . esc_url(admin_url('plugins.php')) . '</a></p></div>';
    });

    add_filter('template_include', function($template) {
        return get_stylesheet_directory() . '/static/no-timber.html';
    });

    return;
}

// Adds directories for Twig files
Timber::$dirname = array('templates');

// Turns off Twig autoescape feature
Timber::$autoescape = false;

/**
 * Class StandardIndustries
 */
class StandardIndustries extends Timber\Site {
    /**
     * StandardIndustries constructor, sets up Timber support
     */
    public function __construct() {
        // Default registrations
        add_action('after_setup_theme', array($this, 'theme_supports'));
        add_filter('timber_context', array($this, 'add_to_context'));
        add_filter('get_twig', array($this, 'add_to_twig'));

        // Custom types
        add_action('init', array($this, 'register_post_types'));
        add_action('init', array($this, 'register_taxonomies'));

        // Disable comments
        add_action('admin_init', array($this, 'disable_comments_admin_init'));
        add_filter('comments_open', '__return_false', 20, 2);
        add_filter('pings_open', '__return_false', 20, 2);
        add_filter('comments_array', '__return_empty_array', 10, 2);
        add_action('admin_menu', array($this, 'disable_comments_admin_menu'));
        add_action('init', array($this, 'disable_comments_init'));

        // Enqueue theme files
        add_action('wp_enqueue_scripts', array($this, 'enqueue_theme'));

        parent::__construct();
    }

    /**
     * Adds items to the Timber context
     * @param $context
     * @return mixed
     */
    public function add_to_context($context) {
        $context['menu'] = new Timber\Menu();
        $context['site'] = $this;
        return $context;
    }

    /**
     * Registers extensions to Twig
     * @param $twig
     * @return mixed
     */
    public function add_to_twig($twig) {
        $twig->addExtension(new Twig_Extension_StringLoader());
        $twig->addFilter(new Twig_SimpleFilter('exclaim', array($this, 'exclaim')));
        return $twig;
    }

    /**
     * Disables comments on admin_init hook
     */
    public function disable_comments_admin_init() {
        // Redirect any user trying to access comments page
        global $pagenow;

        if ($pagenow === 'edit-comments.php') {
            wp_redirect(admin_url());
            exit;
        }

        // Remove comments metabox from dashboard
        remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');

        // Disable support for comments and trackbacks in post types
        foreach (get_post_types() as $post_type) {
            if (post_type_supports($post_type, 'comments')) {
                remove_post_type_support($post_type, 'comments');
                remove_post_type_support($post_type, 'trackbacks');
            }
        }
    }

    /**
     * Disables comments on admin_menu hook
     */
    public function disable_comments_admin_menu() {
        remove_menu_page('edit-comments.php');
    }

    /**
     * Disables comments on init hook
     */
    public function disable_comments_init() {
        if (is_admin_bar_showing()) {
            remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
        }
    }

    /**
     * Disables the comment status
     * @return bool
     */
    public function disable_comments_status() {
        return false;
    }

    /**
     * Enqueues theme styles and scripts
     */
    public function enqueue_theme() {
        wp_enqueue_style('standard-industries-styles', get_stylesheet_directory_uri() . '/dist/app.css');
        wp_enqueue_script('standard-industries-scripts', get_stylesheet_directory_uri() . '/dist/app.js', null, false, true);
    }

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
     * Registers custom post types
     */
    public function register_post_types() {

    }

    /**
     * Registers custom taxonomies
     */
    public function register_taxonomies() {

    }

    /**
     * Registers theme supports
     */
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
                'gallery',
                'caption',
            )
        );

        // Add support for post formats (https://codex.wordpress.org/Post_Formats)
        add_theme_support(
            'post-formats', array(
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
}

new StandardIndustries();
