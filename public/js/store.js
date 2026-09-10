 
const AmellStore = {
  KEY: 'amell_in_dar_data_v2',

  defaultData() {
    return {
      categories: [
        { id: 1, name: 'Beer Bucket', sort_order: 1 },
        { id: 2, name: 'Local Beer', sort_order: 2 },
        { id: 3, name: 'Imported Beer', sort_order: 3 },
        { id: 4, name: 'Ciders', sort_order: 4 },
        { id: 5, name: 'Cocktails', sort_order: 5 },
        { id: 6, name: 'Mocktails', sort_order: 6 },
        { id: 7, name: 'Tequila', sort_order: 7 },
        { id: 8, name: 'Shots', sort_order: 8 },
        { id: 9, name: 'Gin', sort_order: 9 },
        { id: 10, name: 'Vodka', sort_order: 10 },
        { id: 11, name: 'Rum', sort_order: 11 },
        { id: 12, name: 'Brandy', sort_order: 12 },
        { id: 13, name: 'Whiskey', sort_order: 13 },
        { id: 14, name: 'Liquer', sort_order: 14 },
        { id: 15, name: 'Aperitifs & Vermouth', sort_order: 15 },
        { id: 16, name: 'Champagne & Sparkling', sort_order: 16 },
        { id: 17, name: 'Sparkling Wine', sort_order: 17 },
        { id: 18, name: 'Red Wine', sort_order: 18 },
        { id: 19, name: 'White Wine', sort_order: 19 },
        { id: 20, name: 'Soft Drink', sort_order: 20 },
        { id: 21, name: 'Tea & Coffee', sort_order: 21 }
      ],
      items: [
        // Beer Bucket
        { id: 1, category_id: 1, name: 'Castle Lager', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 2, category_id: 1, name: 'Castle Lite', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 3, category_id: 1, name: 'Castle Lite Can', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 4, category_id: 1, name: 'Corona Beer', description: '', price: 'TZS 46,000', is_available: 1 },
        { id: 5, category_id: 1, name: 'Desperado', description: '', price: 'TZS 46,000', is_available: 1 },
        { id: 6, category_id: 1, name: 'Flying Fish', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 7, category_id: 1, name: 'Flying Fish Can', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 8, category_id: 1, name: 'Heineken', description: '', price: 'TZS 46,000', is_available: 1 },
        { id: 9, category_id: 1, name: 'Kilimanjaro Lager', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 10, category_id: 1, name: 'Kilimanjaro Lager Can', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 11, category_id: 1, name: 'Kilimanjaro Lite', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 12, category_id: 1, name: 'Safari Lager', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 13, category_id: 1, name: 'Safari Lager Can', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 14, category_id: 1, name: 'Savannah Dry', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 15, category_id: 1, name: 'Serengeti Lager', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 16, category_id: 1, name: 'Serengeti Lemon', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 17, category_id: 1, name: 'Serengeti Lite', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 18, category_id: 1, name: 'Smirnoff Guarana', description: '', price: 'TZS 46,000', is_available: 1 },
        { id: 19, category_id: 1, name: 'Smirnoff Ice Black', description: '', price: 'TZS 46,000', is_available: 1 },
        { id: 20, category_id: 1, name: 'Smirnoff Pineapple', description: '', price: 'TZS 34,000', is_available: 1 },
        { id: 21, category_id: 1, name: 'Windhoek Lager', description: '', price: 'TZS 46,000', is_available: 1 },

        // Local Beer
        { id: 22, category_id: 2, name: 'Castle Lager', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 23, category_id: 2, name: 'Castle Lite', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 24, category_id: 2, name: 'Castle Lite Can', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 25, category_id: 2, name: 'Flying Fish Can', description: '', price: 'TZS 7,000', is_available: 1 },
        { id: 26, category_id: 2, name: 'Kilimanjaro Lager', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 27, category_id: 2, name: 'Kilimanjaro Lager Can', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 28, category_id: 2, name: 'Kilimanjaro Lite', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 29, category_id: 2, name: 'Safari Lager Can', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 30, category_id: 2, name: 'Safari Lager', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 31, category_id: 2, name: 'Serengeti Apple', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 32, category_id: 2, name: 'Serengeti Lager', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 33, category_id: 2, name: 'Serengeti Lemon', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 34, category_id: 2, name: 'Serengeti Lite', description: '', price: 'TZS 6,000', is_available: 1 },

        // Imported Beer
        { id: 35, category_id: 3, name: 'Budweiser', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 36, category_id: 3, name: 'Desperado', description: '', price: 'TZS 7,000', is_available: 1 },
        { id: 37, category_id: 3, name: 'Flying Fish', description: '', price: 'TZS 7,000', is_available: 1 },
        { id: 38, category_id: 3, name: 'Heineken', description: '', price: 'TZS 7,000', is_available: 1 },
        { id: 39, category_id: 3, name: 'Heineken Silver', description: '', price: 'TZS 7,000', is_available: 1 },
        { id: 40, category_id: 3, name: 'Heineken Silver Can', description: '', price: 'TZS 7,000', is_available: 1 },
        { id: 41, category_id: 3, name: 'Smirnoff Gurana', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 42, category_id: 3, name: 'Smirnoff Pineapple', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 43, category_id: 3, name: 'Windhoek Lager', description: '', price: 'TZS 7,000', is_available: 1 },
        { id: 44, category_id: 3, name: 'Brutal Fruits', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 45, category_id: 3, name: 'Guiness Smooth', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 46, category_id: 3, name: 'Guiness Stout', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 47, category_id: 3, name: 'Stella Artois', description: '', price: 'TZS 6,000', is_available: 1 },

        // Ciders
        { id: 48, category_id: 4, name: 'Corona Beer', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 49, category_id: 4, name: 'Hunters Dry', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 50, category_id: 4, name: 'Hunters Gold', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 51, category_id: 4, name: 'Redds Bottle', description: '', price: 'TZS 5,000', is_available: 1 },
        { id: 52, category_id: 4, name: 'Savanna Dry', description: '', price: 'TZS 8,000', is_available: 1 },

        // Cocktails
        { id: 53, category_id: 5, name: 'Adios MF', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 54, category_id: 5, name: 'Amell Dreamer', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 55, category_id: 5, name: 'Amell Strawberry', description: '', price: 'TZS 12,000', is_available: 1 },
        { id: 56, category_id: 5, name: 'Amell Sunrise', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 57, category_id: 5, name: 'Bar Man Special', description: '', price: 'TZS 25,000', is_available: 1 },
        { id: 58, category_id: 5, name: 'Bees Knees', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 59, category_id: 5, name: 'Blue Lagoon', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 60, category_id: 5, name: 'Cosmopolitan', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 61, category_id: 5, name: 'Dawa', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 62, category_id: 5, name: 'Gin Tonic', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 63, category_id: 5, name: 'Ice Tropez', description: '', price: 'TZS 25,000', is_available: 1 },
        { id: 64, category_id: 5, name: 'Johari Bees Knees', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 65, category_id: 5, name: 'Johari Crisp Timeless', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 66, category_id: 5, name: 'Johari Sunset', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 67, category_id: 5, name: 'Long Island Ice', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 68, category_id: 5, name: 'Margarita', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 69, category_id: 5, name: 'Mojito Classic', description: '', price: 'TZS 12,000', is_available: 1 },
        { id: 70, category_id: 5, name: 'Negroni Classic', description: '', price: 'TZS 20,000', is_available: 1 },
        { id: 71, category_id: 5, name: 'Pina Colada', description: '', price: 'TZS 12,000', is_available: 1 },
        { id: 72, category_id: 5, name: 'Redbull Passion Gin', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 73, category_id: 5, name: 'Rum Sour', description: '', price: 'TZS 12,000', is_available: 1 },
        { id: 74, category_id: 5, name: 'Screw Driver', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 75, category_id: 5, name: 'Sexy On The Beach', description: '', price: 'TZS 15,000', is_available: 1 },

        // Mocktails
        { id: 76, category_id: 6, name: 'Amell Strawberry (Virgin)', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 77, category_id: 6, name: 'Bikra Colada', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 78, category_id: 6, name: 'Milk Shake', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 79, category_id: 6, name: 'Mojito Cinderella', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 80, category_id: 6, name: 'Mojito Passion', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 81, category_id: 6, name: 'Mojito Virgin', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 82, category_id: 6, name: 'Redbull Twist', description: '', price: 'TZS 12,000', is_available: 1 },
        { id: 83, category_id: 6, name: 'Tropical Smoothie', description: '', price: 'TZS 10,000', is_available: 1 },

        // Tequila
        { id: 84, category_id: 7, name: 'Azul', description: '', price: 'TZS 1,200,000', is_available: 1 },
        { id: 85, category_id: 7, name: 'Camino Gold', description: '', price: 'TZS 120,000', is_available: 1 },
        { id: 86, category_id: 7, name: 'Camino Silver', description: '', price: 'TZS 120,000', is_available: 1 },
        { id: 87, category_id: 7, name: 'Camino White', description: '', price: 'TZS 120,000', is_available: 1 },
        { id: 88, category_id: 7, name: 'Don Julio 1942', description: '', price: 'TZS 1,200,000', is_available: 1 },
        { id: 89, category_id: 7, name: 'Don Julio Anejo', description: '', price: 'TZS 380,000', is_available: 1 },
        { id: 90, category_id: 7, name: 'Don Julio Blanco', description: '', price: 'TZS 230,000', is_available: 1 },
        { id: 91, category_id: 7, name: 'Don Julio Reposado', description: '', price: 'TZS 280,000', is_available: 1 },
        { id: 92, category_id: 7, name: 'Olmeca Chocolate', description: '', price: 'TZS 150,000', is_available: 1 },
        { id: 93, category_id: 7, name: 'Olmeca Gold', description: '', price: 'TZS 160,000', is_available: 1 },
        { id: 94, category_id: 7, name: 'Olmeca Silver', description: '', price: 'TZS 150,000', is_available: 1 },
        { id: 95, category_id: 7, name: 'Sierra Tequila', description: '', price: 'TZS 110,000', is_available: 1 },

        // Shots
        { id: 96, category_id: 8, name: 'B52', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 97, category_id: 8, name: 'Blow Job', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 98, category_id: 8, name: 'Blue Curacao', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 99, category_id: 8, name: 'Camino Gold Tequila', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 100, category_id: 8, name: 'Camino White Tequila', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 101, category_id: 8, name: 'Cointreau Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 102, category_id: 8, name: 'Demandis Peppermint', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 103, category_id: 8, name: 'Demandis Triple Sec', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 104, category_id: 8, name: 'Disaronno Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 105, category_id: 8, name: 'Jagermeister', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 106, category_id: 8, name: 'Jegger Bomb', description: '', price: 'TZS 12,000', is_available: 1 },
        { id: 107, category_id: 8, name: 'Kahlua Coffee Liquer', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 108, category_id: 8, name: 'Kingstone Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 109, category_id: 8, name: 'Sierra Tequila', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 110, category_id: 8, name: 'Smirnoff Tot', description: '', price: 'TZS 7,000', is_available: 1 },
        { id: 111, category_id: 8, name: 'Wild Africa Cream Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 112, category_id: 8, name: 'Gordons Pink Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 113, category_id: 8, name: 'Gordons Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 114, category_id: 8, name: 'Olmeca Gold Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 115, category_id: 8, name: 'Olmeca Silver Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 116, category_id: 8, name: 'Malibu Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 117, category_id: 8, name: 'Old Nick Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 118, category_id: 8, name: 'Campari Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 119, category_id: 8, name: 'Martin Bianco Tot', description: '', price: 'TZS 8,000', is_available: 1 },

        // Gin
        { id: 120, category_id: 9, name: 'Bombay Sapphire 1Ltr', description: '', price: 'TZS 140,000', is_available: 1 },
        { id: 121, category_id: 9, name: 'Bombay Sapphire 750ml', description: '', price: 'TZS 110,000', is_available: 1 },
        { id: 122, category_id: 9, name: 'Gordons Pink', description: '', price: 'TZS 90,000', is_available: 1 },
        { id: 123, category_id: 9, name: 'Hendricks', description: '', price: 'TZS 150,000', is_available: 1 },
        { id: 124, category_id: 9, name: 'Johari Bottle', description: '', price: 'TZS 130,000', is_available: 1 },
        { id: 125, category_id: 9, name: 'Johari Tot', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 126, category_id: 9, name: 'Kingstone', description: '', price: 'TZS 60,000', is_available: 1 },
        { id: 127, category_id: 9, name: 'Konyagi', description: '', price: 'TZS 35,000', is_available: 1 },
        { id: 128, category_id: 9, name: 'Tanqueray', description: '', price: 'TZS 160,000', is_available: 1 },
        { id: 129, category_id: 9, name: 'Tanqueray 1Ltr', description: '', price: 'TZS 200,000', is_available: 1 },
        { id: 130, category_id: 9, name: 'Tanqueray Sevilla Orange', description: '', price: 'TZS 150,000', is_available: 1 },
        { id: 131, category_id: 9, name: 'Gordons', description: '', price: 'TZS 100,000', is_available: 1 },

        // Vodka
        { id: 132, category_id: 10, name: 'Absolut Vodka', description: '', price: 'TZS 120,000', is_available: 1 },
        { id: 133, category_id: 10, name: 'Belvedere', description: '', price: 'TZS 160,000', is_available: 1 },
        { id: 134, category_id: 10, name: 'Ciroc', description: '', price: 'TZS 220,000', is_available: 1 },
        { id: 135, category_id: 10, name: 'Smirnoff Vodka', description: '', price: 'TZS 130,000', is_available: 1 },

        // Rum
        { id: 136, category_id: 11, name: 'Bacardi White', description: '', price: 'TZS 80,000', is_available: 1 },
        { id: 137, category_id: 11, name: 'Bumbu Rum', description: '', price: 'TZS 180,000', is_available: 1 },
        { id: 138, category_id: 11, name: 'Captain Morgan Spiced', description: '', price: 'TZS 80,000', is_available: 1 },
        { id: 139, category_id: 11, name: 'Captain Morgan Spiced Gold', description: '', price: 'TZS 60,000', is_available: 1 },
        { id: 140, category_id: 11, name: 'Malibu Caribbean Rum', description: '', price: 'TZS 90,000', is_available: 1 },
        { id: 141, category_id: 11, name: 'Old Nick White Rum', description: '', price: 'TZS 60,000', is_available: 1 },

        // Brandy
        { id: 142, category_id: 12, name: 'Hennessy VS', description: '', price: 'TZS 200,000', is_available: 1 },
        { id: 143, category_id: 12, name: 'Hennessy VSOP', description: '', price: 'TZS 350,000', is_available: 1 },
        { id: 144, category_id: 12, name: 'Hennessy XO', description: '', price: 'TZS 1,100,000', is_available: 1 },
        { id: 145, category_id: 12, name: 'Martel Blue Swift', description: '', price: 'TZS 320,000', is_available: 1 },
        { id: 146, category_id: 12, name: 'Martel VS', description: '', price: 'TZS 200,000', is_available: 1 },
        { id: 147, category_id: 12, name: 'Martel VSOP', description: '', price: 'TZS 250,000', is_available: 1 },

        // Whiskey
        { id: 148, category_id: 13, name: 'John Walker Green Label', description: '', price: 'TZS 380,000', is_available: 1 },
        { id: 149, category_id: 13, name: 'John Walker Red Label', description: '', price: 'TZS 120,000', is_available: 1 },
        { id: 150, category_id: 13, name: 'Macallan 15yrs', description: '', price: 'TZS 900,000', is_available: 1 },
        { id: 151, category_id: 13, name: 'Macallan XO 18yrs', description: '', price: 'TZS 1,700,000', is_available: 1 },
        { id: 152, category_id: 13, name: 'Singleton 12yrs', description: '', price: 'TZS 190,000', is_available: 1 },
        { id: 153, category_id: 13, name: 'Singleton 15yrs', description: '', price: 'TZS 290,000', is_available: 1 },
        { id: 154, category_id: 13, name: 'Singleton 18yrs', description: '', price: 'TZS 450,000', is_available: 1 },
        { id: 155, category_id: 13, name: 'Jack Daniel Sinatra', description: '', price: 'TZS 1,400,000', is_available: 1 },
        { id: 156, category_id: 13, name: 'Jack Daniel Single Barrel', description: '', price: 'TZS 300,000', is_available: 1 },
        { id: 157, category_id: 13, name: 'Jameson Black Barrel', description: '', price: 'TZS 180,000', is_available: 1 },
        { id: 158, category_id: 13, name: 'Jameson Irish Whisky', description: '', price: 'TZS 140,000', is_available: 1 },
        { id: 159, category_id: 13, name: 'John Walker Double Black', description: '', price: 'TZS 260,000', is_available: 1 },
        { id: 160, category_id: 13, name: 'John Walker Black Label', description: '', price: 'TZS 180,000', is_available: 1 },
        { id: 161, category_id: 13, name: 'John Walker Blue Label', description: '', price: 'TZS 1,100,000', is_available: 1 },
        { id: 162, category_id: 13, name: 'John Walker Gold Label Reserve', description: '', price: 'TZS 300,000', is_available: 1 },
        { id: 163, category_id: 13, name: 'Ballantine', description: '', price: 'TZS 120,000', is_available: 1 },
        { id: 164, category_id: 13, name: 'Black & White', description: '', price: 'TZS 80,000', is_available: 1 },
        { id: 165, category_id: 13, name: 'Captain Morgan Gold', description: '', price: 'TZS 60,000', is_available: 1 },
        { id: 166, category_id: 13, name: 'Chivas Regal 12yrs', description: '', price: 'TZS 190,000', is_available: 1 },
        { id: 167, category_id: 13, name: 'Chivas Regal 18yrs', description: '', price: 'TZS 330,000', is_available: 1 },
        { id: 168, category_id: 13, name: 'Glenfiddich 12yrs', description: '', price: 'TZS 200,000', is_available: 1 },
        { id: 169, category_id: 13, name: 'Glenfiddich 15yrs', description: '', price: 'TZS 300,000', is_available: 1 },
        { id: 170, category_id: 13, name: 'Glenfiddich 18yrs', description: '', price: 'TZS 500,000', is_available: 1 },
        { id: 171, category_id: 13, name: 'Jack Daniel Apple', description: '', price: 'TZS 150,000', is_available: 1 },
        { id: 172, category_id: 13, name: 'Jack Daniel Fire', description: '', price: 'TZS 160,000', is_available: 1 },
        { id: 173, category_id: 13, name: 'Jack Daniel Gentleman', description: '', price: 'TZS 200,000', is_available: 1 },
        { id: 174, category_id: 13, name: 'Jack Daniel Honey', description: '', price: 'TZS 150,000', is_available: 1 },
        { id: 175, category_id: 13, name: 'Jack Daniel Old', description: '', price: 'TZS 150,000', is_available: 1 },

        // Liquer
        { id: 176, category_id: 14, name: 'Amarula', description: '', price: 'TZS 90,000', is_available: 1 },
        { id: 177, category_id: 14, name: 'Aperol Apertino', description: '', price: 'TZS 100,000', is_available: 1 },
        { id: 178, category_id: 14, name: 'Aperol Spirits', description: '', price: 'TZS 20,000', is_available: 1 },
        { id: 179, category_id: 14, name: 'Bailey Irish Cream', description: '', price: 'TZS 90,000', is_available: 1 },
        { id: 180, category_id: 14, name: 'Blue Curacao', description: '', price: 'TZS 70,000', is_available: 1 },
        { id: 181, category_id: 14, name: 'Cointreau', description: '', price: 'TZS 160,000', is_available: 1 },
        { id: 182, category_id: 14, name: 'Demandis Peppermint', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 183, category_id: 14, name: 'Demandis Triple Sec', description: '', price: 'TZS 150,000', is_available: 1 },
        { id: 184, category_id: 14, name: 'Disaronno', description: '', price: 'TZS 160,000', is_available: 1 },
        { id: 185, category_id: 14, name: 'Four Cousin Marula Cream', description: '', price: 'TZS 200,000', is_available: 1 },
        { id: 186, category_id: 14, name: 'Jagermeister 700ml', description: '', price: 'TZS 150,000', is_available: 1 },
        { id: 187, category_id: 14, name: 'Kahlua Coffee Liquer', description: '', price: 'TZS 70,000', is_available: 1 },
        { id: 188, category_id: 14, name: 'Velve Cinqout', description: '', price: 'TZS 600,000', is_available: 1 },
        { id: 189, category_id: 14, name: 'Wild Africa Cream', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 190, category_id: 14, name: 'Wild Africa Chocolate', description: '', price: 'TZS 65,000', is_available: 1 },

        // Aperitifs & Vermouth
        { id: 191, category_id: 15, name: 'Campari', description: '', price: 'TZS 130,000', is_available: 1 },
        { id: 192, category_id: 15, name: 'Martin Rosso', description: '', price: 'TZS 85,000', is_available: 1 },

        // Champagne & Sparkling
        { id: 193, category_id: 16, name: 'Armand De Brignac', description: '', price: 'TZS 1,200,000', is_available: 1 },
        { id: 194, category_id: 16, name: 'Duval Leroy Brut', description: '', price: 'TZS 110,000', is_available: 1 },
        { id: 195, category_id: 16, name: 'Duval Leroy Brut Rose', description: '', price: 'TZS 150,000', is_available: 1 },
        { id: 196, category_id: 16, name: 'Duval Leroy Rose Prestige', description: '', price: 'TZS 250,000', is_available: 1 },
        { id: 197, category_id: 16, name: 'Gato Negro Blanco Dulce Sweet Rose', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 198, category_id: 16, name: 'Moet & Chandon Ice', description: '', price: 'TZS 450,000', is_available: 1 },
        { id: 199, category_id: 16, name: 'Moet & Chandon Imperial', description: '', price: 'TZS 260,000', is_available: 1 },
        { id: 200, category_id: 16, name: 'Moet & Chandon Nectar Imperial', description: '', price: 'TZS 220,000', is_available: 1 },
        { id: 201, category_id: 16, name: 'Moet & Chandon Nectar Imperial Rose', description: '', price: 'TZS 260,000', is_available: 1 },
        { id: 202, category_id: 16, name: 'Pearly Bay Grape Juice', description: '', price: 'TZS 30,000', is_available: 1 },
        { id: 203, category_id: 16, name: 'Moet & Chandon Imperial Rose', description: '', price: 'TZS 300,000', is_available: 1 },

        // Sparkling Wine
        { id: 204, category_id: 17, name: 'Belaire Blue', description: '', price: 'TZS 180,000', is_available: 1 },
        { id: 205, category_id: 17, name: 'Belaire Gold', description: '', price: 'TZS 180,000', is_available: 1 },
        { id: 206, category_id: 17, name: 'Belaire Luxe', description: '', price: 'TZS 180,000', is_available: 1 },
        { id: 207, category_id: 17, name: 'Belaire Rose', description: '', price: 'TZS 180,000', is_available: 1 },
        { id: 208, category_id: 17, name: 'Chardolini Sparkling Rose', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 209, category_id: 17, name: 'Chamdor Sparkling Grape', description: '', price: 'TZS 50,000', is_available: 1 },
        { id: 210, category_id: 17, name: 'False Bay', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 211, category_id: 17, name: 'Freixnet Carta Nevada', description: '', price: 'TZS 90,000', is_available: 1 },
        { id: 212, category_id: 17, name: 'Freixnet Cordon Negro', description: '', price: 'TZS 150,000', is_available: 1 },
        { id: 213, category_id: 17, name: 'Freixnet Ice', description: '', price: 'TZS 160,000', is_available: 1 },
        { id: 214, category_id: 17, name: 'Freixnet Italian Rose', description: '', price: 'TZS 120,000', is_available: 1 },
        { id: 215, category_id: 17, name: 'Freixnet Premium Cava', description: '', price: 'TZS 100,000', is_available: 1 },
        { id: 216, category_id: 17, name: 'Marengo Sparkling Wine Rose', description: '', price: 'TZS 60,000', is_available: 1 },
        { id: 217, category_id: 17, name: 'Martin Asti', description: '', price: 'TZS 85,000', is_available: 1 },
        { id: 218, category_id: 17, name: 'Martin Bianco', description: '', price: 'TZS 58,000', is_available: 1 },
        { id: 219, category_id: 17, name: 'Martin Prosecco', description: '', price: 'TZS 100,000', is_available: 1 },
        { id: 220, category_id: 17, name: 'Marin Rose', description: '', price: 'TZS 85,000', is_available: 1 },
        { id: 221, category_id: 17, name: 'Pearly Bay Celebration Sweet Sparkling Wine', description: '', price: 'TZS 75,000', is_available: 1 },
        { id: 222, category_id: 17, name: 'Pearly Bay Sparkling Celebration Rose', description: '', price: 'TZS 75,000', is_available: 1 },
        { id: 223, category_id: 17, name: 'Proveto Brut', description: '', price: 'TZS 70,000', is_available: 1 },
        { id: 224, category_id: 17, name: 'Proveto Rose Secco', description: '', price: 'TZS 70,000', is_available: 1 },
        { id: 225, category_id: 17, name: 'Rainbow Sparkling Red Grapes', description: '', price: 'TZS 25,000', is_available: 1 },

        // Red Wine
        { id: 226, category_id: 18, name: 'Drostdyhof Dry Red', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 227, category_id: 18, name: 'Four Cousin Dry Red', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 228, category_id: 18, name: 'Four Cousin Sweet Red', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 229, category_id: 18, name: 'Four Cousin Sweet Rose', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 230, category_id: 18, name: 'Francos Dry Red', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 231, category_id: 18, name: 'Francos Sweet Red', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 232, category_id: 18, name: 'Gato Negro Tinto Dulce Sweet Red', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 233, category_id: 18, name: 'KWV Meriot', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 234, category_id: 18, name: 'KWV Petit Verdot', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 235, category_id: 18, name: 'KWV Pinotage', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 236, category_id: 18, name: 'KWV Rose', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 237, category_id: 18, name: 'KWV Shiraz', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 238, category_id: 18, name: 'Lion Hill Dry Red', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 239, category_id: 18, name: 'Lion Hill Dry Rose', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 240, category_id: 18, name: 'Lion Hill Sweet Red', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 241, category_id: 18, name: 'Lion Hill Sweet Rose', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 242, category_id: 18, name: 'Pearly Bay Dry Red', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 243, category_id: 18, name: 'Pearly Bay Dry White', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 244, category_id: 18, name: 'Pearly Bay Sweet Red', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 245, category_id: 18, name: 'Pearly Bay Sweet Rose', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 246, category_id: 18, name: 'Spier Discover', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 247, category_id: 18, name: 'Spier Creative Block', description: '', price: 'TZS 140,000', is_available: 1 },
        { id: 248, category_id: 18, name: 'Spier Shiraz', description: '', price: 'TZS 70,000', is_available: 1 },
        { id: 249, category_id: 18, name: 'Spier Signature Merlot', description: '', price: 'TZS 70,000', is_available: 1 },
        { id: 250, category_id: 18, name: 'KWV Cabinet Sauvignon', description: '', price: 'TZS 65,000', is_available: 1 },

        // White Wine
        { id: 251, category_id: 19, name: 'Drostdyhof Dry White', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 252, category_id: 19, name: 'Drostdyhof Premier Grand Cru', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 253, category_id: 19, name: 'Drostdyhof Sweet White', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 254, category_id: 19, name: 'Elixio Chardonnay Dry White', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 255, category_id: 19, name: 'Four Cousin Sweet White', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 256, category_id: 19, name: 'Francos Dry White', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 257, category_id: 19, name: 'Francos Sweet Rose', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 258, category_id: 19, name: 'Francos Sweet White', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 259, category_id: 19, name: 'Gato Negro Blanco Dulce Sweet', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 260, category_id: 19, name: 'Gato Negro Sauvignon Blanc', description: '', price: 'TZS 45,000', is_available: 1 },
        { id: 261, category_id: 19, name: 'KWV Chenin Blanc', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 262, category_id: 19, name: 'KWV Chardonnay', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 263, category_id: 19, name: 'KWV Gleneche Blanc', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 264, category_id: 19, name: 'KWV Moscato Sweet White', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 265, category_id: 19, name: 'KWV Sauvignon Blanc', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 266, category_id: 19, name: 'KWV The Mentors', description: '', price: 'TZS 80,000', is_available: 1 },
        { id: 267, category_id: 19, name: 'Lion Hill Dry White', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 268, category_id: 19, name: 'Lion Hill Sweet White', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 269, category_id: 19, name: 'Pearly Bay Sweet White', description: '', price: 'TZS 40,000', is_available: 1 },
        { id: 270, category_id: 19, name: 'Spier Chenin Blanc', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 271, category_id: 19, name: 'Spier Discover Chenin Sauvignon', description: '', price: 'TZS 65,000', is_available: 1 },
        { id: 272, category_id: 19, name: 'The Mentors Petit Verdot', description: '', price: 'TZS 130,000', is_available: 1 },
        { id: 273, category_id: 19, name: 'KWV Three', description: '', price: 'TZS 65,000', is_available: 1 },

        // Soft Drink
        { id: 274, category_id: 20, name: 'Azam Juice', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 275, category_id: 20, name: 'Bavaria', description: '', price: 'TZS 7,000', is_available: 1 },
        { id: 276, category_id: 20, name: 'Bitter Lemon', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 277, category_id: 20, name: 'Ceres Cranberry Juice', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 278, category_id: 20, name: 'Ceres Juice', description: '', price: 'TZS 15,000', is_available: 1 },
        { id: 279, category_id: 20, name: 'Coke', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 280, category_id: 20, name: 'Coke Zero', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 281, category_id: 20, name: 'Crest Club Soda', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 282, category_id: 20, name: 'Crest Tonic', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 283, category_id: 20, name: 'Fanta Orange', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 284, category_id: 20, name: 'Fanta Passion', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 285, category_id: 20, name: 'Fanta Pineapple', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 286, category_id: 20, name: 'Fresh Juice', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 287, category_id: 20, name: 'Fresh Juice Tende Shake', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 288, category_id: 20, name: 'Grand Malt', description: '', price: 'TZS 4,000', is_available: 1 },
        { id: 289, category_id: 20, name: 'Hill Lemon-Mint Sparkling Water', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 290, category_id: 20, name: 'Hill Sparkling Water', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 291, category_id: 20, name: 'Hill Water', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 292, category_id: 20, name: 'Hot Chocolate', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 293, category_id: 20, name: 'Hot Milk', description: '', price: 'TZS 5,000', is_available: 1 },
        { id: 294, category_id: 20, name: 'Ice Cream', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 295, category_id: 20, name: 'Milk Shake Chocolate', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 296, category_id: 20, name: 'Milk Shake Strawberry', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 297, category_id: 20, name: 'Milkshake Vanilla', description: '', price: 'TZS 10,000', is_available: 1 },
        { id: 298, category_id: 20, name: 'Redbull Regular', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 299, category_id: 20, name: 'Sparletta', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 300, category_id: 20, name: 'Sprite', description: '', price: 'TZS 3,000', is_available: 1 },
        { id: 301, category_id: 20, name: 'Stoney Tangawizi', description: '', price: 'TZS 3,000', is_available: 1 },

        // Tea & Coffee
        { id: 302, category_id: 21, name: 'White Coffee', description: '', price: 'TZS 4,000', is_available: 1 },
        { id: 303, category_id: 21, name: 'White Masala Tea', description: '', price: 'TZS 5,000', is_available: 1 },
        { id: 304, category_id: 21, name: 'Fresh Juice', description: '', price: 'TZS 8,000', is_available: 1 },
        { id: 305, category_id: 21, name: 'Cappuccino', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 306, category_id: 21, name: 'Black Masala Tea', description: '', price: 'TZS 5,000', is_available: 1 },
        { id: 307, category_id: 21, name: 'Cafe Late', description: '', price: 'TZS 6,000', is_available: 1 },
        { id: 308, category_id: 21, name: 'Black Coffee', description: '', price: 'TZS 4,000', is_available: 1 },
        { id: 309, category_id: 21, name: 'Black Cardamon Tea', description: '', price: 'TZS 3,000', is_available: 1 }
      ],
      events: [
        { id: 1, title: 'Friday Night Live DJ', description: 'Resident DJ spinning Afrobeats, Amapiano and international hits. Free entry before 22:00.', event_date: '2026-09-11', event_time: '21:00', is_active: 1 },
        { id: 2, title: 'Saturday Sunset Sessions', description: 'Chill electronic and deep house as the sun sets over Dar.', event_date: '2026-09-12', event_time: '17:00', is_active: 1 },
        { id: 3, title: 'Sunday Brunch & Pool Party', description: 'Unlimited brunch package + pool access. Live acoustic set from 13:00.', event_date: '2026-09-13', event_time: '11:00', is_active: 1 }
      ],
      gym: [
        { id: 1, name: 'Daily Pass', price: 'TZS 10,000', description: 'Full day access to gym facilities', includes_pool: 0, is_active: 1 },
        { id: 2, name: 'Monthly Gym Only', price: 'TZS 120,000', description: 'Unlimited gym access for 30 days', includes_pool: 0, is_active: 1 },
        { id: 3, name: 'Monthly Gym + Pool', price: 'TZS 150,000', description: 'Full gym access + swimming pool for 30 days', includes_pool: 1, is_active: 1 },
        { id: 4, name: 'Personal Training Session', price: 'TZS 40,000', description: 'One-on-one session with certified trainer', includes_pool: 0, is_active: 1 }
      ],
      rooftop: {
        title: 'Rooftop & Pool Experience',
        description: 'Escape the ordinary and experience breathtaking panoramic views from one of Dar es Salaam\'s most unique destinations. Dive into our crystal-clear rooftop pool or lounge by the poolside with a cool drink while enjoying the stunning city skyline.',
        opening_hours: 'Pool: 06:00 – 22:00 daily | Lounge: until late'
      },
      reservations: [],
      settings: {
        whatsapp_number: '255679770888',
        phone: '+255 679 770 888',
        address: 'PSSSF Tower, 5th Floor, Sam Nujoma Road, Dar es Salaam',
        gym_hours: 'Daily 05:00 – 21:00',
        restaurant_hours: 'Daily 10:00 – late'
      },
      nextId: { items: 310, events: 4, gym: 5, categories: 22, reservations: 1 }
    };
  },

  get() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    const data = this.defaultData();
    this.set(data);
    return data;
  },

  set(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },

  // Public helpers
  getMenu() {
    const d = this.get();
    return d.categories.sort((a,b)=>a.sort_order-b.sort_order).map(c => ({
      ...c,
      items: d.items.filter(i => i.category_id === c.id && i.is_available)
    }));
  },
  getEvents() { return this.get().events.filter(e => e.is_active); },
  getGym() { return this.get().gym.filter(g => g.is_active); },
  getRooftop() { return this.get().rooftop; },
  getSettings() { return this.get().settings; },

  addReservation(data) {
    const d = this.get();
    const id = d.nextId.reservations++;
    d.reservations.unshift({ id, ...data, status: 'pending', created_at: new Date().toISOString() });
    this.set(d);
    return id;
  }
};
