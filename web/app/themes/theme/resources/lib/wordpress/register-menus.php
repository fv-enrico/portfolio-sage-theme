<?php
/**
 * Register menus
 */

add_action(
    'init', function () {
        register_nav_menus(
            array(
            'primary' =>  'Haupt-Navigation',
						'footer' =>   'Footer-Navigation'
            )
        );
    }
);

/**
 * Add active class
 */

add_filter(
    'nav_menu_css_class', function ($classes, $item) {
        if ($item->current == 1 || $item->current_item_ancestor == true) {
            $classes[] = 'active';
        }
        return $classes;
    }, 10, 2
);
