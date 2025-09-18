<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        :root {
            --primary: #0F98B4;
            --primary-foreground: #ffffff;
            --muted: #f1f5f9;
            --muted-foreground: #64748b;
            --accent: #0ea5e9;
            --card: #ffffff;
            --border: #e2e8f0;
        }
        .bg-primary { background-color: var(--primary); }
        .text-primary { color: var(--primary); }
        .border-primary { border-color: var(--primary); }
        .bg-muted { background-color: var(--muted); }
        .text-muted-foreground { color: var(--muted-foreground); }
    </style>
</head>
<body <?php body_class(); ?>>

<header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-sm">B</span>
                </div>
                <span class="text-xl font-bold text-primary">Blink</span>
            </div>
            
            <nav class="hidden md:flex items-center space-x-8">
                <a href="#services" class="text-gray-700 hover:text-primary transition-colors">Onze pakketten</a>
                <a href="#about" class="text-gray-700 hover:text-primary transition-colors">Over ons</a>
                <a href="#contact" class="text-gray-700 hover:text-primary transition-colors">Contact</a>
                <a href="#gallery" class="text-gray-700 hover:text-primary transition-colors">Gallerij</a>
            </nav>
            
            <button class="md:hidden">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
</header>
