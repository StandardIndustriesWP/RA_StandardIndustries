<?php

use RA\Modules;

$modules = Modules::singleton();

$modules->add_module('Layout Static 2 Col', 'layout-two-col', 'page_modules', [
    
    array(
        'key' => 'field_5sssa78d5d79212',
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
        'key' => 'field_scass78d2a7s9210',
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
        'key' => 'field_5ssc9150s1a3d258',
        'label' => 'Image',
        'name' => 'image',
        'type' => 'image',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'return_format' => 'id',
        'preview_size' => 'thumbnail',
        'library' => 'all',
        'min_width' => '',
        'min_height' => '',
        'min_size' => '',
        'max_width' => '',
        'max_height' => '',
        'max_size' => '',
        'mime_types' => '',
    ),
]);
