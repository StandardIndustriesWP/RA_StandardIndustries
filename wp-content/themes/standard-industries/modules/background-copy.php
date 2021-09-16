<?php

use RA\Modules;

$modules = Modules::singleton();

$modules->add_module('Background Copy', 'background-copy', 'page_modules', [
    
	array(
        'key' => 'field_scas78d2ra79210',
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
        'key' => 'field_scsa79er3ef1c79',
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
			'dark' => 'Dark',
            'light' => 'Light'
        ),
        'default_value' => array(
            0 => 'Dark',
        ),
        'allow_null' => 0,
        'multiple' => 0,
        'ui' => 0,
        'return_format' => 'value',
        'ajax' => 0,
        'placeholder' => '',
    ),
]);
