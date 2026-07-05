export const destinationsData = [
  {
    id: "taj-mahal",
    name: "Taj Mahal, Agra",
    coordinates: [27.1751, 78.0421],
    description: "The symbol of love, built by Emperor Shah Jahan in memory of his favorite wife Mumtaz Mahal. A UNESCO World Heritage Site and one of the Seven Wonders of the World.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "The Oberoi Amarvilas", rating: "5.0 ★", price: "₹35,000 / night", availability: "High (Rooms available)" },
      { name: "ITC Mughal", rating: "4.7 ★", price: "₹9,500 / night", availability: "Medium (Limited slots)" }
    ],
    restaurants: [
      { name: "Pinch of Spice", cuisine: "Mughlai & North Indian", rating: "4.6 ★" },
      { name: "Esphahan (Fine Dine)", cuisine: "Traditional Awadhi", rating: "4.8 ★" }
    ],
    transport: {
      train: { connection: "Gatimaan Express (Delhi to Agra)", status: "Daily (1h 40m)", availability: "92% Available" },
      bus: { connection: "Yamuna Expressway AC Coaches", status: "Every 30 mins", availability: "85% Available" },
      flight: { connection: "Kheria Airport (AGR)", status: "Connecting Flights", availability: "60% Available" }
    }
  },
  {
    id: "jaipur",
    name: "Jaipur, Rajasthan",
    coordinates: [26.9124, 75.7873],
    description: "Known as the Pink City, Jaipur is famous for its magnificent palaces, historic forts, royal heritage, and vibrant local bazaars.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "Rambagh Palace (Taj)", rating: "4.9 ★", price: "₹45,000 / night", availability: "Low (Filling Fast)" },
      { name: "Radisson Blu Jaipur", rating: "4.5 ★", price: "₹6,800 / night", availability: "High (Rooms available)" }
    ],
    restaurants: [
      { name: "Chokhi Dhani", cuisine: "Traditional Rajasthani Thali", rating: "4.7 ★" },
      { name: "Suvarna Mahal", cuisine: "Royal Indian Cuisine", rating: "4.9 ★" }
    ],
    transport: {
      train: { connection: "Jaipur Double Decker", status: "Daily", availability: "88% Available" },
      bus: { connection: "RSRTC Gold Line AC Sleeper", status: "Hourly from Delhi/Agra", availability: "90% Available" },
      flight: { connection: "Jaipur International Airport (JAI)", status: "Direct Flights", availability: "95% Available" }
    }
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    coordinates: [9.4981, 76.3388],
    description: "A serene network of lakes, canals, and lagoons running parallel to the Arabian Sea coast, famous for luxury houseboat cruises and lush green landscapes.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "Kumarakom Lake Resort", rating: "4.8 ★", price: "₹24,000 / night", availability: "Medium (Limited slots)" },
      { name: "Zuri Kumarakom front", rating: "4.6 ★", price: "₹12,500 / night", availability: "High (Rooms available)" }
    ],
    restaurants: [
      { name: "Thaff Restaurant", cuisine: "Malabar Seafood", rating: "4.4 ★" },
      { name: "Cassia Kumarakom", cuisine: "Kerala Traditional & Fusion", rating: "4.5 ★" }
    ],
    transport: {
      train: { connection: "Alleppey Express", status: "Daily", availability: "78% Available" },
      bus: { connection: "KSRTC Swift Services", status: "Hourly from Kochi", availability: "85% Available" },
      flight: { connection: "Cochin International Airport (COK)", status: "85 km away", availability: "99% Available" }
    }
  },
  {
    id: "leh-ladakh",
    name: "Leh-Ladakh",
    coordinates: [34.1526, 77.5771],
    description: "A high-altitude cold desert in the Himalayas, known for its dramatic mountain landscapes, turquoise lakes, ancient monasteries, and trekking trails.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "The Grand Dragon Ladakh", rating: "4.8 ★", price: "₹15,000 / night", availability: "Medium" },
      { name: "Hotel Singge Palace", rating: "4.4 ★", price: "₹7,500 / night", availability: "High (Rooms available)" }
    ],
    restaurants: [
      { name: "The Tibetan Kitchen", cuisine: "Tibetan & Ladakhi Heritage", rating: "4.7 ★" },
      { name: "Chopsticks Noodle Bar", cuisine: "Indo-Asian", rating: "4.3 ★" }
    ],
    transport: {
      train: { connection: "No Direct Train", status: "Nearest is Jammu Tawi", availability: "N/A" },
      bus: { connection: "HRTC Leh-Manali Bus", status: "Seasonal (June - Oct)", availability: "50% (Weather Dependent)" },
      flight: { connection: "Kushok Bakula Rimpochee (IXL)", status: "Daily from Delhi", availability: "75% Available" }
    }
  },
  {
    id: "varanasi",
    name: "Varanasi, UP",
    coordinates: [25.3176, 82.9739],
    description: "Also known as Kashi or Benares, Varanasi is the spiritual heart of India. Located on the banks of the sacred Ganges River, it is one of the oldest continuously inhabited cities in the world.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "BrijRama Palace Heritage", rating: "4.9 ★", price: "₹26,000 / night", availability: "Low (Filling Fast)" },
      { name: "Taj Ganges Varanasi", rating: "4.7 ★", price: "₹11,000 / night", availability: "High (Rooms available)" }
    ],
    restaurants: [
      { name: "Kashi Chat Bhandar", cuisine: "Banarasi Street Food & Sweets", rating: "4.8 ★" },
      { name: "Brown Bread Bakery", cuisine: "Organic / European Cafe", rating: "4.5 ★" }
    ],
    transport: {
      train: { connection: "Vande Bharat Express (Delhi-Varanasi)", status: "Daily except Thursday", availability: "85% Available" },
      bus: { connection: "UPSRTC Sleeper Coaches", status: "Frequent routes", availability: "90% Available" },
      flight: { connection: "Lal Bahadur Shastri Airport (VNS)", status: "Direct Flights", availability: "92% Available" }
    }
  },
  {
    id: "darjeeling",
    name: "Darjeeling, West Bengal",
    coordinates: [27.0410, 88.2663],
    description: "Famous for its expansive tea plantations, stunning panoramic views of Mount Kanchenjunga, and the historic Himalayan Toy Train.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "Windamere Hotel (Heritage)", rating: "4.6 ★", price: "₹14,500 / night", availability: "Medium" },
      { name: "Mayfair Darjeeling", rating: "4.7 ★", price: "₹12,000 / night", availability: "High" }
    ],
    restaurants: [
      { name: "Glenary's Bakery & Pub", cuisine: "Continental & Baked Goods", rating: "4.6 ★" },
      { name: "Kunga Restaurant", cuisine: "Tibetan & Chinese", rating: "4.5 ★" }
    ],
    transport: {
      train: { connection: "Darjeeling Himalayan Railway (Toy Train)", status: "Daily Sightseeing", availability: "70% Available" },
      bus: { connection: "Shared Jeeps from Siliguri/NJP", status: "Regular Daytime", availability: "95% Available" },
      flight: { connection: "Bagdogra International Airport (IXB)", status: "70 km away", availability: "90% Available" }
    }
  },
  {
    id: "ram-mandir",
    name: "Ram Mandir, Ayodhya",
    coordinates: [26.7992, 82.2049],
    description: "The grand temple dedicated to Lord Ram, representing ancient Indian architectural style, heritage, and deep spiritual importance located on the Sarayu River banks.",
    image: "https://images.unsplash.com/photo-1707049870196-85c85b54b036?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "Ramayana Hotel", rating: "4.5 ★", price: "₹8,500 / night", availability: "Medium (Book in advance)" },
      { name: "Ayodhya Heritage Inn", rating: "4.2 ★", price: "₹4,200 / night", availability: "High" }
    ],
    restaurants: [
      { name: "Kanaka Bhawan Bhojnalaya", cuisine: "Vegetarian / Satvik", rating: "4.5 ★" },
      { name: "Makhan-Bhog", cuisine: "North Indian Vegetarian", rating: "4.3 ★" }
    ],
    transport: {
      train: { connection: "Ayodhya Cantt Station (AYC)", status: "High-speed Express Trains", availability: "82% Available" },
      bus: { connection: "UPSRTC Direct Buses", status: "Hourly from Lucknow", availability: "90% Available" },
      flight: { connection: "Ayodhya Maharishi Valmiki Airport (AYO)", status: "Direct Flights", availability: "88% Available" }
    }
  },
  {
    id: "gateway-of-india",
    name: "Gateway of India, Mumbai",
    coordinates: [18.9220, 72.8347],
    description: "An iconic 20th-century arch monument overlooking the Arabian Sea, representing Mumbai's history and serving as the gateway to Elephanta Caves.",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "The Taj Mahal Palace", rating: "5.0 ★", price: "₹38,000 / night", availability: "High" },
      { name: "Hotel Suba Palace", rating: "4.3 ★", price: "₹7,200 / night", availability: "Medium" }
    ],
    restaurants: [
      { name: "Leopold Cafe", cuisine: "Multi-cuisine / Cafe Heritage", rating: "4.2 ★" },
      { name: "The Table (Fine Dine)", cuisine: "Global / Modern European", rating: "4.7 ★" }
    ],
    transport: {
      train: { connection: "CSMT Central Terminus", status: "3 km away", availability: "99% Available" },
      bus: { connection: "BEST City Bus Network", status: "Frequent routes", availability: "98% Available" },
      flight: { connection: "Chhatrapati Shivaji Airport (BOM)", status: "Direct Flights", availability: "99% Available" }
    }
  },
  {
    id: "charminar",
    name: "Charminar, Hyderabad",
    coordinates: [17.3616, 78.4747],
    description: "A monumental mosque built in 1591, known for its four grand minarets, signature architecture, and surrounding bustling pearl and bangle markets.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "Taj Falaknuma Palace", rating: "4.9 ★", price: "₹40,000 / night", availability: "Low (Very Exclusive)" },
      { name: "Mercure Hyderabad KCP", rating: "4.4 ★", price: "₹6,000 / night", availability: "High" }
    ],
    restaurants: [
      { name: "Hotel Shadab", cuisine: "Hyderabadi Biryani & Haleem", rating: "4.6 ★" },
      { name: "Grand Hotel", cuisine: "Irani Chai & Mughlai", rating: "4.3 ★" }
    ],
    transport: {
      train: { connection: "Secunderabad Junction (SC)", status: "Direct routes", availability: "88% Available" },
      bus: { connection: "TSRTC City Buses", status: "Very Frequent", availability: "95% Available" },
      flight: { connection: "Rajiv Gandhi Airport (HYD)", status: "Direct Flights", availability: "96% Available" }
    }
  },
  {
    id: "golden-temple",
    name: "Golden Temple, Amritsar",
    coordinates: [31.6199, 74.8765],
    description: "Also known as Sri Harmandir Sahib, it is the holiest shrine of Sikhism, famous for its magnificent gold-plated structure, serene pool, and serving free community kitchen (Langar) to 100,000+ daily visitors.",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "Hyatt Regency Amritsar", rating: "4.6 ★", price: "₹7,800 / night", availability: "High" },
      { name: "Welcomhotel by ITC Amritsar", rating: "4.7 ★", price: "₹9,000 / night", availability: "Medium" }
    ],
    restaurants: [
      { name: "Kesar Da Dhaba", cuisine: "Authentic Punjabi Thali (Desi Ghee)", rating: "4.7 ★" },
      { name: "Golden Temple Langar", cuisine: "Community Vegetarian Kitchen", rating: "5.0 ★ (Free/Welcome)" }
    ],
    transport: {
      train: { connection: "Amritsar Shatabdi Express", status: "Daily from Delhi", availability: "90% Available" },
      bus: { connection: "AC Sleeper Coaches", status: "Frequent daytime/night", availability: "92% Available" },
      flight: { connection: "Sri Guru Ram Dass Jee Airport (ATQ)", status: "Direct Flights", availability: "95% Available" }
    }
  },
  {
    id: "mysore-palace",
    name: "Mysore Palace, Karnataka",
    coordinates: [12.3052, 76.6552],
    description: "The official residence of the Wadiyar dynasty, showcasing Indo-Saracenic design and glowing with nearly 100,000 light bulbs on weekends and during Dussehra festival.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600&auto=format&fit=crop",
    hotels: [
      { name: "Grand Mercure Mysore", rating: "4.5 ★", price: "₹6,500 / night", availability: "High" },
      { name: "Radisson Blu Plaza Mysore", rating: "4.6 ★", price: "₹8,200 / night", availability: "Medium" }
    ],
    restaurants: [
      { name: "Mylari Restaurant", cuisine: "Original Mysore Masala Dosa", rating: "4.8 ★" },
      { name: "The Heritage Dining", cuisine: "South Indian Traditional Meals", rating: "4.4 ★" }
    ],
    transport: {
      train: { connection: "Mysuru Express (MYS)", status: "Daily from Bengaluru", availability: "95% Available" },
      bus: { connection: "KSRTC Flybus (Direct from Airport)", status: "Frequent routes", availability: "92% Available" },
      flight: { connection: "Mysore Airport (MYQ) / Bengaluru (BLR)", status: "Direct / 150km away", availability: "90% Available" }
    }
  }
];
