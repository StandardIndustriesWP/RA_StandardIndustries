<?php

include_once('utils/modules.php');

// Load modules
$modules = RA\Modules::singleton();
$modules->init_modules('page_modules', 'page');
$modules->load_modules(get_stylesheet_directory() . '/modules/');
$modules->load_modules(get_stylesheet_directory() . '/fields/');

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
Timber::$dirname = ['templates'];

// Turns off Twig autoescape feature
Timber::$autoescape = false;

/**
 * Class StandardIndustries
 */
class StandardIndustries extends Timber\Site
{
    /**
     * StandardIndustries constructor, sets up Timber support
     */
    public function __construct()
    {
        // Disable Gutenberg editor
        // add_filter('use_block_editor_for_post', '__return_false');

        // Default registrations
        add_action('after_setup_theme', [$this, 'theme_supports']);
        add_filter('timber_context', [$this, 'add_to_context']);
        add_filter('get_twig', [$this, 'add_to_twig']);

        // Custom image sizes
        add_action('after_setup_theme', [$this, 'register_image_sizes']);
        add_filter('image_size_names_choose', [$this, 'register_image_size_names']);

        // Custom types
        add_action('init', [$this, 'register_menus']);
        add_action('init', [$this, 'register_post_types']);
        add_action('init', [$this, 'register_taxonomies']);

        // Disable comments
        add_action('admin_init', [$this, 'disable_comments_admin_init']);
        add_filter('comments_open', '__return_false', 20, 2);
        add_filter('pings_open', '__return_false', 20, 2);
        add_filter('comments_array', '__return_empty_array', 10, 2);
        add_action('admin_menu', [$this, 'disable_comments_admin_menu']);
        add_action('init', [$this, 'disable_comments_init']);

        // Disable pages in search
        add_filter('pre_get_posts', [$this, 'disable_search_results_pages']);

        // Enqueue theme files
        add_action('wp_enqueue_scripts', [$this, 'enqueue_theme']);

        parent::__construct();
    }

    /**
     * Adds items to the Timber context
     * @param $context
     * @return mixed
     */
    public function add_to_context($context)
    {
        $context['menu_header'] = new Timber\Menu('header');
        $context['menu_footer'] = new Timber\Menu('footer');
        $context['menu_copyright'] = new Timber\Menu('copyright');
        $context['menu_news'] = new Timber\Menu('news');
        $context['theme_settings'] = get_fields('option');
        $context['site'] = $this;
        return $context;
    }

    /**
     * Registers extensions to Twig
     * @param $twig
     * @return mixed
     */
    public function add_to_twig($twig)
    {
        $twig->addExtension(new Twig_Extension_StringLoader());
        $twig->addFilter(new Twig_SimpleFilter('exclaim', [$this, 'exclaim']));
        return $twig;
    }

    /**
     * Disables comments on admin_init hook
     */
    public function disable_comments_admin_init()
    {
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
    public function disable_comments_admin_menu()
    {
        remove_menu_page('edit-comments.php');
    }

    /**
     * Disables comments on init hook
     */
    public function disable_comments_init()
    {
        if (is_admin_bar_showing()) {
            remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
        }
    }

    /**
     * Disables the comment status
     * @return bool
     */
    public function disable_comments_status()
    {
        return false;
    }

    /**
     * Removes pages from search results
     * @param $query
     * @return mixed
     */
    public function disable_search_results_pages($query) {
        if (!is_admin() && $query->is_search) {
            $query->set('post_type', 'post');
        }
        return $query;
    }

    /**
     * Enqueues theme styles and scripts
     */
    public function enqueue_theme() {
        wp_enqueue_style('standard-industries-styles', get_stylesheet_directory_uri() . '/dist/app.css');
        wp_enqueue_script('standard-industries-scripts', get_stylesheet_directory_uri() . '/dist/vendor.js', null, false, true);
        wp_enqueue_script('standard-industries-scripts', get_stylesheet_directory_uri() . '/dist/app.js', null, false, true);
    }

    /**
     * Example filter to be added to Twig, adds and exclamation mark
     * @param $text
     * @return string
     */
    public function exclaim($text)
    {
        $text .= '!';
        return $text;
    }

    /**
     * Registers custom image sizes
     */
    public function register_image_sizes() {
        add_image_size('extra_large', 1440, 1440);
        add_image_size('header_large', 1920, 1920);
    }

    /**
     * Registers custom image size names for admin
     * @param $sizes
     * @return array
     */
    public function register_image_size_names($sizes) {
        return array_merge($sizes, [
            'medium_large' => __('Medium Large'),
            'extra_large' => __('Extra Large'),
            'header_large' => __('Header Large')
        ]);
    }

    /**
     * Registers nav menus
     */
    public function register_menus()
    {
        register_nav_menus([
            'header' => __('Header', 'standard-industries'),
            'footer' =>  __('Footer', 'standard-industries'),
            'copyright' => __('Copyright', 'standard-industries'),
            'news' => __('News', 'standard-industries')
        ]);
    }

    /**
     * Registers custom post types
     */
    public function register_post_types()
    {
        register_post_type('team-member', [
            'label' => __('Team Member', 'standard-industries'),
            'description' => __('Team member profiles.', 'standard-industries'),
            'labels' => [
                'name'                  => _x('Team Members', 'Post Type General Name', 'standard-industries'),
                'singular_name'         => _x('Team Member', 'Post Type Singular Name', 'standard-industries'),
                'menu_name'             => __('Team Members', 'standard-industries'),
                'name_admin_bar'        => __('Team Members', 'standard-industries'),
                'archives'              => __('Team Members Archive', 'standard-industries'),
                'attributes'            => __('Team Members Attributes', 'standard-industries'),
                'parent_item_colon'     => __('Parent Item:', 'standard-industries'),
                'all_items'             => __('All Team Members', 'standard-industries'),
                'add_new_item'          => __('Add New Team Member', 'standard-industries'),
                'add_new'               => __('Add New', 'standard-industries'),
                'new_item'              => __('New Team Member', 'standard-industries'),
                'edit_item'             => __('Edit Team Member', 'standard-industries'),
                'update_item'           => __('Update Team Member', 'standard-industries'),
                'view_item'             => __('View Team Member', 'standard-industries'),
                'view_items'            => __('View Team Members', 'standard-industries'),
                'search_items'          => __('Search Team Members', 'standard-industries'),
                'not_found'             => __('Not found', 'standard-industries'),
                'not_found_in_trash'    => __('Not found in Trash', 'standard-industries'),
                'featured_image'        => __('Featured Image', 'standard-industries'),
                'set_featured_image'    => __('Set featured image', 'standard-industries'),
                'remove_featured_image' => __('Remove featured image', 'standard-industries'),
                'use_featured_image'    => __('Use as featured image', 'standard-industries'),
                'insert_into_item'      => __('Insert into Team Member', 'standard-industries'),
                'uploaded_to_this_item' => __('Uploaded to this Team Member', 'standard-industries'),
                'items_list'            => __('Team Members list', 'standard-industries'),
                'items_list_navigation' => __('Team Members list navigation', 'standard-industries'),
                'filter_items_list'     => __('Filter Team Members list', 'standard-industries')
            ],
            'supports' => ['title', 'thumbnail', 'custom-fields', 'revisions'],
            'hierarchical' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'menu_position' => 5,
            'publicly_queryable' => true,
            'rewrite' => false,
        ]);
    }

    /**
     * Registers custom taxonomies
     */
    public function register_taxonomies()
    {

    }

    /**
     * Registers theme supports
     */
    public function theme_supports()
    {
        // Add default posts and comments RSS feed links to head
        add_theme_support('automatic-feed-links');

        // Add title tag support
        add_theme_support('title-tag');

        // Add featured image / post thumbnail support
        add_theme_support('post-thumbnails');

        // Add html5 markup support for search form, comment form, comments
        add_theme_support('html5', [
            'gallery',
            'caption'
        ]);

        // Add support for post formats (https://codex.wordpress.org/Post_Formats)
        add_theme_support('post-formats', []);

        // Add support for menus
        add_theme_support('menus');
    }
}

new StandardIndustries();
