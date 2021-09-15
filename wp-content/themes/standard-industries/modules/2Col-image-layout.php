<?php

use RA\Modules;

$modules = Modules::singleton();

$modules->add_module('2Col Image Layout', '2Col-image-layout', 'page_modules', [
   
	array(
        'key' => 'field_5cb8f31adb37a',
        'label' => 'Image Items Left Side',
        'name' => 'img_left_side',
        'type' => 'repeater',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '50',
            'class' => '',
            'id' => '',
        ),
        'collapsed' => '',
        'min' => '',
        'max' => '',
        'layout' => 'block',
        'button_label' => 'Add New Image',
        'sub_fields' => array(
			array(
				'key' => 'field_dc935e1a3d258',
				'label' => 'Image Left',
				'name' => 'img_left',
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
		),
    ), 
	array(
        'key' => 'field_5cb8f3adb37a',
        'label' => 'Image Items Right Side',
        'name' => 'img_right_side',
        'type' => 'repeater',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '50',
            'class' => '',
            'id' => '',
        ),
        'collapsed' => '',
        'min' => '',
        'max' => '',
        'layout' => 'block',
        'button_label' => 'Add New Image',
        'sub_fields' => array(
			array(
				'key' => 'field_dc945e1a3d258',
				'label' => 'Image Right',
				'name' => 'img_right',
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
		),
    ),   
   
   
]);
