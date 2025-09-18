<section id="services" class="py-20 lg:py-32 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
                Blink pakketten
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Kies het pakket dat perfect bij jouw auto en budget past. Alle prijzen zijn inclusief BTW.
            </p>
        </div>

        <div class="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <?php
            $services = [
                [
                    'title' => 'Basis Blink(en)',
                    'price' => '84,99',
                    'price_ex_vat' => '70,24',
                    'description' => 'Perfecte basis reiniging voor je auto',
                    'features' => [
                        'Uitgebreide buitenwas',
                        'Velgen reiniging', 
                        'Interieur stofzuigen',
                        'Ramen binnen en buiten',
                        'Dashboard behandeling'
                    ],
                    'popular' => false,
                    'image' => 'car-interior-1.jpg'
                ],
                [
                    'title' => 'Deluxe Blink(en)',
                    'price' => '159,99',
                    'price_ex_vat' => '132,22',
                    'description' => 'Uitgebreide behandeling met extra aandacht',
                    'features' => [
                        'Alles van Basis pakket',
                        'Wax behandeling',
                        'Interieur reiniging',
                        'Leder conditionering',
                        'Motorruimte reiniging',
                        'Banden glans behandeling'
                    ],
                    'popular' => true,
                    'image' => 'car-interior-2.jpg'
                ],
                [
                    'title' => 'Premium Blink(en)',
                    'price' => '259,99',
                    'price_ex_vat' => '214,87',
                    'description' => 'De ultieme luxe behandeling',
                    'features' => [
                        'Alles van Deluxe pakket',
                        'Paint correction',
                        'Premium wax coating',
                        'Interieur detailing',
                        'Chroom behandeling',
                        '6 maanden garantie'
                    ],
                    'popular' => false,
                    'image' => 'car-interior-3.jpg'
                ]
            ];

            foreach ($services as $service): ?>
                <div class="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto w-full max-w-sm">
                    <?php if ($service['popular']): ?>
                        <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Populair
                        </div>
                    <?php endif; ?>

                    <div class="p-6 text-center">
                        <div class="mb-4">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/<?php echo $service['image']; ?>" 
                                 alt="<?php echo $service['title']; ?>" 
                                 class="w-full h-32 object-cover rounded-lg">
                        </div>
                        
                        <h3 class="text-xl font-bold mb-2 text-primary"><?php echo $service['title']; ?></h3>
                        <p class="text-gray-600 text-sm mb-6"><?php echo $service['description']; ?></p>
                        
                        <div class="mb-6">
                            <span class="text-3xl font-bold text-primary">€ <?php echo $service['price']; ?></span>
                            <p class="text-sm text-gray-500">€ <?php echo $service['price_ex_vat']; ?> ex. btw</p>
                        </div>

                        <ul class="space-y-2 text-sm text-left mb-6">
                            <?php foreach ($service['features'] as $feature): ?>
                                <li class="flex items-center space-x-2">
                                    <svg class="h-4 w-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span><?php echo $feature; ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>

                        <button class="w-full <?php echo $service['popular'] ? 'bg-primary hover:bg-primary/90 text-white' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'; ?> px-6 py-3 rounded-lg font-semibold transition-colors">
                            Bekijk pakket
                        </button>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
