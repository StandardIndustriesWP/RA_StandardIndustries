<?php

use RA\Modules;

$modules = Modules::singleton();

$modules->add_module('Info Text', 'info-text', 'page_modules', [
    
    array(
        'key' => 'field_5ssa78d5d79212',
        'label' => 'Heading',
        'name' => 'heading',
        'type' => 'wysiwyg',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'default_value' => '',
        'media_upload' => 0,
        'toolbar' => 'full',
        'delay' => 0,
    ),
	array(
        'key' => 'field_scas78d2a79210',
        'label' => 'Body',
        'name' => 'eyebrow',
        'type' => 'wysiwyg',
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
        'key' => 'field_scsa79e3ef1c79',
        'label' => 'Type',
        'name' => 'type',
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
