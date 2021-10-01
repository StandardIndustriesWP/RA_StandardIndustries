<?php

use RA\Modules;

$modules = Modules::singleton();

$modules->add_module('Small Team Grid', 'small-team-grid', 'page_modules', [
    array(
        'key' => 'field_5cfa6c7464e18',
        'label' => 'Section Background',
        'name' => 'bg_color',
        'type' => 'select',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'choices' => array(
            'bg-default' => 'Default',
            'bg-light' => 'Light',
            'bg-dark' => 'Dark',
        ),
        'default_value' => array(
            0 => 'Default',
        ),
        'allow_null' => 0,
        'multiple' => 0,
        'ui' => 0,
        'return_format' => 'value',
        'ajax' => 0,
        'placeholder' => '',
    ),
    array(
        'key' => 'field_5cfa6c7464e16',
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
                'key' => 'field_5cfa6c7464e17',
                'label' => 'Team Member',
                'name' => 'team_member',
                'type' => 'post_object',
                'instructions' => '',
                'required' => 1,
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
            )
        ),
    ),
]);
