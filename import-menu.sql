BEGIN;

WITH imported_categories(name, sort_order) AS (
  VALUES
    ('Starters & Salads', 1),
    ('Sandwiches/Burgers', 2),
    ('Main Course Dishes', 3),
    ('From the Sizzler', 4),
    ('Pizza', 5),
    ('Pasta Dishes', 6),
    ('Main Dishes', 7),
    ('Traditional Cuisine', 8),
    ('Deserts', 9),
    ('Kisinia', 10)
)
INSERT INTO menu_categories (name, sort_order, type)
SELECT imported.name, imported.sort_order, 'food'
FROM imported_categories AS imported
WHERE NOT EXISTS (
  SELECT 1
  FROM menu_categories AS existing
  WHERE existing.name = imported.name
    AND existing.type = 'food'
);

WITH imported_items(category, name, price, description, sort_order) AS (
  VALUES
    ('Starters & Salads', 'Chefs Soup of the Day', '12000', 'Changes daily', 1),
    ('Starters & Salads', 'Chicken & Avocado', '18000', 'Succulent breast of chicken, crispy greens, arugula with a yoghurt and coriander dressing', 2),
    ('Starters & Salads', 'Prawns & Avocado Salsa', '23000', 'Queens prawn tails and Bearnaise sauce', 3),
    ('Starters & Salads', 'Barbeque Chicken Wings', '19000', 'Served with chips', 4),
    ('Sandwiches/Burgers', 'Tuna Mayonnaise & Cucumber', '16500', 'All sandwiches served with chips', 5),
    ('Sandwiches/Burgers', 'Open Cheese & Tomato (V)', '15500', 'All sandwiches served with chips', 6),
    ('Main Course Dishes', 'Grilled Chicken Breast', '22500', 'Served with dijon mustard', 7),
    ('Main Course Dishes', 'Boneless Thai Chicken & Mushroom Curry', '23500', 'Served with vegetable rice', 8),
    ('Main Course Dishes', 'A Meal for the Big Boys', '40000', 'Chicken grilled and served with chips, salad and a glass of cold local beer; marinated with garlic, lime and rosemary (chilli optional at no extra cost)', 9),
    ('Main Course Dishes', 'Home Made Beef Burger', '18000', 'Served with fries', 10),
    ('Main Course Dishes', 'Chicken Burger', '22500', 'Famous schnitzel burger', 11),
    ('From the Sizzler', 'Chicken Sizzler', '32000', 'Half chicken served makange style or changamoto style', 12),
    ('From the Sizzler', 'Beef Ribs Sizzler', '27000', '', 13),
    ('From the Sizzler', 'Changu Fish Sizzler', '32000', '', 14),
    ('From the Sizzler', 'Prawn and Calamari Sizzler', '37500', '', 15),
    ('From the Sizzler', 'Grilled Fresh Fillet of Line Fish', '45000', 'Infused with our secret herb-seasoned butter; served with your choice of fluffy mash potatoes, chips, rice and vegetable', 16),
    ('Pizza', 'Amell Chicken Pizza', '19000', 'Mozzarella cheese, garlic and rosemary chicken with tomato pesto and avocado/pineapple', 17),
    ('Pizza', 'Margherita Pizza', '15000', 'Tomato and basil', 18),
    ('Pizza', 'Garden Pizza', '17000', 'Cheese, tomato sauce, onion, eggplant, zucchini and mushroom', 19),
    ('Pizza', 'Beef Pizza', '19000', 'Mozzarella cheese, tomato sauce, chopped beef and sausage', 20),
    ('Pizza', 'Combo Pizza (Beef & Chicken)', '20000', 'Mozzarella cheese, tomato sauce, chopped beef and sausage', 21),
    ('Pasta Dishes', 'Seafood Pasta', '41000', 'White wine-infused sauce, mushrooms and an array of seafood served with penne pasta', 22),
    ('Pasta Dishes', 'Chicken Alfredo', '19000', 'Sautéed julienne of chicken in a twirl of mushroom, parsley and creamy white wine sauce; penne/spaghetti', 23),
    ('Pasta Dishes', 'Beef Lasagna', '19000', 'Slow-cooked beef mince bolognaise with hints of thyme and Italian tomato, creamy bechamel topped with cheddar cheese', 24),
    ('Pasta Dishes', 'Rustic Vegetable Spaghetti', '17000', 'Oven-roasted vegetables in a homemade tomato and basil sauce, topped with cheddar cheese (V)', 25),
    ('Main Dishes', 'Kilimanjaro Beer Battered Fish Fillet', '29000', 'Served with chips and a tartar sauce', 26),
    ('Main Dishes', 'Grilled King Prawns', '45000', '350g sizzling prawns served with your choice of side dish', 27),
    ('Main Dishes', 'Lobster Thermidor', '55000', 'A classic old-school dish, flambeed with brandy and dry white wine', 28),
    ('Main Dishes', 'Grilled Ribeye Steak', '32000', '400g grilled as you like, smothered in cafe de Paris butter and served with starch of your choice', 29),
    ('Main Dishes', 'T-Bone Steak', '32000', 'A 400g treat drizzled with a creamy mushroom sauce and roast potato wedges', 30),
    ('Main Dishes', 'Beef Fillet Steak', '33000', 'Grilled 250g beef fillet topped with cafe de Paris butter and served with mashed potatoes/chips and vegetables', 31),
    ('Traditional Cuisine', 'Chicken (Broiler)', '22000', 'Makange/changamoto/choma', 32),
    ('Traditional Cuisine', 'Chicken Kienyeji', '25000', 'Makange/boiled/changamoto/choma', 33),
    ('Traditional Cuisine', 'Sato', '40000', 'Makange/fried/grilled', 34),
    ('Traditional Cuisine', 'Chicken Mishkaki - 3', '21000', '', 35),
    ('Traditional Cuisine', 'Beef Mishkaki - 3', '23000', '', 36),
    ('Traditional Cuisine', 'Fish Mshkaki - 3', '28000', '', 37),
    ('Traditional Cuisine', 'Mbuzi', '22000', 'Makange/choma/changamoto', 38),
    ('Traditional Cuisine', 'Chips Mayai', '8000', '', 39),
    ('Deserts', 'Fruit Salad with Ice Cream', '12000', '', 40),
    ('Kisinia', 'Seafood Platter', '165000', 'Grilled prawns (250gm), calamari tempura (250gm), grilled lobster (250gm), crumbed fish nuggets (250gm), pan-fried octopus (250gm)', 41),
    ('Kisinia', 'Street Food Platter', '150000', 'Beef mshikaki (250g), sauté chicken gizzards (250gm), zege (1 portion), Vienna sausage (6 pcs), fried plantains (mzuzu) (2 portions), beef samosas (6 pcs); served with rice and chips (2 portions each)', 42),
    ('Kisinia', 'Gwambina Platter', '170000', 'Sato changamoto (250g), dagaa (1 portion), rosti maini (250gm), kuku kienyeji (1 portion), makange, mbuzi choma (300gm), chips (2 portions), ugali (1 portion), dona, mzuzu', 43),
    ('Kisinia', 'Mixed Grill Platter', '160000', 'Beef b/wors, lemon and herb chicken, beef ribs, chicken mshikaki, grilled fish mshkaki, mbuzi choma; served with salad and chips/ndizi/ugali', 44)
)
INSERT INTO menu_items (category_id, name, description, price, is_available, sort_order)
SELECT categories.id, imported.name, imported.description, imported.price, 1, imported.sort_order
FROM imported_items AS imported
JOIN menu_categories AS categories
  ON categories.name = imported.category
 AND categories.type = 'food'
WHERE NOT EXISTS (
  SELECT 1
  FROM menu_items AS existing
  WHERE existing.category_id = categories.id
    AND existing.name = imported.name
);

COMMIT;
