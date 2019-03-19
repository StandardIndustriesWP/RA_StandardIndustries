<?php

/**
 * Class Modules, singleton, manages modules in the theme
 */
class Modules {
    /**
     * Singleton instance of Modules
     * @var Modules
     */
    private $instance;

    /**
     * Modules sections
     * @var array
     */
    private $sections = [];

    /**
     * Modules constructor, private for singleton
     */
    private function __construct()
    {

    }

    /**
     * Overrides __clone(), so that the singleton cannot be duped
     * @throws Exception
     */
    public function __clone() {
        throw new Exception('Modules is a singleton class.');
    }

    /**
     * Retrieves the singleton instance of Modules
     * @return Modules
     */
    public static function singleton()
    {
        if (isset(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * Adds a sub-module to "content_modules" flexible content field
     * @param $label
     * @param $slug
     * @param $section
     * @param $fields
     */
    public function add_module($label, $slug, $section, $fields)
    {
        $modules = &$this->sections[$section]['fields'][0]['layouts'];
        $key = md5($slug);

        $modules[$key] = [
            'key' => $key,
            'name' => $slug,
            'label' => $label,
            'display' => 'block',
            'sub_fields' => $fields,
        ];
    }

    /**
     * Attaches flexible content module to post type
     * @param $section
     * @param $post_type
     */
    public function init_modules($section, $post_type)
    {
        $this->sections[$section] = [
            'key' => 'group_' . md5($section),
            'title' => 'Content Modules',
            'fields' => [
                [
                    'key' => 'content_modules',
                    'label' => 'Modules',
                    'name' => 'modules',
                    'type' => 'flexible_content',
                    'layouts' => [],
                    'button_label' => 'Add Module',
                ],
            ],
            'location' => [
                [
                    [
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => $post_type,
                    ],
                ],
            ],
            'hide_on_screen' => [
                0 => 'the_content',
            ]
        ];
    }

    /**
     * Registers modules (field groups) with ACF
     */
    public function register_modules() {
        if (function_exists('acf_add_local_field_group')) {
            foreach ($this->sections as $section) {
                acf_add_local_field_group($section);
            }
        }
    }

    /**
     * Renders the template for a module
     * @param $post_id
     */
    public function render_modules($post_id) {
        if (function_exists('have_rows') && have_rows('content_modules', $post_id)) {
            while (have_rows('content_modules', $post_id)) {
                the_row();

                $layout = str_replace('_', '-', get_row_layout());
                get_template_part('modules/' . $layout . '/template');
            }
        }
    }
}
