<?php

use RA\Modules;

$modules = Modules::singleton();

$modules->add_module('Intro', 'intro', 'page_modules', [
    array(
        'key' => 'field_5ca78d2a79210',
        'label' => 'Eyebrow',
        'name' => 'eyebrow',
        'type' => 'text',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'default_value' => '',
        'placeholder' => '',
        'prepend' => '',
        'append' => '',
        'maxlength' => '',
    ),
    array(
        'key' => 'field_5ca78d5d79212',
        'label' => 'Heading',
        'name' => 'heading',
        'type' => 'wysiwyg',
        'instructions' => '',
        'required' => 1,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'default_value' => '',
        'tabs' => 'text',
        'media_upload' => 0,
        'toolbar' => 'full',
        'delay' => 0,
    ),
    array(
        'key' => 'field_5ca78d3379211',
        'label' => 'Body',
        'name' => 'body',
        'type' => 'textarea',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'default_value' => '',
        'placeholder' => '',
        'maxlength' => '',
        'rows' => '',
        'new_lines' => 'wpautop',
    ),
    array(
        'key' => 'field_5ca79e3ef1c79',
        'label' => 'Type',
        'name' => 'type',
        'type' => 'select',
        'instructions' => '',
        'required' => 1,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'choices' => array(
            'light' => 'Light',
            'dark' => 'Dark',
        ),
        'default_value' => array(
            0 => 'Light',
        ),
        'allow_null' => 0,
        'multiple' => 0,
        'ui' => 0,
        'return_format' => 'value',
        'ajax' => 0,
        'placeholder' => '',
    ),
]);
