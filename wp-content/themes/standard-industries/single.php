<?php

$context = Timber::get_context();

$post = Timber::query_post();

$context['post'] = $post;

$category = wp_get_post_categories($post->ID)[0];

if ($category) {
    $args = [
        'post_type' => 'post',
        'cat' => $category,
        'posts_per_page' => 4
    ];
    $posts = new Timber\PostQuery($args);
}

$context['items'] = isset($posts) ? $posts : null;

if (post_password_required($post->ID)) {
    Timber::render('single-password.twig', $context);
} else {
    Timber::render(['single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig'], $context);
}
