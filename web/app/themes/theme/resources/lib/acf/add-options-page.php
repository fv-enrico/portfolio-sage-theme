<?php

if(function_exists('acf_add_options_page') ) {

    acf_add_options_page(
        array(
        'page_title'     => 'Globale Theme Einstellungen',
        'menu_title'    => 'Theme',
        'menu_slug'     => 'theme-global-settings',
        'capability'    => 'edit_posts',
        'position'    => '3.2',
        'updated_message'    => __("Einstellungen aktualisiert", 'acf')
        )
    );

    /***********
 * Example of adding subpages
***********/

    // acf_add_options_sub_page(array(
    //     'page_title'     => 'Theme Header Settings',
    //     'menu_title'    => 'Header',
    //     'parent_slug'    => 'theme-general-settings',
    // ));
    //
    // acf_add_options_sub_page(array(
    //     'page_title'     => 'Theme Footer Settings',
    //     'menu_title'    => 'Footer',
    //     'parent_slug'    => 'theme-general-settings',
    // ));

}
