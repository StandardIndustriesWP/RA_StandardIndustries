<?php

use RA\Modules;

$modules = Modules::singleton();

$modules->add_module('Team List', 'team-list', 'page_modules', [
    array(
        'key' => 'field_5cb0fe2b62bde',
        'label' => 'Items',
        'name' => 'items',
        'type' => 'repeater',
        'instructions' => '',
        'required' => 1,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'collapsed' => '',
        'min' => 0,
        'max' => 0,
        'layout' => 'table',
        'button_label' => 'Add Item',
        'sub_fields' => array(
            array(
                'key' => 'field_5cb0fe6862bdf',
                'label' => 'Team Member',
                'name' => 'team_member',
                'type' => 'post_object',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'post_type' => array(
                    0 => 'team-member',
                ),
                'taxonomy' => '',
                'allow_null' => 0,
                'multiple' => 0,
                'return_format' => 'object',
                'ui' => 1,
            ),
        ),
    ),
]);
