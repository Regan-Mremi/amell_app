/**
 * Client-side data store using localStorage
 * Allows the entire app (customer + admin) to work without a backend.
 */
const AmellStore = {
  KEY: 'amell_in_dar_data_v1',

  defaultData() {
    return {
      categories: [
        { id: 1, name: 'Starters', sort_order: 1 },
        { id: 2, name: 'Main Courses', sort_order: 2 },
        { id: 3, name: 'Grills & Seafood', sort_order: 3 },
        { id: 4, name: 'Cocktails & Drinks', sort_order: 4 },
        { id: 5, name: 'Desserts', sort_order: 5 }
      ],
      items: [
        { id: 1, category_id: 1, name: 'Samosa Trio', description: 'Crispy vegetable, beef and chicken samosas with tamarind chutney', price: 'TZS 12,000', is_available: 1 },
        { id: 2, category_id: 1, name: 'Calamari Fritti', description: 'Lightly battered calamari with garlic aioli', price: 'TZS 18,000', is_available: 1 },
        { id: 3, category_id: 2, name: 'Amell Signature Burger', description: 'Angus beef, cheddar, caramelised onion, house sauce', price: 'TZS 28,000', is_available: 1 },
        { id: 4, category_id: 2, name: 'Chicken Peri-Peri', description: 'Flame-grilled with Portuguese peri-peri sauce & chips', price: 'TZS 32,000', is_available: 1 },
        { id: 5, category_id: 2, name: 'Vegetable Pasta Primavera', description: 'Seasonal vegetables in creamy herb sauce', price: 'TZS 24,000', is_available: 1 },
        { id: 6, category_id: 3, name: 'Grilled Nile Perch', description: 'Fresh catch with lemon butter & seasonal vegetables', price: 'TZS 45,000', is_available: 1 },
        { id: 7, category_id: 3, name: 'Beef Tenderloin', description: '200g grilled to perfection with pepper sauce', price: 'TZS 55,000', is_available: 1 },
        { id: 8, category_id: 4, name: 'Amell Sunset Margarita', description: 'Tequila, triple sec, lime, passion fruit', price: 'TZS 15,000', is_available: 1 },
        { id: 9, category_id: 4, name: 'Dar Espresso Martini', description: 'Vodka, coffee liqueur, fresh espresso', price: 'TZS 16,000', is_available: 1 },
        { id: 10, category_id: 4, name: 'Fresh Passion Juice', description: 'Local passion fruit, no added sugar', price: 'TZS 8,000', is_available: 1 },
        { id: 11, category_id: 5, name: 'Chocolate Lava Cake', description: 'Warm molten centre with vanilla ice cream', price: 'TZS 14,000', is_available: 1 },
        { id: 12, category_id: 5, name: 'Tropical Fruit Platter', description: 'Seasonal Tanzanian fruits', price: 'TZS 12,000', is_available: 1 }
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
      nextId: { items: 13, events: 4, gym: 5, categories: 6, reservations: 1 }
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
