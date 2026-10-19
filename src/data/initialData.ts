import { Product, Category, Banner, Offer, BusinessSettings } from '../types';

export const initialSettings: BusinessSettings = {
  businessName: 'ITALIA SHOES',
  tamilName: '',
  businessType: 'Shoe Store',
  phone: '0431 402 0105',
  phone1: '0431 402 0105',
  phone2: '+91 431 402 0105',
  address:
    'M5 - Kings Square Complex, 11th Cross, Thillai Nagar Main Road, Tennur, Tiruchirappalli, Tamil Nadu 620018, India',
  rating: 3.7,
  reviewCount: 259,
  services: ['In-store shopping', 'Delivery'],
  closingTime: '9:30 PM',
  businessHours: 'Open • Closes at 9:30 PM',
  active: true,
  tagline: 'Quality Footwear for Everyday Comfort & Style',
  whatsapp: '',
  instagram: '',
  youtube: '',
  facebook: '',
  googleMapsUrl: '',
  email: '',
  website: '',
  announcementText:
    'ITALIA SHOES • SHOE STORE • IN-STORE SHOPPING & DELIVERY • CALL 0431 402 0105',
  heroTitle: 'ITALIA SHOES',
  heroSubtitle:
    'Step into quality footwear for every occasion. Visit our showroom at Kings Square Complex, Tiruchirappalli or shop online for direct delivery.',
};

export const initialCategories: Category[] = [
  {
    id: 'men',
    name: 'Men',
    slug: 'men',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
    description: "Men's footwear collection including formal, casual, athletic, and everyday sneakers.",
    active: true,
    order: 1,
    itemCount: 12,
  },
  {
    id: 'women',
    name: 'Women',
    slug: 'women',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
    description: "Comfortable and stylish women's footwear designed for daily ease and active steps.",
    active: true,
    order: 2,
    itemCount: 8,
  },
  {
    id: 'sports',
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    description: 'High-cushion running, training, and athletic sports shoes for peak performance.',
    active: true,
    order: 3,
    itemCount: 10,
  },
  {
    id: 'casual',
    name: 'Casual',
    slug: 'casual',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop',
    description: 'Everyday sneakers, loafers, and lifestyle casual shoes for maximum comfort.',
    active: true,
    order: 4,
    itemCount: 14,
  },
  {
    id: 'sandals',
    name: 'Sandals',
    slug: 'sandals',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop',
    description: 'Ergonomic, breathable, and lightweight comfort sandals and daily slides.',
    active: true,
    order: 5,
    itemCount: 8,
  },
  {
    id: 'new-arrivals',
    name: 'New Arrivals',
    slug: 'new-arrivals',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
    description: 'Latest footwear additions and fresh designs just arrived in store.',
    active: true,
    order: 6,
    itemCount: 6,
  },
  {
    id: 'offers',
    name: 'Offers',
    slug: 'offers',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop',
    description: 'Exclusive seasonal offers, special discounts, and value footwear bundles.',
    active: true,
    order: 7,
    itemCount: 5,
  },
];

export const initialBanners: Banner[] = [
  {
    id: 'banner-1',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1600&auto=format&fit=crop',
    title: 'ITALIA SHOES',
    subtitle: 'Quality Footwear • In-Store Shopping & Direct Delivery',
    buttonText: 'SHOP ALL SHOES',
    buttonLink: '/shop',
    active: true,
    order: 1,
  },
  {
    id: 'banner-2',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
    title: 'SPORTS & RUNNING',
    subtitle: 'Dynamic Arch Support & High-Impact Cushioning',
    buttonText: 'EXPLORE SPORTS',
    buttonLink: '/category/Sports',
    active: true,
    order: 2,
  },
  {
    id: 'banner-3',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1600&auto=format&fit=crop',
    title: 'CASUAL & STREETWEAR',
    subtitle: 'Clean Styling for Everyday Comfort and Ease',
    buttonText: 'DISCOVER CASUAL',
    buttonLink: '/category/Casual',
    active: true,
    order: 3,
  },
  {
    id: 'banner-4',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1600&auto=format&fit=crop',
    title: 'COMFORT SANDALS',
    subtitle: 'Ergonomic Slides and Durable All-Weather Sandals',
    buttonText: 'SHOP SANDALS',
    buttonLink: '/category/Sandals',
    active: true,
    order: 4,
  },
];

export const initialOffers: Offer[] = [
  {
    id: 'offer-1',
    title: 'Showroom Fitting Special',
    description: 'Enjoy 10% instant discount on orders above ₹1,999 in-store or online.',
    discountType: 'percentage',
    discountValue: 10,
    couponCode: 'ITALIA10',
    minSpend: 1999,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    active: true,
  },
  {
    id: 'offer-2',
    title: 'Direct Delivery Flat Discount',
    description: 'Get flat ₹300 off on select sports and casual running footwear.',
    discountType: 'flat',
    discountValue: 300,
    couponCode: 'ITALIA300',
    minSpend: 2499,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    active: true,
  },
];

export const STORE_PRODUCT_IMAGES: string[] = [
  "https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png",
  "https://i.postimg.cc/RVjgntm7/Screenshot-2026-09-21-231644.png",
  "https://i.postimg.cc/zGK0wfDV/Screenshot-2026-09-21-231647.png",
  "https://i.postimg.cc/HkXB0LWj/Screenshot-2026-09-21-231651.png",
  "https://i.postimg.cc/jSPZ6jqw/Screenshot-2026-09-21-231656.png",
  "https://i.postimg.cc/L8LNks4P/Screenshot-2026-09-21-231700.png",
  "https://i.postimg.cc/52Ln5t9C/Screenshot-2026-09-21-231703.png",
  "https://i.postimg.cc/x1MtGdjy/Screenshot-2026-09-21-231707.png",
  "https://i.postimg.cc/sg7wP2fP/Screenshot-2026-09-21-231712.png",
  "https://i.postimg.cc/t4W2dgRr/Screenshot-2026-09-21-231715.png",
  "https://i.postimg.cc/4xVBv341/Screenshot-2026-09-21-231718.png",
  "https://i.postimg.cc/SxCDLKQ5/Screenshot-2026-09-21-231722.png",
  "https://i.postimg.cc/52Ln5t9R/Screenshot-2026-09-21-231726.png",
  "https://i.postimg.cc/g28Ny0cQ/Screenshot-2026-09-21-231729.png",
  "https://i.postimg.cc/Jh8KpWtx/Screenshot-2026-09-21-231732.png",
  "https://i.postimg.cc/HkXB0LWF/Screenshot-2026-09-21-231737.png",
  "https://i.postimg.cc/FKvGTQ1B/Screenshot-2026-09-21-231741.png",
  "https://i.postimg.cc/yNKnLzWw/Screenshot-2026-09-21-231745.png",
  "https://i.postimg.cc/QMDSfrVv/Screenshot-2026-09-21-231751.png",
  "https://i.postimg.cc/9f21Ljz6/Screenshot-2026-09-21-231756.png",
  "https://i.postimg.cc/d0Fn5KLF/Screenshot-2026-09-21-231801.png",
  "https://i.postimg.cc/pdvkstpt/Screenshot-2026-09-21-231804.png",
  "https://i.postimg.cc/k5CwTdBJ/Screenshot-2026-09-21-231808.png",
  "https://i.postimg.cc/pdvkstp2/Screenshot-2026-09-21-231811.png",
  "https://i.postimg.cc/N0tbdw5f/Screenshot-2026-09-21-231816.png",
  "https://i.postimg.cc/SK4VgpJx/Screenshot-2026-09-21-231819.png",
  "https://i.postimg.cc/CK47t6qY/Screenshot-2026-09-21-231828.png",
  "https://i.postimg.cc/25xGJXZr/Screenshot-2026-09-21-231832.png",
  "https://i.postimg.cc/YSxRVyW7/Screenshot-2026-09-21-231839.png",
  "https://i.postimg.cc/1zKBTYqm/Screenshot-2026-09-21-231844.png",
  "https://i.postimg.cc/TPc0SHDK/Screenshot-2026-09-21-231849.png",
  "https://i.postimg.cc/vmvhjSVD/Screenshot-2026-09-21-231853.png",
  "https://i.postimg.cc/tgzkfmxx/Screenshot-2026-09-21-231857.png",
  "https://i.postimg.cc/HLtzKPyM/Screenshot-2026-09-21-231900.png",
  "https://i.postimg.cc/YSxRVyWL/Screenshot-2026-09-21-231904.png",
  "https://i.postimg.cc/PqMycFw8/Screenshot-2026-09-21-231907.png",
  "https://i.postimg.cc/CK47t6qs/Screenshot-2026-09-21-231910.png",
  "https://i.postimg.cc/V6LgcBqt/Screenshot-2026-09-21-231926.png",
  "https://i.postimg.cc/wvT2dcXm/Screenshot-2026-09-21-231935.png",
  "https://i.postimg.cc/pdBC71FB/Screenshot-2026-09-21-231940.png",
  "https://i.postimg.cc/sXDmR9YJ/Screenshot-2026-09-21-231944.png",
  "https://i.postimg.cc/C1L7VHGC/Screenshot-2026-09-21-231956.png",
  "https://i.postimg.cc/ydYjzXmf/Screenshot-2026-09-21-232001.png",
  "https://i.postimg.cc/Jn4xWcNx/Screenshot-2026-09-21-232005.png",
  "https://i.postimg.cc/QtxmrkQ4/Screenshot-2026-09-21-232014.png",
  "https://i.postimg.cc/XJ7L0cfR/Screenshot-2026-09-21-232019.png",
  "https://i.postimg.cc/V6LgcBqV/Screenshot-2026-09-21-232022.png",
  "https://i.postimg.cc/TwY0Xqj8/Screenshot-2026-09-21-232029.png",
  "https://i.postimg.cc/DZy6KdQ3/Screenshot-2026-09-21-232034.png",
  "https://i.postimg.cc/hjPsqb8B/Screenshot-2026-09-21-232042.png",
  "https://i.postimg.cc/B6YgZLpw/Screenshot-2026-09-21-232045.png",
  "https://i.postimg.cc/1tCHRnBd/Screenshot-2026-09-21-232050.png",
  "https://i.postimg.cc/9M8pXRbv/Screenshot-2026-09-21-232054.png",
  "https://i.postimg.cc/G27Q38KN/Screenshot-2026-09-21-232100.png",
  "https://i.postimg.cc/HxZ2Wczq/Screenshot-2026-09-21-232105.png",
  "https://i.postimg.cc/LXCT4YvK/Screenshot-2026-09-21-232110.png",
  "https://i.postimg.cc/W3WnpFSc/Screenshot-2026-09-21-232115.png",
  "https://i.postimg.cc/DZjgfJ5T/Screenshot-2026-09-21-232118.png",
  "https://i.postimg.cc/MTPDZMtw/Screenshot-2026-09-21-232132.png",
  "https://i.postimg.cc/LXCT4YvH/Screenshot-2026-09-21-232138.png",
  "https://i.postimg.cc/V6GRsr4s/Screenshot-2026-09-21-232141.png",
  "https://i.postimg.cc/4dL547wN/Screenshot-2026-09-21-232151.png",
  "https://i.postimg.cc/C1PNMBJK/Screenshot-2026-09-21-232154.png",
  "https://i.postimg.cc/SsTrQ2Vj/Screenshot-2026-09-21-232201.png"
];

export const demoProducts: Product[] = [
  {
    "id": "prod-is-001",
    "name": "Urban Flex Low-Top Sneaker",
    "slug": "urban-flex-low-top-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Men",
    "price": 2499,
    "salePrice": 1999,
    "discountPercentage": 20,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Urban Flex Low-Top Sneaker from ITALIA SHOES. Engineered with breathable knit & vegan leather and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Low-Top with Breathable Knit & Vegan Leather and high-durability cushioned sole.",
    "sku": "IS-CAS-001",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png",
    "images": [
      "https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png",
      "https://i.postimg.cc/RVjgntm7/Screenshot-2026-09-21-231644.png",
      "https://i.postimg.cc/zGK0wfDV/Screenshot-2026-09-21-231647.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png",
          "https://i.postimg.cc/RVjgntm7/Screenshot-2026-09-21-231644.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/RVjgntm7/Screenshot-2026-09-21-231644.png",
          "https://i.postimg.cc/zGK0wfDV/Screenshot-2026-09-21-231647.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "Breathable Knit & Vegan Leather",
    "style": "Low-Top",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-002",
    "name": "Air Sprint Pro Runner",
    "slug": "air-sprint-pro-runner",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Men",
    "price": 3299,
    "salePrice": 2499,
    "discountPercentage": 24,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Air Sprint Pro Runner from ITALIA SHOES. Engineered with engineered aeroflow mesh and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Running Shoe with Engineered Aeroflow Mesh and high-durability cushioned sole.",
    "sku": "IS-SPO-002",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/RVjgntm7/Screenshot-2026-09-21-231644.png",
    "images": [
      "https://i.postimg.cc/RVjgntm7/Screenshot-2026-09-21-231644.png",
      "https://i.postimg.cc/zGK0wfDV/Screenshot-2026-09-21-231647.png",
      "https://i.postimg.cc/HkXB0LWj/Screenshot-2026-09-21-231651.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 13,
      "7": 18,
      "8": 23,
      "9": 10,
      "10": 15,
      "11": 20
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/RVjgntm7/Screenshot-2026-09-21-231644.png",
          "https://i.postimg.cc/zGK0wfDV/Screenshot-2026-09-21-231647.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/zGK0wfDV/Screenshot-2026-09-21-231647.png",
          "https://i.postimg.cc/HkXB0LWj/Screenshot-2026-09-21-231651.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      }
    ],
    "material": "Engineered Aeroflow Mesh",
    "style": "Running Shoe",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-003",
    "name": "Heritage Venetian Slip-On Loafer",
    "slug": "heritage-venetian-slip-on-loafer",
    "brand": "ITALIA SHOES",
    "category": "Men",
    "gender": "Men",
    "price": 2999,
    "salePrice": 2299,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Heritage Venetian Slip-On Loafer from ITALIA SHOES. Engineered with handcrafted synthetic leather and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Loafer with Handcrafted Synthetic Leather and high-durability cushioned sole.",
    "sku": "IS-MEN-003",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/zGK0wfDV/Screenshot-2026-09-21-231647.png",
    "images": [
      "https://i.postimg.cc/zGK0wfDV/Screenshot-2026-09-21-231647.png",
      "https://i.postimg.cc/HkXB0LWj/Screenshot-2026-09-21-231651.png",
      "https://i.postimg.cc/jSPZ6jqw/Screenshot-2026-09-21-231656.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 16,
      "7": 21,
      "8": 26,
      "9": 13,
      "10": 18,
      "11": 23
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/zGK0wfDV/Screenshot-2026-09-21-231647.png",
          "https://i.postimg.cc/HkXB0LWj/Screenshot-2026-09-21-231651.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/HkXB0LWj/Screenshot-2026-09-21-231651.png",
          "https://i.postimg.cc/jSPZ6jqw/Screenshot-2026-09-21-231656.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      }
    ],
    "material": "Handcrafted Synthetic Leather",
    "style": "Loafer",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-004",
    "name": "Aero-Stride Cushioned Sandal",
    "slug": "aero-stride-cushioned-sandal",
    "brand": "ITALIA SHOES",
    "category": "Sandals",
    "gender": "Men",
    "price": 1899,
    "salePrice": 1499,
    "discountPercentage": 21,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Aero-Stride Cushioned Sandal from ITALIA SHOES. Engineered with hydro-resistant eva & webbing and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Ergonomic Sandal with Hydro-Resistant EVA & Webbing and high-durability cushioned sole.",
    "sku": "IS-SAN-004",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/HkXB0LWj/Screenshot-2026-09-21-231651.png",
    "images": [
      "https://i.postimg.cc/HkXB0LWj/Screenshot-2026-09-21-231651.png",
      "https://i.postimg.cc/jSPZ6jqw/Screenshot-2026-09-21-231656.png",
      "https://i.postimg.cc/L8LNks4P/Screenshot-2026-09-21-231700.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 19,
      "7": 24,
      "8": 11,
      "9": 16,
      "10": 21,
      "11": 26
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/HkXB0LWj/Screenshot-2026-09-21-231651.png",
          "https://i.postimg.cc/jSPZ6jqw/Screenshot-2026-09-21-231656.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/jSPZ6jqw/Screenshot-2026-09-21-231656.png",
          "https://i.postimg.cc/L8LNks4P/Screenshot-2026-09-21-231700.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      }
    ],
    "material": "Hydro-Resistant EVA & Webbing",
    "style": "Ergonomic Sandal",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-005",
    "name": "Sleek Street Low-Profile Sneaker",
    "slug": "sleek-street-low-profile-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 2299,
    "salePrice": 1799,
    "discountPercentage": 22,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Sleek Street Low-Profile Sneaker from ITALIA SHOES. Engineered with soft comfort upper & cushioned insole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Lifestyle Sneaker with Soft Comfort Upper & Cushioned Insole and high-durability cushioned sole.",
    "sku": "IS-WOM-005",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/jSPZ6jqw/Screenshot-2026-09-21-231656.png",
    "images": [
      "https://i.postimg.cc/jSPZ6jqw/Screenshot-2026-09-21-231656.png",
      "https://i.postimg.cc/L8LNks4P/Screenshot-2026-09-21-231700.png",
      "https://i.postimg.cc/52Ln5t9C/Screenshot-2026-09-21-231703.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 22,
      "5": 27,
      "6": 14,
      "7": 19,
      "8": 24
    },
    "stock": 106,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/jSPZ6jqw/Screenshot-2026-09-21-231656.png",
          "https://i.postimg.cc/L8LNks4P/Screenshot-2026-09-21-231700.png"
        ],
        "sizes": {
          "4": 22,
          "5": 27,
          "6": 14,
          "7": 19,
          "8": 24
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/L8LNks4P/Screenshot-2026-09-21-231700.png",
          "https://i.postimg.cc/52Ln5t9C/Screenshot-2026-09-21-231703.png"
        ],
        "sizes": {
          "4": 22,
          "5": 27,
          "6": 14,
          "7": 19,
          "8": 24
        }
      }
    ],
    "material": "Soft Comfort Upper & Cushioned Insole",
    "style": "Lifestyle Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-006",
    "name": "Trailblazer All-Terrain Trainer",
    "slug": "trailblazer-all-terrain-trainer",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Men",
    "price": 3499,
    "salePrice": 2799,
    "discountPercentage": 20,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Trailblazer All-Terrain Trainer from ITALIA SHOES. Engineered with high-traction grip rubber sole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Trail & Gym Shoe with High-Traction Grip Rubber Sole and high-durability cushioned sole.",
    "sku": "IS-SPO-006",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/L8LNks4P/Screenshot-2026-09-21-231700.png",
    "images": [
      "https://i.postimg.cc/L8LNks4P/Screenshot-2026-09-21-231700.png",
      "https://i.postimg.cc/52Ln5t9C/Screenshot-2026-09-21-231703.png",
      "https://i.postimg.cc/x1MtGdjy/Screenshot-2026-09-21-231707.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 25,
      "7": 12,
      "8": 17,
      "9": 22,
      "10": 27,
      "11": 14
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/L8LNks4P/Screenshot-2026-09-21-231700.png",
          "https://i.postimg.cc/52Ln5t9C/Screenshot-2026-09-21-231703.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/52Ln5t9C/Screenshot-2026-09-21-231703.png",
          "https://i.postimg.cc/x1MtGdjy/Screenshot-2026-09-21-231707.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      }
    ],
    "material": "High-Traction Grip Rubber Sole",
    "style": "Trail & Gym Shoe",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-007",
    "name": "Tuscan Casual Penny Moccasin",
    "slug": "tuscan-casual-penny-moccasin",
    "brand": "ITALIA SHOES",
    "category": "Men",
    "gender": "Men",
    "price": 2699,
    "salePrice": 2099,
    "discountPercentage": 22,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Tuscan Casual Penny Moccasin from ITALIA SHOES. Engineered with supple textured leather upper and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Moccasin with Supple Textured Leather Upper and high-durability cushioned sole.",
    "sku": "IS-MEN-007",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/52Ln5t9C/Screenshot-2026-09-21-231703.png",
    "images": [
      "https://i.postimg.cc/52Ln5t9C/Screenshot-2026-09-21-231703.png",
      "https://i.postimg.cc/x1MtGdjy/Screenshot-2026-09-21-231707.png",
      "https://i.postimg.cc/sg7wP2fP/Screenshot-2026-09-21-231712.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/52Ln5t9C/Screenshot-2026-09-21-231703.png",
          "https://i.postimg.cc/x1MtGdjy/Screenshot-2026-09-21-231707.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/x1MtGdjy/Screenshot-2026-09-21-231707.png",
          "https://i.postimg.cc/sg7wP2fP/Screenshot-2026-09-21-231712.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "Supple Textured Leather Upper",
    "style": "Moccasin",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-008",
    "name": "Velocity Marathon Racing Sneaker",
    "slug": "velocity-marathon-racing-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Unisex",
    "price": 3599,
    "salePrice": 2899,
    "discountPercentage": 19,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Velocity Marathon Racing Sneaker from ITALIA SHOES. Engineered with featherlight kinetic knit and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Marathon Racer with Featherlight Kinetic Knit and high-durability cushioned sole.",
    "sku": "IS-SPO-008",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/x1MtGdjy/Screenshot-2026-09-21-231707.png",
    "images": [
      "https://i.postimg.cc/x1MtGdjy/Screenshot-2026-09-21-231707.png",
      "https://i.postimg.cc/sg7wP2fP/Screenshot-2026-09-21-231712.png",
      "https://i.postimg.cc/t4W2dgRr/Screenshot-2026-09-21-231715.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 13,
      "7": 18,
      "8": 23,
      "9": 10,
      "10": 15,
      "11": 20
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/x1MtGdjy/Screenshot-2026-09-21-231707.png",
          "https://i.postimg.cc/sg7wP2fP/Screenshot-2026-09-21-231712.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/sg7wP2fP/Screenshot-2026-09-21-231712.png",
          "https://i.postimg.cc/t4W2dgRr/Screenshot-2026-09-21-231715.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      }
    ],
    "material": "Featherlight Kinetic Knit",
    "style": "Marathon Racer",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-009",
    "name": "Classic Italian Derby Oxford",
    "slug": "classic-italian-derby-oxford",
    "brand": "ITALIA SHOES",
    "category": "Men",
    "gender": "Men",
    "price": 2899,
    "salePrice": 2199,
    "discountPercentage": 24,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Classic Italian Derby Oxford from ITALIA SHOES. Engineered with gloss burnished synthetic leather and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Formal Derby with Gloss Burnished Synthetic Leather and high-durability cushioned sole.",
    "sku": "IS-MEN-009",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/sg7wP2fP/Screenshot-2026-09-21-231712.png",
    "images": [
      "https://i.postimg.cc/sg7wP2fP/Screenshot-2026-09-21-231712.png",
      "https://i.postimg.cc/t4W2dgRr/Screenshot-2026-09-21-231715.png",
      "https://i.postimg.cc/4xVBv341/Screenshot-2026-09-21-231718.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 16,
      "7": 21,
      "8": 26,
      "9": 13,
      "10": 18,
      "11": 23
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/sg7wP2fP/Screenshot-2026-09-21-231712.png",
          "https://i.postimg.cc/t4W2dgRr/Screenshot-2026-09-21-231715.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/t4W2dgRr/Screenshot-2026-09-21-231715.png",
          "https://i.postimg.cc/4xVBv341/Screenshot-2026-09-21-231718.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      }
    ],
    "material": "Gloss Burnished Synthetic Leather",
    "style": "Formal Derby",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-010",
    "name": "CloudWalk Women's Comfort Slip-On",
    "slug": "cloudwalk-women-s-comfort-slip-on",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 1999,
    "salePrice": 1599,
    "discountPercentage": 20,
    "description": "Experience exceptional comfort and authentic craftsmanship with the CloudWalk Women's Comfort Slip-On from ITALIA SHOES. Engineered with ultra-flex memory cushion and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Comfort Loafer with Ultra-Flex Memory Cushion and high-durability cushioned sole.",
    "sku": "IS-WOM-010",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/t4W2dgRr/Screenshot-2026-09-21-231715.png",
    "images": [
      "https://i.postimg.cc/t4W2dgRr/Screenshot-2026-09-21-231715.png",
      "https://i.postimg.cc/4xVBv341/Screenshot-2026-09-21-231718.png",
      "https://i.postimg.cc/SxCDLKQ5/Screenshot-2026-09-21-231722.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 19,
      "5": 24,
      "6": 11,
      "7": 16,
      "8": 21
    },
    "stock": 91,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/t4W2dgRr/Screenshot-2026-09-21-231715.png",
          "https://i.postimg.cc/4xVBv341/Screenshot-2026-09-21-231718.png"
        ],
        "sizes": {
          "4": 19,
          "5": 24,
          "6": 11,
          "7": 16,
          "8": 21
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/4xVBv341/Screenshot-2026-09-21-231718.png",
          "https://i.postimg.cc/SxCDLKQ5/Screenshot-2026-09-21-231722.png"
        ],
        "sizes": {
          "4": 19,
          "5": 24,
          "6": 11,
          "7": 16,
          "8": 21
        }
      }
    ],
    "material": "Ultra-Flex Memory Cushion",
    "style": "Comfort Loafer",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-011",
    "name": "Veloce Cross-Trainer Gym Shoe",
    "slug": "veloce-cross-trainer-gym-shoe",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Men",
    "price": 2999,
    "salePrice": 2299,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Veloce Cross-Trainer Gym Shoe from ITALIA SHOES. Engineered with breathable double mesh and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Training Shoe with Breathable Double Mesh and high-durability cushioned sole.",
    "sku": "IS-SPO-011",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/4xVBv341/Screenshot-2026-09-21-231718.png",
    "images": [
      "https://i.postimg.cc/4xVBv341/Screenshot-2026-09-21-231718.png",
      "https://i.postimg.cc/SxCDLKQ5/Screenshot-2026-09-21-231722.png",
      "https://i.postimg.cc/52Ln5t9R/Screenshot-2026-09-21-231726.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 22,
      "7": 27,
      "8": 14,
      "9": 19,
      "10": 24,
      "11": 11
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/4xVBv341/Screenshot-2026-09-21-231718.png",
          "https://i.postimg.cc/SxCDLKQ5/Screenshot-2026-09-21-231722.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/SxCDLKQ5/Screenshot-2026-09-21-231722.png",
          "https://i.postimg.cc/52Ln5t9R/Screenshot-2026-09-21-231726.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      }
    ],
    "material": "Breathable Double Mesh",
    "style": "Training Shoe",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-012",
    "name": "Urban Edge Chunky Platform Sneaker",
    "slug": "urban-edge-chunky-platform-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Women",
    "price": 2799,
    "salePrice": 2199,
    "discountPercentage": 21,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Urban Edge Chunky Platform Sneaker from ITALIA SHOES. Engineered with textured pu & cushion outsole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Chunky Sneaker with Textured PU & Cushion Outsole and high-durability cushioned sole.",
    "sku": "IS-CAS-012",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/SxCDLKQ5/Screenshot-2026-09-21-231722.png",
    "images": [
      "https://i.postimg.cc/SxCDLKQ5/Screenshot-2026-09-21-231722.png",
      "https://i.postimg.cc/52Ln5t9R/Screenshot-2026-09-21-231726.png",
      "https://i.postimg.cc/g28Ny0cQ/Screenshot-2026-09-21-231729.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 25,
      "5": 12,
      "6": 17,
      "7": 22,
      "8": 27
    },
    "stock": 103,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/SxCDLKQ5/Screenshot-2026-09-21-231722.png",
          "https://i.postimg.cc/52Ln5t9R/Screenshot-2026-09-21-231726.png"
        ],
        "sizes": {
          "4": 25,
          "5": 12,
          "6": 17,
          "7": 22,
          "8": 27
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/52Ln5t9R/Screenshot-2026-09-21-231726.png",
          "https://i.postimg.cc/g28Ny0cQ/Screenshot-2026-09-21-231729.png"
        ],
        "sizes": {
          "4": 25,
          "5": 12,
          "6": 17,
          "7": 22,
          "8": 27
        }
      }
    ],
    "material": "Textured PU & Cushion Outsole",
    "style": "Chunky Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-013",
    "name": "Riviera Dual-Strap Comfort Slide",
    "slug": "riviera-dual-strap-comfort-slide",
    "brand": "ITALIA SHOES",
    "category": "Sandals",
    "gender": "Men",
    "price": 1599,
    "salePrice": 1199,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Riviera Dual-Strap Comfort Slide from ITALIA SHOES. Engineered with anatomical eva footbed and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Slide Sandal with Anatomical EVA Footbed and high-durability cushioned sole.",
    "sku": "IS-SAN-013",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/52Ln5t9R/Screenshot-2026-09-21-231726.png",
    "images": [
      "https://i.postimg.cc/52Ln5t9R/Screenshot-2026-09-21-231726.png",
      "https://i.postimg.cc/g28Ny0cQ/Screenshot-2026-09-21-231729.png",
      "https://i.postimg.cc/Jh8KpWtx/Screenshot-2026-09-21-231732.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/52Ln5t9R/Screenshot-2026-09-21-231726.png",
          "https://i.postimg.cc/g28Ny0cQ/Screenshot-2026-09-21-231729.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/g28Ny0cQ/Screenshot-2026-09-21-231729.png",
          "https://i.postimg.cc/Jh8KpWtx/Screenshot-2026-09-21-231732.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "Anatomical EVA Footbed",
    "style": "Slide Sandal",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": true,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-014",
    "name": "Street Glide Skater Sneaker",
    "slug": "street-glide-skater-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Men",
    "price": 2199,
    "salePrice": 1699,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Street Glide Skater Sneaker from ITALIA SHOES. Engineered with durable canvas & vulcanized rubber and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Skate Sneaker with Durable Canvas & Vulcanized Rubber and high-durability cushioned sole.",
    "sku": "IS-CAS-014",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/g28Ny0cQ/Screenshot-2026-09-21-231729.png",
    "images": [
      "https://i.postimg.cc/g28Ny0cQ/Screenshot-2026-09-21-231729.png",
      "https://i.postimg.cc/Jh8KpWtx/Screenshot-2026-09-21-231732.png",
      "https://i.postimg.cc/HkXB0LWF/Screenshot-2026-09-21-231737.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 13,
      "7": 18,
      "8": 23,
      "9": 10,
      "10": 15,
      "11": 20
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/g28Ny0cQ/Screenshot-2026-09-21-231729.png",
          "https://i.postimg.cc/Jh8KpWtx/Screenshot-2026-09-21-231732.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/Jh8KpWtx/Screenshot-2026-09-21-231732.png",
          "https://i.postimg.cc/HkXB0LWF/Screenshot-2026-09-21-231737.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      }
    ],
    "material": "Durable Canvas & Vulcanized Rubber",
    "style": "Skate Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-015",
    "name": "Milano Wingtip Brogue Shoe",
    "slug": "milano-wingtip-brogue-shoe",
    "brand": "ITALIA SHOES",
    "category": "Men",
    "gender": "Men",
    "price": 3199,
    "salePrice": 2499,
    "discountPercentage": 22,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Milano Wingtip Brogue Shoe from ITALIA SHOES. Engineered with perforated medallion finish and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Wingtip Brogue with Perforated Medallion Finish and high-durability cushioned sole.",
    "sku": "IS-MEN-015",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/Jh8KpWtx/Screenshot-2026-09-21-231732.png",
    "images": [
      "https://i.postimg.cc/Jh8KpWtx/Screenshot-2026-09-21-231732.png",
      "https://i.postimg.cc/HkXB0LWF/Screenshot-2026-09-21-231737.png",
      "https://i.postimg.cc/FKvGTQ1B/Screenshot-2026-09-21-231741.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 16,
      "7": 21,
      "8": 26,
      "9": 13,
      "10": 18,
      "11": 23
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/Jh8KpWtx/Screenshot-2026-09-21-231732.png",
          "https://i.postimg.cc/HkXB0LWF/Screenshot-2026-09-21-231737.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/HkXB0LWF/Screenshot-2026-09-21-231737.png",
          "https://i.postimg.cc/FKvGTQ1B/Screenshot-2026-09-21-231741.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      }
    ],
    "material": "Perforated Medallion Finish",
    "style": "Wingtip Brogue",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-016",
    "name": "ActivePulse Dynamic Jogger",
    "slug": "activepulse-dynamic-jogger",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Unisex",
    "price": 2799,
    "salePrice": 2099,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the ActivePulse Dynamic Jogger from ITALIA SHOES. Engineered with shock-absorbing midsole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Jogging Sneaker with Shock-Absorbing Midsole and high-durability cushioned sole.",
    "sku": "IS-SPO-016",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/HkXB0LWF/Screenshot-2026-09-21-231737.png",
    "images": [
      "https://i.postimg.cc/HkXB0LWF/Screenshot-2026-09-21-231737.png",
      "https://i.postimg.cc/FKvGTQ1B/Screenshot-2026-09-21-231741.png",
      "https://i.postimg.cc/yNKnLzWw/Screenshot-2026-09-21-231745.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 19,
      "7": 24,
      "8": 11,
      "9": 16,
      "10": 21,
      "11": 26
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/HkXB0LWF/Screenshot-2026-09-21-231737.png",
          "https://i.postimg.cc/FKvGTQ1B/Screenshot-2026-09-21-231741.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/FKvGTQ1B/Screenshot-2026-09-21-231741.png",
          "https://i.postimg.cc/yNKnLzWw/Screenshot-2026-09-21-231745.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      }
    ],
    "material": "Shock-Absorbing Midsole",
    "style": "Jogging Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-017",
    "name": "Aria Women's Lightweight Walker",
    "slug": "aria-women-s-lightweight-walker",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 2099,
    "salePrice": 1599,
    "discountPercentage": 24,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Aria Women's Lightweight Walker from ITALIA SHOES. Engineered with seamless stretch weave and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Walking Shoe with Seamless Stretch Weave and high-durability cushioned sole.",
    "sku": "IS-WOM-017",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/FKvGTQ1B/Screenshot-2026-09-21-231741.png",
    "images": [
      "https://i.postimg.cc/FKvGTQ1B/Screenshot-2026-09-21-231741.png",
      "https://i.postimg.cc/yNKnLzWw/Screenshot-2026-09-21-231745.png",
      "https://i.postimg.cc/QMDSfrVv/Screenshot-2026-09-21-231751.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 22,
      "5": 27,
      "6": 14,
      "7": 19,
      "8": 24
    },
    "stock": 106,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/FKvGTQ1B/Screenshot-2026-09-21-231741.png",
          "https://i.postimg.cc/yNKnLzWw/Screenshot-2026-09-21-231745.png"
        ],
        "sizes": {
          "4": 22,
          "5": 27,
          "6": 14,
          "7": 19,
          "8": 24
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/yNKnLzWw/Screenshot-2026-09-21-231745.png",
          "https://i.postimg.cc/QMDSfrVv/Screenshot-2026-09-21-231751.png"
        ],
        "sizes": {
          "4": 22,
          "5": 27,
          "6": 14,
          "7": 19,
          "8": 24
        }
      }
    ],
    "material": "Seamless Stretch Weave",
    "style": "Walking Shoe",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-018",
    "name": "Verona Classic Chelsea Boot",
    "slug": "verona-classic-chelsea-boot",
    "brand": "ITALIA SHOES",
    "category": "Men",
    "gender": "Men",
    "price": 3499,
    "salePrice": 2699,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Verona Classic Chelsea Boot from ITALIA SHOES. Engineered with matte synthetic leather & elastic gusset and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Chelsea Boot with Matte Synthetic Leather & Elastic Gusset and high-durability cushioned sole.",
    "sku": "IS-MEN-018",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/yNKnLzWw/Screenshot-2026-09-21-231745.png",
    "images": [
      "https://i.postimg.cc/yNKnLzWw/Screenshot-2026-09-21-231745.png",
      "https://i.postimg.cc/QMDSfrVv/Screenshot-2026-09-21-231751.png",
      "https://i.postimg.cc/9f21Ljz6/Screenshot-2026-09-21-231756.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 25,
      "7": 12,
      "8": 17,
      "9": 22,
      "10": 27,
      "11": 14
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/yNKnLzWw/Screenshot-2026-09-21-231745.png",
          "https://i.postimg.cc/QMDSfrVv/Screenshot-2026-09-21-231751.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/QMDSfrVv/Screenshot-2026-09-21-231751.png",
          "https://i.postimg.cc/9f21Ljz6/Screenshot-2026-09-21-231756.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      }
    ],
    "material": "Matte Synthetic Leather & Elastic Gusset",
    "style": "Chelsea Boot",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-019",
    "name": "HydroGrip Waterproof Adventure Sandal",
    "slug": "hydrogrip-waterproof-adventure-sandal",
    "brand": "ITALIA SHOES",
    "category": "Sandals",
    "gender": "Men",
    "price": 1799,
    "salePrice": 1399,
    "discountPercentage": 22,
    "description": "Experience exceptional comfort and authentic craftsmanship with the HydroGrip Waterproof Adventure Sandal from ITALIA SHOES. Engineered with quick-dry neoprene lining and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Outdoor Sandal with Quick-Dry Neoprene Lining and high-durability cushioned sole.",
    "sku": "IS-SAN-019",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/QMDSfrVv/Screenshot-2026-09-21-231751.png",
    "images": [
      "https://i.postimg.cc/QMDSfrVv/Screenshot-2026-09-21-231751.png",
      "https://i.postimg.cc/9f21Ljz6/Screenshot-2026-09-21-231756.png",
      "https://i.postimg.cc/d0Fn5KLF/Screenshot-2026-09-21-231801.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/QMDSfrVv/Screenshot-2026-09-21-231751.png",
          "https://i.postimg.cc/9f21Ljz6/Screenshot-2026-09-21-231756.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/9f21Ljz6/Screenshot-2026-09-21-231756.png",
          "https://i.postimg.cc/d0Fn5KLF/Screenshot-2026-09-21-231801.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "Quick-Dry Neoprene Lining",
    "style": "Outdoor Sandal",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-020",
    "name": "City Pace Minimalist Court Sneaker",
    "slug": "city-pace-minimalist-court-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Men",
    "price": 2399,
    "salePrice": 1899,
    "discountPercentage": 21,
    "description": "Experience exceptional comfort and authentic craftsmanship with the City Pace Minimalist Court Sneaker from ITALIA SHOES. Engineered with monochrome sleek pu and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Court Sneaker with Monochrome Sleek PU and high-durability cushioned sole.",
    "sku": "IS-CAS-020",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/9f21Ljz6/Screenshot-2026-09-21-231756.png",
    "images": [
      "https://i.postimg.cc/9f21Ljz6/Screenshot-2026-09-21-231756.png",
      "https://i.postimg.cc/d0Fn5KLF/Screenshot-2026-09-21-231801.png",
      "https://i.postimg.cc/pdvkstpt/Screenshot-2026-09-21-231804.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 13,
      "7": 18,
      "8": 23,
      "9": 10,
      "10": 15,
      "11": 20
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/9f21Ljz6/Screenshot-2026-09-21-231756.png",
          "https://i.postimg.cc/d0Fn5KLF/Screenshot-2026-09-21-231801.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/d0Fn5KLF/Screenshot-2026-09-21-231801.png",
          "https://i.postimg.cc/pdvkstpt/Screenshot-2026-09-21-231804.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      }
    ],
    "material": "Monochrome Sleek PU",
    "style": "Court Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-021",
    "name": "Modena Tassel Dress Loafer",
    "slug": "modena-tassel-dress-loafer",
    "brand": "ITALIA SHOES",
    "category": "Men",
    "gender": "Men",
    "price": 2999,
    "salePrice": 2399,
    "discountPercentage": 20,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Modena Tassel Dress Loafer from ITALIA SHOES. Engineered with rich microfiber leather and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Tassel Loafer with Rich Microfiber Leather and high-durability cushioned sole.",
    "sku": "IS-MEN-021",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/d0Fn5KLF/Screenshot-2026-09-21-231801.png",
    "images": [
      "https://i.postimg.cc/d0Fn5KLF/Screenshot-2026-09-21-231801.png",
      "https://i.postimg.cc/pdvkstpt/Screenshot-2026-09-21-231804.png",
      "https://i.postimg.cc/k5CwTdBJ/Screenshot-2026-09-21-231808.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 16,
      "7": 21,
      "8": 26,
      "9": 13,
      "10": 18,
      "11": 23
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/d0Fn5KLF/Screenshot-2026-09-21-231801.png",
          "https://i.postimg.cc/pdvkstpt/Screenshot-2026-09-21-231804.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/pdvkstpt/Screenshot-2026-09-21-231804.png",
          "https://i.postimg.cc/k5CwTdBJ/Screenshot-2026-09-21-231808.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      }
    ],
    "material": "Rich Microfiber Leather",
    "style": "Tassel Loafer",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-022",
    "name": "FlexiFoam Women's Active Sneaker",
    "slug": "flexifoam-women-s-active-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 2299,
    "salePrice": 1699,
    "discountPercentage": 26,
    "description": "Experience exceptional comfort and authentic craftsmanship with the FlexiFoam Women's Active Sneaker from ITALIA SHOES. Engineered with shock-resistant foam base and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Active Sneaker with Shock-Resistant Foam Base and high-durability cushioned sole.",
    "sku": "IS-WOM-022",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/pdvkstpt/Screenshot-2026-09-21-231804.png",
    "images": [
      "https://i.postimg.cc/pdvkstpt/Screenshot-2026-09-21-231804.png",
      "https://i.postimg.cc/k5CwTdBJ/Screenshot-2026-09-21-231808.png",
      "https://i.postimg.cc/pdvkstp2/Screenshot-2026-09-21-231811.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 19,
      "5": 24,
      "6": 11,
      "7": 16,
      "8": 21
    },
    "stock": 91,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/pdvkstpt/Screenshot-2026-09-21-231804.png",
          "https://i.postimg.cc/k5CwTdBJ/Screenshot-2026-09-21-231808.png"
        ],
        "sizes": {
          "4": 19,
          "5": 24,
          "6": 11,
          "7": 16,
          "8": 21
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/k5CwTdBJ/Screenshot-2026-09-21-231808.png",
          "https://i.postimg.cc/pdvkstp2/Screenshot-2026-09-21-231811.png"
        ],
        "sizes": {
          "4": 19,
          "5": 24,
          "6": 11,
          "7": 16,
          "8": 21
        }
      }
    ],
    "material": "Shock-Resistant Foam Base",
    "style": "Active Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-023",
    "name": "Ignite Turbo Speed Trainer",
    "slug": "ignite-turbo-speed-trainer",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Men",
    "price": 3399,
    "salePrice": 2599,
    "discountPercentage": 24,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Ignite Turbo Speed Trainer from ITALIA SHOES. Engineered with high-bounce tpu sole plate and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Sprint Runner with High-Bounce TPU Sole Plate and high-durability cushioned sole.",
    "sku": "IS-SPO-023",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/k5CwTdBJ/Screenshot-2026-09-21-231808.png",
    "images": [
      "https://i.postimg.cc/k5CwTdBJ/Screenshot-2026-09-21-231808.png",
      "https://i.postimg.cc/pdvkstp2/Screenshot-2026-09-21-231811.png",
      "https://i.postimg.cc/N0tbdw5f/Screenshot-2026-09-21-231816.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 22,
      "7": 27,
      "8": 14,
      "9": 19,
      "10": 24,
      "11": 11
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/k5CwTdBJ/Screenshot-2026-09-21-231808.png",
          "https://i.postimg.cc/pdvkstp2/Screenshot-2026-09-21-231811.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/pdvkstp2/Screenshot-2026-09-21-231811.png",
          "https://i.postimg.cc/N0tbdw5f/Screenshot-2026-09-21-231816.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      }
    ],
    "material": "High-Bounce TPU Sole Plate",
    "style": "Sprint Runner",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-024",
    "name": "Capri Buckle Leather Sandal",
    "slug": "capri-buckle-leather-sandal",
    "brand": "ITALIA SHOES",
    "category": "Sandals",
    "gender": "Men",
    "price": 1999,
    "salePrice": 1499,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Capri Buckle Leather Sandal from ITALIA SHOES. Engineered with dual brass buckles & suede lining and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Strap Sandal with Dual Brass Buckles & Suede Lining and high-durability cushioned sole.",
    "sku": "IS-SAN-024",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/pdvkstp2/Screenshot-2026-09-21-231811.png",
    "images": [
      "https://i.postimg.cc/pdvkstp2/Screenshot-2026-09-21-231811.png",
      "https://i.postimg.cc/N0tbdw5f/Screenshot-2026-09-21-231816.png",
      "https://i.postimg.cc/SK4VgpJx/Screenshot-2026-09-21-231819.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 25,
      "7": 12,
      "8": 17,
      "9": 22,
      "10": 27,
      "11": 14
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/pdvkstp2/Screenshot-2026-09-21-231811.png",
          "https://i.postimg.cc/N0tbdw5f/Screenshot-2026-09-21-231816.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/N0tbdw5f/Screenshot-2026-09-21-231816.png",
          "https://i.postimg.cc/SK4VgpJx/Screenshot-2026-09-21-231819.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      }
    ],
    "material": "Dual Brass Buckles & Suede Lining",
    "style": "Strap Sandal",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-025",
    "name": "Retro Wave Color-Block Sneaker",
    "slug": "retro-wave-color-block-sneaker",
    "brand": "ITALIA SHOES",
    "category": "New Arrivals",
    "gender": "Unisex",
    "price": 2699,
    "salePrice": 2099,
    "discountPercentage": 22,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Retro Wave Color-Block Sneaker from ITALIA SHOES. Engineered with multi-panel layered suede/mesh and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Color-Block Sneaker with Multi-Panel Layered Suede/Mesh and high-durability cushioned sole.",
    "sku": "IS-NEW-025",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/N0tbdw5f/Screenshot-2026-09-21-231816.png",
    "images": [
      "https://i.postimg.cc/N0tbdw5f/Screenshot-2026-09-21-231816.png",
      "https://i.postimg.cc/SK4VgpJx/Screenshot-2026-09-21-231819.png",
      "https://i.postimg.cc/CK47t6qY/Screenshot-2026-09-21-231828.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/N0tbdw5f/Screenshot-2026-09-21-231816.png",
          "https://i.postimg.cc/SK4VgpJx/Screenshot-2026-09-21-231819.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/SK4VgpJx/Screenshot-2026-09-21-231819.png",
          "https://i.postimg.cc/CK47t6qY/Screenshot-2026-09-21-231828.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "Multi-Panel Layered Suede/Mesh",
    "style": "Color-Block Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": true,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-026",
    "name": "Florence Formal Monk Strap",
    "slug": "florence-formal-monk-strap",
    "brand": "ITALIA SHOES",
    "category": "Men",
    "gender": "Men",
    "price": 3299,
    "salePrice": 2599,
    "discountPercentage": 21,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Florence Formal Monk Strap from ITALIA SHOES. Engineered with polished italian aesthetic leather and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Double Monk Strap with Polished Italian Aesthetic Leather and high-durability cushioned sole.",
    "sku": "IS-MEN-026",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/SK4VgpJx/Screenshot-2026-09-21-231819.png",
    "images": [
      "https://i.postimg.cc/SK4VgpJx/Screenshot-2026-09-21-231819.png",
      "https://i.postimg.cc/CK47t6qY/Screenshot-2026-09-21-231828.png",
      "https://i.postimg.cc/25xGJXZr/Screenshot-2026-09-21-231832.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 13,
      "7": 18,
      "8": 23,
      "9": 10,
      "10": 15,
      "11": 20
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/SK4VgpJx/Screenshot-2026-09-21-231819.png",
          "https://i.postimg.cc/CK47t6qY/Screenshot-2026-09-21-231828.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/CK47t6qY/Screenshot-2026-09-21-231828.png",
          "https://i.postimg.cc/25xGJXZr/Screenshot-2026-09-21-231832.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      }
    ],
    "material": "Polished Italian Aesthetic Leather",
    "style": "Double Monk Strap",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-027",
    "name": "AeroBreeze Slip-On Comfort Shoe",
    "slug": "aerobreeze-slip-on-comfort-shoe",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Men",
    "price": 1899,
    "salePrice": 1399,
    "discountPercentage": 26,
    "description": "Experience exceptional comfort and authentic craftsmanship with the AeroBreeze Slip-On Comfort Shoe from ITALIA SHOES. Engineered with perforated breathable textile and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Slip-On with Perforated Breathable Textile and high-durability cushioned sole.",
    "sku": "IS-CAS-027",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/CK47t6qY/Screenshot-2026-09-21-231828.png",
    "images": [
      "https://i.postimg.cc/CK47t6qY/Screenshot-2026-09-21-231828.png",
      "https://i.postimg.cc/25xGJXZr/Screenshot-2026-09-21-231832.png",
      "https://i.postimg.cc/YSxRVyW7/Screenshot-2026-09-21-231839.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 16,
      "7": 21,
      "8": 26,
      "9": 13,
      "10": 18,
      "11": 23
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/CK47t6qY/Screenshot-2026-09-21-231828.png",
          "https://i.postimg.cc/25xGJXZr/Screenshot-2026-09-21-231832.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/25xGJXZr/Screenshot-2026-09-21-231832.png",
          "https://i.postimg.cc/YSxRVyW7/Screenshot-2026-09-21-231839.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      }
    ],
    "material": "Perforated Breathable Textile",
    "style": "Slip-On",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-028",
    "name": "Zenith Women's Training Flat",
    "slug": "zenith-women-s-training-flat",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 2199,
    "salePrice": 1699,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Zenith Women's Training Flat from ITALIA SHOES. Engineered with lightweight knit composite and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Training Flat with Lightweight Knit Composite and high-durability cushioned sole.",
    "sku": "IS-WOM-028",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/25xGJXZr/Screenshot-2026-09-21-231832.png",
    "images": [
      "https://i.postimg.cc/25xGJXZr/Screenshot-2026-09-21-231832.png",
      "https://i.postimg.cc/YSxRVyW7/Screenshot-2026-09-21-231839.png",
      "https://i.postimg.cc/1zKBTYqm/Screenshot-2026-09-21-231844.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 19,
      "5": 24,
      "6": 11,
      "7": 16,
      "8": 21
    },
    "stock": 91,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/25xGJXZr/Screenshot-2026-09-21-231832.png",
          "https://i.postimg.cc/YSxRVyW7/Screenshot-2026-09-21-231839.png"
        ],
        "sizes": {
          "4": 19,
          "5": 24,
          "6": 11,
          "7": 16,
          "8": 21
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/YSxRVyW7/Screenshot-2026-09-21-231839.png",
          "https://i.postimg.cc/1zKBTYqm/Screenshot-2026-09-21-231844.png"
        ],
        "sizes": {
          "4": 19,
          "5": 24,
          "6": 11,
          "7": 16,
          "8": 21
        }
      }
    ],
    "material": "Lightweight Knit Composite",
    "style": "Training Flat",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-029",
    "name": "StrideMax Orthopedic Daily Slide",
    "slug": "stridemax-orthopedic-daily-slide",
    "brand": "ITALIA SHOES",
    "category": "Sandals",
    "gender": "Unisex",
    "price": 1499,
    "salePrice": 1099,
    "discountPercentage": 27,
    "description": "Experience exceptional comfort and authentic craftsmanship with the StrideMax Orthopedic Daily Slide from ITALIA SHOES. Engineered with arch supporting dense eva and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Orthopedic Slide with Arch Supporting Dense EVA and high-durability cushioned sole.",
    "sku": "IS-SAN-029",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/YSxRVyW7/Screenshot-2026-09-21-231839.png",
    "images": [
      "https://i.postimg.cc/YSxRVyW7/Screenshot-2026-09-21-231839.png",
      "https://i.postimg.cc/1zKBTYqm/Screenshot-2026-09-21-231844.png",
      "https://i.postimg.cc/TPc0SHDK/Screenshot-2026-09-21-231849.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 22,
      "7": 27,
      "8": 14,
      "9": 19,
      "10": 24,
      "11": 11
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/YSxRVyW7/Screenshot-2026-09-21-231839.png",
          "https://i.postimg.cc/1zKBTYqm/Screenshot-2026-09-21-231844.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/1zKBTYqm/Screenshot-2026-09-21-231844.png",
          "https://i.postimg.cc/TPc0SHDK/Screenshot-2026-09-21-231849.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      }
    ],
    "material": "Arch Supporting Dense EVA",
    "style": "Orthopedic Slide",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": true,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-030",
    "name": "Apex Pro Track & Road Runner",
    "slug": "apex-pro-track-road-runner",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Men",
    "price": 3199,
    "salePrice": 2499,
    "discountPercentage": 22,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Apex Pro Track & Road Runner from ITALIA SHOES. Engineered with reinforced heel cup & breathable mesh and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Road Runner with Reinforced Heel Cup & Breathable Mesh and high-durability cushioned sole.",
    "sku": "IS-SPO-030",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/1zKBTYqm/Screenshot-2026-09-21-231844.png",
    "images": [
      "https://i.postimg.cc/1zKBTYqm/Screenshot-2026-09-21-231844.png",
      "https://i.postimg.cc/TPc0SHDK/Screenshot-2026-09-21-231849.png",
      "https://i.postimg.cc/vmvhjSVD/Screenshot-2026-09-21-231853.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 25,
      "7": 12,
      "8": 17,
      "9": 22,
      "10": 27,
      "11": 14
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/1zKBTYqm/Screenshot-2026-09-21-231844.png",
          "https://i.postimg.cc/TPc0SHDK/Screenshot-2026-09-21-231849.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/TPc0SHDK/Screenshot-2026-09-21-231849.png",
          "https://i.postimg.cc/vmvhjSVD/Screenshot-2026-09-21-231853.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      }
    ],
    "material": "Reinforced Heel Cup & Breathable Mesh",
    "style": "Road Runner",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-031",
    "name": "Sienna Casual Driving Shoe",
    "slug": "sienna-casual-driving-shoe",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Men",
    "price": 2599,
    "salePrice": 1999,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Sienna Casual Driving Shoe from ITALIA SHOES. Engineered with split rubber pebble sole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Driving Shoe with Split Rubber Pebble Sole and high-durability cushioned sole.",
    "sku": "IS-CAS-031",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/TPc0SHDK/Screenshot-2026-09-21-231849.png",
    "images": [
      "https://i.postimg.cc/TPc0SHDK/Screenshot-2026-09-21-231849.png",
      "https://i.postimg.cc/vmvhjSVD/Screenshot-2026-09-21-231853.png",
      "https://i.postimg.cc/tgzkfmxx/Screenshot-2026-09-21-231857.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/TPc0SHDK/Screenshot-2026-09-21-231849.png",
          "https://i.postimg.cc/vmvhjSVD/Screenshot-2026-09-21-231853.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/vmvhjSVD/Screenshot-2026-09-21-231853.png",
          "https://i.postimg.cc/tgzkfmxx/Screenshot-2026-09-21-231857.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "Split Rubber Pebble Sole",
    "style": "Driving Shoe",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-032",
    "name": "Luna Chic Metallic Accent Sneaker",
    "slug": "luna-chic-metallic-accent-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 2499,
    "salePrice": 1899,
    "discountPercentage": 24,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Luna Chic Metallic Accent Sneaker from ITALIA SHOES. Engineered with clean upper with rose-gold trim and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Fashion Sneaker with Clean Upper with Rose-Gold Trim and high-durability cushioned sole.",
    "sku": "IS-WOM-032",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/vmvhjSVD/Screenshot-2026-09-21-231853.png",
    "images": [
      "https://i.postimg.cc/vmvhjSVD/Screenshot-2026-09-21-231853.png",
      "https://i.postimg.cc/tgzkfmxx/Screenshot-2026-09-21-231857.png",
      "https://i.postimg.cc/HLtzKPyM/Screenshot-2026-09-21-231900.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 13,
      "5": 18,
      "6": 23,
      "7": 10,
      "8": 15
    },
    "stock": 79,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/vmvhjSVD/Screenshot-2026-09-21-231853.png",
          "https://i.postimg.cc/tgzkfmxx/Screenshot-2026-09-21-231857.png"
        ],
        "sizes": {
          "4": 13,
          "5": 18,
          "6": 23,
          "7": 10,
          "8": 15
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/tgzkfmxx/Screenshot-2026-09-21-231857.png",
          "https://i.postimg.cc/HLtzKPyM/Screenshot-2026-09-21-231900.png"
        ],
        "sizes": {
          "4": 13,
          "5": 18,
          "6": 23,
          "7": 10,
          "8": 15
        }
      }
    ],
    "material": "Clean Upper with Rose-Gold Trim",
    "style": "Fashion Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-033",
    "name": "Torino High-Top Street Sneaker",
    "slug": "torino-high-top-street-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Men",
    "price": 2899,
    "salePrice": 2299,
    "discountPercentage": 21,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Torino High-Top Street Sneaker from ITALIA SHOES. Engineered with padded collar & durable rubber outsole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "High-Top with Padded Collar & Durable Rubber Outsole and high-durability cushioned sole.",
    "sku": "IS-CAS-033",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/tgzkfmxx/Screenshot-2026-09-21-231857.png",
    "images": [
      "https://i.postimg.cc/tgzkfmxx/Screenshot-2026-09-21-231857.png",
      "https://i.postimg.cc/HLtzKPyM/Screenshot-2026-09-21-231900.png",
      "https://i.postimg.cc/YSxRVyWL/Screenshot-2026-09-21-231904.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 16,
      "7": 21,
      "8": 26,
      "9": 13,
      "10": 18,
      "11": 23
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/tgzkfmxx/Screenshot-2026-09-21-231857.png",
          "https://i.postimg.cc/HLtzKPyM/Screenshot-2026-09-21-231900.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/HLtzKPyM/Screenshot-2026-09-21-231900.png",
          "https://i.postimg.cc/YSxRVyWL/Screenshot-2026-09-21-231904.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      }
    ],
    "material": "Padded Collar & Durable Rubber Outsole",
    "style": "High-Top",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-034",
    "name": "Volt Kinetic Fitness Sneaker",
    "slug": "volt-kinetic-fitness-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Men",
    "price": 2999,
    "salePrice": 2299,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Volt Kinetic Fitness Sneaker from ITALIA SHOES. Engineered with responsive energy return cushion and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Fitness Trainer with Responsive Energy Return Cushion and high-durability cushioned sole.",
    "sku": "IS-SPO-034",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/HLtzKPyM/Screenshot-2026-09-21-231900.png",
    "images": [
      "https://i.postimg.cc/HLtzKPyM/Screenshot-2026-09-21-231900.png",
      "https://i.postimg.cc/YSxRVyWL/Screenshot-2026-09-21-231904.png",
      "https://i.postimg.cc/PqMycFw8/Screenshot-2026-09-21-231907.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 19,
      "7": 24,
      "8": 11,
      "9": 16,
      "10": 21,
      "11": 26
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/HLtzKPyM/Screenshot-2026-09-21-231900.png",
          "https://i.postimg.cc/YSxRVyWL/Screenshot-2026-09-21-231904.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/YSxRVyWL/Screenshot-2026-09-21-231904.png",
          "https://i.postimg.cc/PqMycFw8/Screenshot-2026-09-21-231907.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      }
    ],
    "material": "Responsive Energy Return Cushion",
    "style": "Fitness Trainer",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-035",
    "name": "Venice Braided Strap Leather Sandal",
    "slug": "venice-braided-strap-leather-sandal",
    "brand": "ITALIA SHOES",
    "category": "Sandals",
    "gender": "Men",
    "price": 1899,
    "salePrice": 1399,
    "discountPercentage": 26,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Venice Braided Strap Leather Sandal from ITALIA SHOES. Engineered with hand-interwoven synthetic leather and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Braided Sandal with Hand-Interwoven Synthetic Leather and high-durability cushioned sole.",
    "sku": "IS-SAN-035",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/YSxRVyWL/Screenshot-2026-09-21-231904.png",
    "images": [
      "https://i.postimg.cc/YSxRVyWL/Screenshot-2026-09-21-231904.png",
      "https://i.postimg.cc/PqMycFw8/Screenshot-2026-09-21-231907.png",
      "https://i.postimg.cc/CK47t6qs/Screenshot-2026-09-21-231910.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 22,
      "7": 27,
      "8": 14,
      "9": 19,
      "10": 24,
      "11": 11
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/YSxRVyWL/Screenshot-2026-09-21-231904.png",
          "https://i.postimg.cc/PqMycFw8/Screenshot-2026-09-21-231907.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/PqMycFw8/Screenshot-2026-09-21-231907.png",
          "https://i.postimg.cc/CK47t6qs/Screenshot-2026-09-21-231910.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      }
    ],
    "material": "Hand-Interwoven Synthetic Leather",
    "style": "Braided Sandal",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-036",
    "name": "Elegance Pointed Toe Women's Flat",
    "slug": "elegance-pointed-toe-women-s-flat",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 1999,
    "salePrice": 1499,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Elegance Pointed Toe Women's Flat from ITALIA SHOES. Engineered with cushioned insole & smooth finish and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Dress Flat with Cushioned Insole & Smooth Finish and high-durability cushioned sole.",
    "sku": "IS-WOM-036",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/PqMycFw8/Screenshot-2026-09-21-231907.png",
    "images": [
      "https://i.postimg.cc/PqMycFw8/Screenshot-2026-09-21-231907.png",
      "https://i.postimg.cc/CK47t6qs/Screenshot-2026-09-21-231910.png",
      "https://i.postimg.cc/V6LgcBqt/Screenshot-2026-09-21-231926.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 25,
      "5": 12,
      "6": 17,
      "7": 22,
      "8": 27
    },
    "stock": 103,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/PqMycFw8/Screenshot-2026-09-21-231907.png",
          "https://i.postimg.cc/CK47t6qs/Screenshot-2026-09-21-231910.png"
        ],
        "sizes": {
          "4": 25,
          "5": 12,
          "6": 17,
          "7": 22,
          "8": 27
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/CK47t6qs/Screenshot-2026-09-21-231910.png",
          "https://i.postimg.cc/V6LgcBqt/Screenshot-2026-09-21-231926.png"
        ],
        "sizes": {
          "4": 25,
          "5": 12,
          "6": 17,
          "7": 22,
          "8": 27
        }
      }
    ],
    "material": "Cushioned Insole & Smooth Finish",
    "style": "Dress Flat",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-037",
    "name": "Napoli Formal Lace-Up Brogue",
    "slug": "napoli-formal-lace-up-brogue",
    "brand": "ITALIA SHOES",
    "category": "Men",
    "gender": "Men",
    "price": 3099,
    "salePrice": 2399,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Napoli Formal Lace-Up Brogue from ITALIA SHOES. Engineered with high-density composite leather and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Oxford Brogue with High-Density Composite Leather and high-durability cushioned sole.",
    "sku": "IS-MEN-037",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/CK47t6qs/Screenshot-2026-09-21-231910.png",
    "images": [
      "https://i.postimg.cc/CK47t6qs/Screenshot-2026-09-21-231910.png",
      "https://i.postimg.cc/V6LgcBqt/Screenshot-2026-09-21-231926.png",
      "https://i.postimg.cc/wvT2dcXm/Screenshot-2026-09-21-231935.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/CK47t6qs/Screenshot-2026-09-21-231910.png",
          "https://i.postimg.cc/V6LgcBqt/Screenshot-2026-09-21-231926.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/V6LgcBqt/Screenshot-2026-09-21-231926.png",
          "https://i.postimg.cc/wvT2dcXm/Screenshot-2026-09-21-231935.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "High-Density Composite Leather",
    "style": "Oxford Brogue",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-038",
    "name": "BoostFlex Lightweight Walk Shoe",
    "slug": "boostflex-lightweight-walk-shoe",
    "brand": "ITALIA SHOES",
    "category": "New Arrivals",
    "gender": "Unisex",
    "price": 2399,
    "salePrice": 1799,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the BoostFlex Lightweight Walk Shoe from ITALIA SHOES. Engineered with ultra-lightweight elastic mesh and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Walking Shoe with Ultra-Lightweight Elastic Mesh and high-durability cushioned sole.",
    "sku": "IS-NEW-038",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/V6LgcBqt/Screenshot-2026-09-21-231926.png",
    "images": [
      "https://i.postimg.cc/V6LgcBqt/Screenshot-2026-09-21-231926.png",
      "https://i.postimg.cc/wvT2dcXm/Screenshot-2026-09-21-231935.png",
      "https://i.postimg.cc/pdBC71FB/Screenshot-2026-09-21-231940.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 13,
      "7": 18,
      "8": 23,
      "9": 10,
      "10": 15,
      "11": 20
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/V6LgcBqt/Screenshot-2026-09-21-231926.png",
          "https://i.postimg.cc/wvT2dcXm/Screenshot-2026-09-21-231935.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/wvT2dcXm/Screenshot-2026-09-21-231935.png",
          "https://i.postimg.cc/pdBC71FB/Screenshot-2026-09-21-231940.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      }
    ],
    "material": "Ultra-Lightweight Elastic Mesh",
    "style": "Walking Shoe",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": true,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-039",
    "name": "Enduro Marathon Cushion Sneaker",
    "slug": "enduro-marathon-cushion-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Men",
    "price": 3499,
    "salePrice": 2699,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Enduro Marathon Cushion Sneaker from ITALIA SHOES. Engineered with anti-fatigue midsole system and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Marathon Shoe with Anti-Fatigue Midsole System and high-durability cushioned sole.",
    "sku": "IS-SPO-039",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/wvT2dcXm/Screenshot-2026-09-21-231935.png",
    "images": [
      "https://i.postimg.cc/wvT2dcXm/Screenshot-2026-09-21-231935.png",
      "https://i.postimg.cc/pdBC71FB/Screenshot-2026-09-21-231940.png",
      "https://i.postimg.cc/sXDmR9YJ/Screenshot-2026-09-21-231944.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 16,
      "7": 21,
      "8": 26,
      "9": 13,
      "10": 18,
      "11": 23
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/wvT2dcXm/Screenshot-2026-09-21-231935.png",
          "https://i.postimg.cc/pdBC71FB/Screenshot-2026-09-21-231940.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/pdBC71FB/Screenshot-2026-09-21-231940.png",
          "https://i.postimg.cc/sXDmR9YJ/Screenshot-2026-09-21-231944.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      }
    ],
    "material": "Anti-Fatigue Midsole System",
    "style": "Marathon Shoe",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-040",
    "name": "Raven Stealth Triple-Black Sneaker",
    "slug": "raven-stealth-triple-black-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Offers",
    "gender": "Men",
    "price": 2599,
    "salePrice": 1799,
    "discountPercentage": 31,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Raven Stealth Triple-Black Sneaker from ITALIA SHOES. Engineered with deep black carbon textured upper and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Monochrome Sneaker with Deep Black Carbon Textured Upper and high-durability cushioned sole.",
    "sku": "IS-OFF-040",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/pdBC71FB/Screenshot-2026-09-21-231940.png",
    "images": [
      "https://i.postimg.cc/pdBC71FB/Screenshot-2026-09-21-231940.png",
      "https://i.postimg.cc/sXDmR9YJ/Screenshot-2026-09-21-231944.png",
      "https://i.postimg.cc/C1L7VHGC/Screenshot-2026-09-21-231956.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 19,
      "7": 24,
      "8": 11,
      "9": 16,
      "10": 21,
      "11": 26
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/pdBC71FB/Screenshot-2026-09-21-231940.png",
          "https://i.postimg.cc/sXDmR9YJ/Screenshot-2026-09-21-231944.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/sXDmR9YJ/Screenshot-2026-09-21-231944.png",
          "https://i.postimg.cc/C1L7VHGC/Screenshot-2026-09-21-231956.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      }
    ],
    "material": "Deep Black Carbon Textured Upper",
    "style": "Monochrome Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-041",
    "name": "Palermo Casual Suede-Touch Loafer",
    "slug": "palermo-casual-suede-touch-loafer",
    "brand": "ITALIA SHOES",
    "category": "Men",
    "gender": "Men",
    "price": 2799,
    "salePrice": 2099,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Palermo Casual Suede-Touch Loafer from ITALIA SHOES. Engineered with suede-finish microfiber and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Casual Loafer with Suede-Finish Microfiber and high-durability cushioned sole.",
    "sku": "IS-MEN-041",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/sXDmR9YJ/Screenshot-2026-09-21-231944.png",
    "images": [
      "https://i.postimg.cc/sXDmR9YJ/Screenshot-2026-09-21-231944.png",
      "https://i.postimg.cc/C1L7VHGC/Screenshot-2026-09-21-231956.png",
      "https://i.postimg.cc/ydYjzXmf/Screenshot-2026-09-21-232001.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 22,
      "7": 27,
      "8": 14,
      "9": 19,
      "10": 24,
      "11": 11
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/sXDmR9YJ/Screenshot-2026-09-21-231944.png",
          "https://i.postimg.cc/C1L7VHGC/Screenshot-2026-09-21-231956.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/C1L7VHGC/Screenshot-2026-09-21-231956.png",
          "https://i.postimg.cc/ydYjzXmf/Screenshot-2026-09-21-232001.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      }
    ],
    "material": "Suede-Finish Microfiber",
    "style": "Casual Loafer",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": true,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-042",
    "name": "SprintFlow Women's Cloud Jogger",
    "slug": "sprintflow-women-s-cloud-jogger",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 2399,
    "salePrice": 1799,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the SprintFlow Women's Cloud Jogger from ITALIA SHOES. Engineered with airflow mesh & pillowed tongue and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Jogging Shoe with Airflow Mesh & Pillowed Tongue and high-durability cushioned sole.",
    "sku": "IS-WOM-042",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/C1L7VHGC/Screenshot-2026-09-21-231956.png",
    "images": [
      "https://i.postimg.cc/C1L7VHGC/Screenshot-2026-09-21-231956.png",
      "https://i.postimg.cc/ydYjzXmf/Screenshot-2026-09-21-232001.png",
      "https://i.postimg.cc/Jn4xWcNx/Screenshot-2026-09-21-232005.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 25,
      "5": 12,
      "6": 17,
      "7": 22,
      "8": 27
    },
    "stock": 103,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/C1L7VHGC/Screenshot-2026-09-21-231956.png",
          "https://i.postimg.cc/ydYjzXmf/Screenshot-2026-09-21-232001.png"
        ],
        "sizes": {
          "4": 25,
          "5": 12,
          "6": 17,
          "7": 22,
          "8": 27
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/ydYjzXmf/Screenshot-2026-09-21-232001.png",
          "https://i.postimg.cc/Jn4xWcNx/Screenshot-2026-09-21-232005.png"
        ],
        "sizes": {
          "4": 25,
          "5": 12,
          "6": 17,
          "7": 22,
          "8": 27
        }
      }
    ],
    "material": "Airflow Mesh & Pillowed Tongue",
    "style": "Jogging Shoe",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-043",
    "name": "Triton Heavy-Duty Trek Sandal",
    "slug": "triton-heavy-duty-trek-sandal",
    "brand": "ITALIA SHOES",
    "category": "Sandals",
    "gender": "Men",
    "price": 1999,
    "salePrice": 1499,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Triton Heavy-Duty Trek Sandal from ITALIA SHOES. Engineered with triple adjustable velcro straps and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Trekking Sandal with Triple Adjustable Velcro Straps and high-durability cushioned sole.",
    "sku": "IS-SAN-043",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/ydYjzXmf/Screenshot-2026-09-21-232001.png",
    "images": [
      "https://i.postimg.cc/ydYjzXmf/Screenshot-2026-09-21-232001.png",
      "https://i.postimg.cc/Jn4xWcNx/Screenshot-2026-09-21-232005.png",
      "https://i.postimg.cc/QtxmrkQ4/Screenshot-2026-09-21-232014.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/ydYjzXmf/Screenshot-2026-09-21-232001.png",
          "https://i.postimg.cc/Jn4xWcNx/Screenshot-2026-09-21-232005.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/Jn4xWcNx/Screenshot-2026-09-21-232005.png",
          "https://i.postimg.cc/QtxmrkQ4/Screenshot-2026-09-21-232014.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "Triple Adjustable Velcro Straps",
    "style": "Trekking Sandal",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-044",
    "name": "Vintage 70s Heritage Court Sneaker",
    "slug": "vintage-70s-heritage-court-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Unisex",
    "price": 2499,
    "salePrice": 1899,
    "discountPercentage": 24,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Vintage 70s Heritage Court Sneaker from ITALIA SHOES. Engineered with off-white retro rubber cupsole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Vintage Sneaker with Off-White Retro Rubber Cupsole and high-durability cushioned sole.",
    "sku": "IS-CAS-044",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/Jn4xWcNx/Screenshot-2026-09-21-232005.png",
    "images": [
      "https://i.postimg.cc/Jn4xWcNx/Screenshot-2026-09-21-232005.png",
      "https://i.postimg.cc/QtxmrkQ4/Screenshot-2026-09-21-232014.png",
      "https://i.postimg.cc/XJ7L0cfR/Screenshot-2026-09-21-232019.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 13,
      "7": 18,
      "8": 23,
      "9": 10,
      "10": 15,
      "11": 20
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/Jn4xWcNx/Screenshot-2026-09-21-232005.png",
          "https://i.postimg.cc/QtxmrkQ4/Screenshot-2026-09-21-232014.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/QtxmrkQ4/Screenshot-2026-09-21-232014.png",
          "https://i.postimg.cc/XJ7L0cfR/Screenshot-2026-09-21-232019.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      }
    ],
    "material": "Off-White Retro Rubber Cupsole",
    "style": "Vintage Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-045",
    "name": "Sorrento Dress Horsebit Loafer",
    "slug": "sorrento-dress-horsebit-loafer",
    "brand": "ITALIA SHOES",
    "category": "Men",
    "gender": "Men",
    "price": 3299,
    "salePrice": 2599,
    "discountPercentage": 21,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Sorrento Dress Horsebit Loafer from ITALIA SHOES. Engineered with polished gold-tone bit ornament and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Horsebit Loafer with Polished Gold-Tone Bit Ornament and high-durability cushioned sole.",
    "sku": "IS-MEN-045",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/QtxmrkQ4/Screenshot-2026-09-21-232014.png",
    "images": [
      "https://i.postimg.cc/QtxmrkQ4/Screenshot-2026-09-21-232014.png",
      "https://i.postimg.cc/XJ7L0cfR/Screenshot-2026-09-21-232019.png",
      "https://i.postimg.cc/V6LgcBqV/Screenshot-2026-09-21-232022.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 16,
      "7": 21,
      "8": 26,
      "9": 13,
      "10": 18,
      "11": 23
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/QtxmrkQ4/Screenshot-2026-09-21-232014.png",
          "https://i.postimg.cc/XJ7L0cfR/Screenshot-2026-09-21-232019.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/XJ7L0cfR/Screenshot-2026-09-21-232019.png",
          "https://i.postimg.cc/V6LgcBqV/Screenshot-2026-09-21-232022.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      }
    ],
    "material": "Polished Gold-Tone Bit Ornament",
    "style": "Horsebit Loafer",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-046",
    "name": "Bella Women's Comfort Slip-On Flat",
    "slug": "bella-women-s-comfort-slip-on-flat",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 1899,
    "salePrice": 1399,
    "discountPercentage": 26,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Bella Women's Comfort Slip-On Flat from ITALIA SHOES. Engineered with flexible rubber outsole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Slip-On Flat with Flexible Rubber Outsole and high-durability cushioned sole.",
    "sku": "IS-WOM-046",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/XJ7L0cfR/Screenshot-2026-09-21-232019.png",
    "images": [
      "https://i.postimg.cc/XJ7L0cfR/Screenshot-2026-09-21-232019.png",
      "https://i.postimg.cc/V6LgcBqV/Screenshot-2026-09-21-232022.png",
      "https://i.postimg.cc/TwY0Xqj8/Screenshot-2026-09-21-232029.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 19,
      "5": 24,
      "6": 11,
      "7": 16,
      "8": 21
    },
    "stock": 91,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/XJ7L0cfR/Screenshot-2026-09-21-232019.png",
          "https://i.postimg.cc/V6LgcBqV/Screenshot-2026-09-21-232022.png"
        ],
        "sizes": {
          "4": 19,
          "5": 24,
          "6": 11,
          "7": 16,
          "8": 21
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/V6LgcBqV/Screenshot-2026-09-21-232022.png",
          "https://i.postimg.cc/TwY0Xqj8/Screenshot-2026-09-21-232029.png"
        ],
        "sizes": {
          "4": 19,
          "5": 24,
          "6": 11,
          "7": 16,
          "8": 21
        }
      }
    ],
    "material": "Flexible Rubber Outsole",
    "style": "Slip-On Flat",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-047",
    "name": "HyperSpeed Carbon Plate Racer",
    "slug": "hyperspeed-carbon-plate-racer",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Men",
    "price": 3699,
    "salePrice": 2899,
    "discountPercentage": 22,
    "description": "Experience exceptional comfort and authentic craftsmanship with the HyperSpeed Carbon Plate Racer from ITALIA SHOES. Engineered with engineered propulsion curve and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Racing Sneaker with Engineered Propulsion Curve and high-durability cushioned sole.",
    "sku": "IS-SPO-047",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/V6LgcBqV/Screenshot-2026-09-21-232022.png",
    "images": [
      "https://i.postimg.cc/V6LgcBqV/Screenshot-2026-09-21-232022.png",
      "https://i.postimg.cc/TwY0Xqj8/Screenshot-2026-09-21-232029.png",
      "https://i.postimg.cc/DZy6KdQ3/Screenshot-2026-09-21-232034.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 22,
      "7": 27,
      "8": 14,
      "9": 19,
      "10": 24,
      "11": 11
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/V6LgcBqV/Screenshot-2026-09-21-232022.png",
          "https://i.postimg.cc/TwY0Xqj8/Screenshot-2026-09-21-232029.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/TwY0Xqj8/Screenshot-2026-09-21-232029.png",
          "https://i.postimg.cc/DZy6KdQ3/Screenshot-2026-09-21-232034.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      }
    ],
    "material": "Engineered Propulsion Curve",
    "style": "Racing Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-048",
    "name": "Amalfi Coast Cork-Bed Sandal",
    "slug": "amalfi-coast-cork-bed-sandal",
    "brand": "ITALIA SHOES",
    "category": "Sandals",
    "gender": "Unisex",
    "price": 1799,
    "salePrice": 1299,
    "discountPercentage": 28,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Amalfi Coast Cork-Bed Sandal from ITALIA SHOES. Engineered with anatomic molded footbed and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Cork Footbed Sandal with Anatomic Molded Footbed and high-durability cushioned sole.",
    "sku": "IS-SAN-048",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/TwY0Xqj8/Screenshot-2026-09-21-232029.png",
    "images": [
      "https://i.postimg.cc/TwY0Xqj8/Screenshot-2026-09-21-232029.png",
      "https://i.postimg.cc/DZy6KdQ3/Screenshot-2026-09-21-232034.png",
      "https://i.postimg.cc/hjPsqb8B/Screenshot-2026-09-21-232042.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 25,
      "7": 12,
      "8": 17,
      "9": 22,
      "10": 27,
      "11": 14
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/TwY0Xqj8/Screenshot-2026-09-21-232029.png",
          "https://i.postimg.cc/DZy6KdQ3/Screenshot-2026-09-21-232034.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/DZy6KdQ3/Screenshot-2026-09-21-232034.png",
          "https://i.postimg.cc/hjPsqb8B/Screenshot-2026-09-21-232042.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      }
    ],
    "material": "Anatomic Molded Footbed",
    "style": "Cork Footbed Sandal",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-049",
    "name": "Nova Glide Reflective Runner",
    "slug": "nova-glide-reflective-runner",
    "brand": "ITALIA SHOES",
    "category": "New Arrivals",
    "gender": "Unisex",
    "price": 2799,
    "salePrice": 2199,
    "discountPercentage": 21,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Nova Glide Reflective Runner from ITALIA SHOES. Engineered with 3m reflective accents & knit and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Night Runner with 3M Reflective Accents & Knit and high-durability cushioned sole.",
    "sku": "IS-NEW-049",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/DZy6KdQ3/Screenshot-2026-09-21-232034.png",
    "images": [
      "https://i.postimg.cc/DZy6KdQ3/Screenshot-2026-09-21-232034.png",
      "https://i.postimg.cc/hjPsqb8B/Screenshot-2026-09-21-232042.png",
      "https://i.postimg.cc/B6YgZLpw/Screenshot-2026-09-21-232045.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/DZy6KdQ3/Screenshot-2026-09-21-232034.png",
          "https://i.postimg.cc/hjPsqb8B/Screenshot-2026-09-21-232042.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/hjPsqb8B/Screenshot-2026-09-21-232042.png",
          "https://i.postimg.cc/B6YgZLpw/Screenshot-2026-09-21-232045.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "3M Reflective Accents & Knit",
    "style": "Night Runner",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": true,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-050",
    "name": "Como Casual Knit Slip-On Trainer",
    "slug": "como-casual-knit-slip-on-trainer",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Men",
    "price": 2199,
    "salePrice": 1699,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Como Casual Knit Slip-On Trainer from ITALIA SHOES. Engineered with breathable sock-liner knit and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Slip-On Sneaker with Breathable Sock-Liner Knit and high-durability cushioned sole.",
    "sku": "IS-CAS-050",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/hjPsqb8B/Screenshot-2026-09-21-232042.png",
    "images": [
      "https://i.postimg.cc/hjPsqb8B/Screenshot-2026-09-21-232042.png",
      "https://i.postimg.cc/B6YgZLpw/Screenshot-2026-09-21-232045.png",
      "https://i.postimg.cc/1tCHRnBd/Screenshot-2026-09-21-232050.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 13,
      "7": 18,
      "8": 23,
      "9": 10,
      "10": 15,
      "11": 20
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/hjPsqb8B/Screenshot-2026-09-21-232042.png",
          "https://i.postimg.cc/B6YgZLpw/Screenshot-2026-09-21-232045.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/B6YgZLpw/Screenshot-2026-09-21-232045.png",
          "https://i.postimg.cc/1tCHRnBd/Screenshot-2026-09-21-232050.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      }
    ],
    "material": "Breathable Sock-Liner Knit",
    "style": "Slip-On Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-051",
    "name": "Diva Women's Cushion Active Sneaker",
    "slug": "diva-women-s-cushion-active-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 2299,
    "salePrice": 1749,
    "discountPercentage": 24,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Diva Women's Cushion Active Sneaker from ITALIA SHOES. Engineered with memory foam insole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Active Sneaker with Memory Foam Insole and high-durability cushioned sole.",
    "sku": "IS-WOM-051",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/B6YgZLpw/Screenshot-2026-09-21-232045.png",
    "images": [
      "https://i.postimg.cc/B6YgZLpw/Screenshot-2026-09-21-232045.png",
      "https://i.postimg.cc/1tCHRnBd/Screenshot-2026-09-21-232050.png",
      "https://i.postimg.cc/9M8pXRbv/Screenshot-2026-09-21-232054.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 16,
      "5": 21,
      "6": 26,
      "7": 13,
      "8": 18
    },
    "stock": 94,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/B6YgZLpw/Screenshot-2026-09-21-232045.png",
          "https://i.postimg.cc/1tCHRnBd/Screenshot-2026-09-21-232050.png"
        ],
        "sizes": {
          "4": 16,
          "5": 21,
          "6": 26,
          "7": 13,
          "8": 18
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/1tCHRnBd/Screenshot-2026-09-21-232050.png",
          "https://i.postimg.cc/9M8pXRbv/Screenshot-2026-09-21-232054.png"
        ],
        "sizes": {
          "4": 16,
          "5": 21,
          "6": 26,
          "7": 13,
          "8": 18
        }
      }
    ],
    "material": "Memory Foam Insole",
    "style": "Active Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-052",
    "name": "Titan Grip Rugged Trail Shoe",
    "slug": "titan-grip-rugged-trail-shoe",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Men",
    "price": 3399,
    "salePrice": 2599,
    "discountPercentage": 24,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Titan Grip Rugged Trail Shoe from ITALIA SHOES. Engineered with reinforced toe bumper & cleated sole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Trail Shoe with Reinforced Toe Bumper & Cleated Sole and high-durability cushioned sole.",
    "sku": "IS-SPO-052",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/1tCHRnBd/Screenshot-2026-09-21-232050.png",
    "images": [
      "https://i.postimg.cc/1tCHRnBd/Screenshot-2026-09-21-232050.png",
      "https://i.postimg.cc/9M8pXRbv/Screenshot-2026-09-21-232054.png",
      "https://i.postimg.cc/G27Q38KN/Screenshot-2026-09-21-232100.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 19,
      "7": 24,
      "8": 11,
      "9": 16,
      "10": 21,
      "11": 26
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/1tCHRnBd/Screenshot-2026-09-21-232050.png",
          "https://i.postimg.cc/9M8pXRbv/Screenshot-2026-09-21-232054.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/9M8pXRbv/Screenshot-2026-09-21-232054.png",
          "https://i.postimg.cc/G27Q38KN/Screenshot-2026-09-21-232100.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      }
    ],
    "material": "Reinforced Toe Bumper & Cleated Sole",
    "style": "Trail Shoe",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-053",
    "name": "Bari Formal Plain Toe Derby",
    "slug": "bari-formal-plain-toe-derby",
    "brand": "ITALIA SHOES",
    "category": "Offers",
    "gender": "Men",
    "price": 2799,
    "salePrice": 1899,
    "discountPercentage": 32,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Bari Formal Plain Toe Derby from ITALIA SHOES. Engineered with classic dress finish and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Plain Derby with Classic Dress Finish and high-durability cushioned sole.",
    "sku": "IS-OFF-053",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/9M8pXRbv/Screenshot-2026-09-21-232054.png",
    "images": [
      "https://i.postimg.cc/9M8pXRbv/Screenshot-2026-09-21-232054.png",
      "https://i.postimg.cc/G27Q38KN/Screenshot-2026-09-21-232100.png",
      "https://i.postimg.cc/HxZ2Wczq/Screenshot-2026-09-21-232105.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 22,
      "7": 27,
      "8": 14,
      "9": 19,
      "10": 24,
      "11": 11
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/9M8pXRbv/Screenshot-2026-09-21-232054.png",
          "https://i.postimg.cc/G27Q38KN/Screenshot-2026-09-21-232100.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/G27Q38KN/Screenshot-2026-09-21-232100.png",
          "https://i.postimg.cc/HxZ2Wczq/Screenshot-2026-09-21-232105.png"
        ],
        "sizes": {
          "6": 22,
          "7": 27,
          "8": 14,
          "9": 19,
          "10": 24,
          "11": 11
        }
      }
    ],
    "material": "Classic Dress Finish",
    "style": "Plain Derby",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": true,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-054",
    "name": "BreezeWalk Women's Daily Loafer",
    "slug": "breezewalk-women-s-daily-loafer",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 1999,
    "salePrice": 1499,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the BreezeWalk Women's Daily Loafer from ITALIA SHOES. Engineered with padded arch & soft lining and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Comfort Loafer with Padded Arch & Soft Lining and high-durability cushioned sole.",
    "sku": "IS-WOM-054",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/G27Q38KN/Screenshot-2026-09-21-232100.png",
    "images": [
      "https://i.postimg.cc/G27Q38KN/Screenshot-2026-09-21-232100.png",
      "https://i.postimg.cc/HxZ2Wczq/Screenshot-2026-09-21-232105.png",
      "https://i.postimg.cc/LXCT4YvK/Screenshot-2026-09-21-232110.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 25,
      "5": 12,
      "6": 17,
      "7": 22,
      "8": 27
    },
    "stock": 103,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/G27Q38KN/Screenshot-2026-09-21-232100.png",
          "https://i.postimg.cc/HxZ2Wczq/Screenshot-2026-09-21-232105.png"
        ],
        "sizes": {
          "4": 25,
          "5": 12,
          "6": 17,
          "7": 22,
          "8": 27
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/HxZ2Wczq/Screenshot-2026-09-21-232105.png",
          "https://i.postimg.cc/LXCT4YvK/Screenshot-2026-09-21-232110.png"
        ],
        "sizes": {
          "4": 25,
          "5": 12,
          "6": 17,
          "7": 22,
          "8": 27
        }
      }
    ],
    "material": "Padded Arch & Soft Lining",
    "style": "Comfort Loafer",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-055",
    "name": "Cruiser All-Weather Sport Sandal",
    "slug": "cruiser-all-weather-sport-sandal",
    "brand": "ITALIA SHOES",
    "category": "Sandals",
    "gender": "Men",
    "price": 1699,
    "salePrice": 1249,
    "discountPercentage": 26,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Cruiser All-Weather Sport Sandal from ITALIA SHOES. Engineered with water-repellent webbing and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Sport Sandal with Water-Repellent Webbing and high-durability cushioned sole.",
    "sku": "IS-SAN-055",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/HxZ2Wczq/Screenshot-2026-09-21-232105.png",
    "images": [
      "https://i.postimg.cc/HxZ2Wczq/Screenshot-2026-09-21-232105.png",
      "https://i.postimg.cc/LXCT4YvK/Screenshot-2026-09-21-232110.png",
      "https://i.postimg.cc/W3WnpFSc/Screenshot-2026-09-21-232115.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/HxZ2Wczq/Screenshot-2026-09-21-232105.png",
          "https://i.postimg.cc/LXCT4YvK/Screenshot-2026-09-21-232110.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/LXCT4YvK/Screenshot-2026-09-21-232110.png",
          "https://i.postimg.cc/W3WnpFSc/Screenshot-2026-09-21-232115.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "Water-Repellent Webbing",
    "style": "Sport Sandal",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-056",
    "name": "Metro Minimalist Low-Top Sneaker",
    "slug": "metro-minimalist-low-top-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Men",
    "price": 2299,
    "salePrice": 1799,
    "discountPercentage": 22,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Metro Minimalist Low-Top Sneaker from ITALIA SHOES. Engineered with clean stitched panel lines and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Low-Top with Clean Stitched Panel Lines and high-durability cushioned sole.",
    "sku": "IS-CAS-056",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/LXCT4YvK/Screenshot-2026-09-21-232110.png",
    "images": [
      "https://i.postimg.cc/LXCT4YvK/Screenshot-2026-09-21-232110.png",
      "https://i.postimg.cc/W3WnpFSc/Screenshot-2026-09-21-232115.png",
      "https://i.postimg.cc/DZjgfJ5T/Screenshot-2026-09-21-232118.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 13,
      "7": 18,
      "8": 23,
      "9": 10,
      "10": 15,
      "11": 20
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/LXCT4YvK/Screenshot-2026-09-21-232110.png",
          "https://i.postimg.cc/W3WnpFSc/Screenshot-2026-09-21-232115.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/W3WnpFSc/Screenshot-2026-09-21-232115.png",
          "https://i.postimg.cc/DZjgfJ5T/Screenshot-2026-09-21-232118.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      }
    ],
    "material": "Clean Stitched Panel Lines",
    "style": "Low-Top",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": false,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-057",
    "name": "Dynamo Cushion Sprint Sneaker",
    "slug": "dynamo-cushion-sprint-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Men",
    "price": 2999,
    "salePrice": 2299,
    "discountPercentage": 23,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Dynamo Cushion Sprint Sneaker from ITALIA SHOES. Engineered with impact-absorbing heel air cell and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Sprint Sneaker with Impact-Absorbing Heel Air Cell and high-durability cushioned sole.",
    "sku": "IS-SPO-057",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/W3WnpFSc/Screenshot-2026-09-21-232115.png",
    "images": [
      "https://i.postimg.cc/W3WnpFSc/Screenshot-2026-09-21-232115.png",
      "https://i.postimg.cc/DZjgfJ5T/Screenshot-2026-09-21-232118.png",
      "https://i.postimg.cc/MTPDZMtw/Screenshot-2026-09-21-232132.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 16,
      "7": 21,
      "8": 26,
      "9": 13,
      "10": 18,
      "11": 23
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/W3WnpFSc/Screenshot-2026-09-21-232115.png",
          "https://i.postimg.cc/DZjgfJ5T/Screenshot-2026-09-21-232118.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/DZjgfJ5T/Screenshot-2026-09-21-232118.png",
          "https://i.postimg.cc/MTPDZMtw/Screenshot-2026-09-21-232132.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      }
    ],
    "material": "Impact-Absorbing Heel Air Cell",
    "style": "Sprint Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": true,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-058",
    "name": "Milano Executive Oxford Shoe",
    "slug": "milano-executive-oxford-shoe",
    "brand": "ITALIA SHOES",
    "category": "Offers",
    "gender": "Men",
    "price": 2999,
    "salePrice": 1999,
    "discountPercentage": 33,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Milano Executive Oxford Shoe from ITALIA SHOES. Engineered with premium laced dress upper and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Oxford Shoe with Premium Laced Dress Upper and high-durability cushioned sole.",
    "sku": "IS-OFF-058",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/DZjgfJ5T/Screenshot-2026-09-21-232118.png",
    "images": [
      "https://i.postimg.cc/DZjgfJ5T/Screenshot-2026-09-21-232118.png",
      "https://i.postimg.cc/MTPDZMtw/Screenshot-2026-09-21-232132.png",
      "https://i.postimg.cc/LXCT4YvH/Screenshot-2026-09-21-232138.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 19,
      "7": 24,
      "8": 11,
      "9": 16,
      "10": 21,
      "11": 26
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/DZjgfJ5T/Screenshot-2026-09-21-232118.png",
          "https://i.postimg.cc/MTPDZMtw/Screenshot-2026-09-21-232132.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/MTPDZMtw/Screenshot-2026-09-21-232132.png",
          "https://i.postimg.cc/LXCT4YvH/Screenshot-2026-09-21-232138.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      }
    ],
    "material": "Premium Laced Dress Upper",
    "style": "Oxford Shoe",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": true,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-059",
    "name": "Stella Women's Pastel Active Sneaker",
    "slug": "stella-women-s-pastel-active-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Women",
    "gender": "Women",
    "price": 2399,
    "salePrice": 1799,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Stella Women's Pastel Active Sneaker from ITALIA SHOES. Engineered with soft-touch breathable mesh and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Fashion Trainer with Soft-Touch Breathable Mesh and high-durability cushioned sole.",
    "sku": "IS-WOM-059",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/MTPDZMtw/Screenshot-2026-09-21-232132.png",
    "images": [
      "https://i.postimg.cc/MTPDZMtw/Screenshot-2026-09-21-232132.png",
      "https://i.postimg.cc/LXCT4YvH/Screenshot-2026-09-21-232138.png",
      "https://i.postimg.cc/V6GRsr4s/Screenshot-2026-09-21-232141.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "sizeStock": {
      "4": 22,
      "5": 27,
      "6": 14,
      "7": 19,
      "8": 24
    },
    "stock": 106,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/MTPDZMtw/Screenshot-2026-09-21-232132.png",
          "https://i.postimg.cc/LXCT4YvH/Screenshot-2026-09-21-232138.png"
        ],
        "sizes": {
          "4": 22,
          "5": 27,
          "6": 14,
          "7": 19,
          "8": 24
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/LXCT4YvH/Screenshot-2026-09-21-232138.png",
          "https://i.postimg.cc/V6GRsr4s/Screenshot-2026-09-21-232141.png"
        ],
        "sizes": {
          "4": 22,
          "5": 27,
          "6": 14,
          "7": 19,
          "8": 24
        }
      }
    ],
    "material": "Soft-Touch Breathable Mesh",
    "style": "Fashion Trainer",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": true,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-060",
    "name": "Coastline Comfort Fisherman Sandal",
    "slug": "coastline-comfort-fisherman-sandal",
    "brand": "ITALIA SHOES",
    "category": "Sandals",
    "gender": "Men",
    "price": 1899,
    "salePrice": 1399,
    "discountPercentage": 26,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Coastline Comfort Fisherman Sandal from ITALIA SHOES. Engineered with enclosed toe protection and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Fisherman Sandal with Enclosed Toe Protection and high-durability cushioned sole.",
    "sku": "IS-SAN-060",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/LXCT4YvH/Screenshot-2026-09-21-232138.png",
    "images": [
      "https://i.postimg.cc/LXCT4YvH/Screenshot-2026-09-21-232138.png",
      "https://i.postimg.cc/V6GRsr4s/Screenshot-2026-09-21-232141.png",
      "https://i.postimg.cc/4dL547wN/Screenshot-2026-09-21-232151.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 25,
      "7": 12,
      "8": 17,
      "9": 22,
      "10": 27,
      "11": 14
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/LXCT4YvH/Screenshot-2026-09-21-232138.png",
          "https://i.postimg.cc/V6GRsr4s/Screenshot-2026-09-21-232141.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/V6GRsr4s/Screenshot-2026-09-21-232141.png",
          "https://i.postimg.cc/4dL547wN/Screenshot-2026-09-21-232151.png"
        ],
        "sizes": {
          "6": 25,
          "7": 12,
          "8": 17,
          "9": 22,
          "10": 27,
          "11": 14
        }
      }
    ],
    "material": "Enclosed Toe Protection",
    "style": "Fisherman Sandal",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": true,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-061",
    "name": "Urban Rider Skate Low Sneaker",
    "slug": "urban-rider-skate-low-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Men",
    "price": 2499,
    "salePrice": 1899,
    "discountPercentage": 24,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Urban Rider Skate Low Sneaker from ITALIA SHOES. Engineered with reinforced heel & cupsole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Skate Low with Reinforced Heel & Cupsole and high-durability cushioned sole.",
    "sku": "IS-CAS-061",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/V6GRsr4s/Screenshot-2026-09-21-232141.png",
    "images": [
      "https://i.postimg.cc/V6GRsr4s/Screenshot-2026-09-21-232141.png",
      "https://i.postimg.cc/4dL547wN/Screenshot-2026-09-21-232151.png",
      "https://i.postimg.cc/C1PNMBJK/Screenshot-2026-09-21-232154.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 10,
      "7": 15,
      "8": 20,
      "9": 25,
      "10": 12,
      "11": 17
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/V6GRsr4s/Screenshot-2026-09-21-232141.png",
          "https://i.postimg.cc/4dL547wN/Screenshot-2026-09-21-232151.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/4dL547wN/Screenshot-2026-09-21-232151.png",
          "https://i.postimg.cc/C1PNMBJK/Screenshot-2026-09-21-232154.png"
        ],
        "sizes": {
          "6": 10,
          "7": 15,
          "8": 20,
          "9": 25,
          "10": 12,
          "11": 17
        }
      }
    ],
    "material": "Reinforced Heel & Cupsole",
    "style": "Skate Low",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": true,
    "bestSeller": true,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-062",
    "name": "SpeedCraft Pro Gym Sneaker",
    "slug": "speedcraft-pro-gym-sneaker",
    "brand": "ITALIA SHOES",
    "category": "Sports",
    "gender": "Unisex",
    "price": 3199,
    "salePrice": 2499,
    "discountPercentage": 22,
    "description": "Experience exceptional comfort and authentic craftsmanship with the SpeedCraft Pro Gym Sneaker from ITALIA SHOES. Engineered with lateral stability cage and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Gym Trainer with Lateral Stability Cage and high-durability cushioned sole.",
    "sku": "IS-SPO-062",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/4dL547wN/Screenshot-2026-09-21-232151.png",
    "images": [
      "https://i.postimg.cc/4dL547wN/Screenshot-2026-09-21-232151.png",
      "https://i.postimg.cc/C1PNMBJK/Screenshot-2026-09-21-232154.png",
      "https://i.postimg.cc/SsTrQ2Vj/Screenshot-2026-09-21-232201.png"
    ],
    "colors": [
      "Classic Black",
      "Rich Tan",
      "Coffee Brown"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 13,
      "7": 18,
      "8": 23,
      "9": 10,
      "10": 15,
      "11": 20
    },
    "stock": 99,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Classic Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/4dL547wN/Screenshot-2026-09-21-232151.png",
          "https://i.postimg.cc/C1PNMBJK/Screenshot-2026-09-21-232154.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      },
      {
        "color": "Rich Tan",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/C1PNMBJK/Screenshot-2026-09-21-232154.png",
          "https://i.postimg.cc/SsTrQ2Vj/Screenshot-2026-09-21-232201.png"
        ],
        "sizes": {
          "6": 13,
          "7": 18,
          "8": 23,
          "9": 10,
          "10": 15,
          "11": 20
        }
      }
    ],
    "material": "Lateral Stability Cage",
    "style": "Gym Trainer",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": true,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-063",
    "name": "Primo Casual Slip-On Moccasin",
    "slug": "primo-casual-slip-on-moccasin",
    "brand": "ITALIA SHOES",
    "category": "Casual",
    "gender": "Men",
    "price": 2399,
    "salePrice": 1799,
    "discountPercentage": 25,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Primo Casual Slip-On Moccasin from ITALIA SHOES. Engineered with padded collar & flex sole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Casual Moccasin with Padded Collar & Flex Sole and high-durability cushioned sole.",
    "sku": "IS-CAS-063",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/C1PNMBJK/Screenshot-2026-09-21-232154.png",
    "images": [
      "https://i.postimg.cc/C1PNMBJK/Screenshot-2026-09-21-232154.png",
      "https://i.postimg.cc/SsTrQ2Vj/Screenshot-2026-09-21-232201.png",
      "https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png"
    ],
    "colors": [
      "Triple Black",
      "Crisp White",
      "Olive Green"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 16,
      "7": 21,
      "8": 26,
      "9": 13,
      "10": 18,
      "11": 23
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Triple Black",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/C1PNMBJK/Screenshot-2026-09-21-232154.png",
          "https://i.postimg.cc/SsTrQ2Vj/Screenshot-2026-09-21-232201.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      },
      {
        "color": "Crisp White",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/SsTrQ2Vj/Screenshot-2026-09-21-232201.png",
          "https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png"
        ],
        "sizes": {
          "6": 16,
          "7": 21,
          "8": 26,
          "9": 13,
          "10": 18,
          "11": 23
        }
      }
    ],
    "material": "Padded Collar & Flex Sole",
    "style": "Casual Moccasin",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": false,
    "newArrival": true,
    "bestSeller": false,
    "offer": true,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  },
  {
    "id": "prod-is-064",
    "name": "Heritage Italia Signature Edition",
    "slug": "heritage-italia-signature-edition",
    "brand": "ITALIA SHOES",
    "category": "New Arrivals",
    "gender": "Unisex",
    "price": 3499,
    "salePrice": 2799,
    "discountPercentage": 20,
    "description": "Experience exceptional comfort and authentic craftsmanship with the Heritage Italia Signature Edition from ITALIA SHOES. Engineered with handcrafted detail & italia insole and an ergonomic sole profile for all-day cushioning, durable grip, and versatile styling.",
    "shortDescription": "Signature Sneaker with Handcrafted Detail & Italia Insole and high-durability cushioned sole.",
    "sku": "IS-NEW-064",
    "currency": "INR",
    "thumbnail": "https://i.postimg.cc/SsTrQ2Vj/Screenshot-2026-09-21-232201.png",
    "images": [
      "https://i.postimg.cc/SsTrQ2Vj/Screenshot-2026-09-21-232201.png",
      "https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png",
      "https://i.postimg.cc/RVjgntm7/Screenshot-2026-09-21-231644.png"
    ],
    "colors": [
      "Black / White",
      "Navy Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "sizeStock": {
      "6": 19,
      "7": 24,
      "8": 11,
      "9": 16,
      "10": 21,
      "11": 26
    },
    "stock": 117,
    "sizeSystem": "India",
    "variants": [
      {
        "color": "Black / White",
        "colorCode": "#111111",
        "images": [
          "https://i.postimg.cc/SsTrQ2Vj/Screenshot-2026-09-21-232201.png",
          "https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      },
      {
        "color": "Navy Blue",
        "colorCode": "#2b2b2b",
        "images": [
          "https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png",
          "https://i.postimg.cc/RVjgntm7/Screenshot-2026-09-21-231644.png"
        ],
        "sizes": {
          "6": 19,
          "7": 24,
          "8": 11,
          "9": 16,
          "10": 21,
          "11": 26
        }
      }
    ],
    "material": "Handcrafted Detail & Italia Insole",
    "style": "Signature Sneaker",
    "features": [
      "Engineered for daily Indian climate & prolonged foot comfort",
      "Ergonomic arch support with shock-absorbing midsole",
      "Non-slip high-traction rubber outsole",
      "Reinforced stitching and durable heel counter"
    ],
    "featured": true,
    "newArrival": true,
    "bestSeller": false,
    "offer": false,
    "status": "active",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-09-21T18:00:00Z"
  }
];
