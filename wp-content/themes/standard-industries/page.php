<?php

global $page;

// Set pagination if it doesn't yet exist
if (!isset($page) || !$page){
    $page = 1;
}

$context = Timber::get_context();

$post = new TimberPost();

// Get the category from the first news list and paginate
$modules = get_field('content_modules', $post->ID);
if ($modules) {
    $news_lists = array_keys(array_column($modules, 'acf_fc_layout'), 'news-list');
    $category =  count($news_lists) ? $modules[$news_lists[0]]['category'] : 1;
    if ($category && count($news_lists) === 1) {
        $args = [
            'post_type' => 'post',
            'cat' => $category,
            'posts_per_page' => 12,
            'paged' => $page
        ];
        $posts = new Timber\PostQuery($args);
    }
}

$context['posts'] = $posts ?: null;

$context['post'] = $post;

Timber::render(['page-' . $post->post_name . '.twig', 'page.twig'], $context);
