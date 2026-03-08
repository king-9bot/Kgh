import { Product, Category } from './types';

export const categories: Category[] = [
  { id: '1', name: 'Mobiles', image: 'https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' },
  { id: '2', name: 'Electronics', image: 'https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' },
  { id: '3', name: 'Fashion', image: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d183db9c51c3256.png?q=100' },
  { id: '4', name: 'Home', image: 'https://rukminim2.flixcart.com/flap/128/128/image/ab7e2c021d97a8e2.png?q=100' },
  { id: '5', name: 'Appliances', image: 'https://rukminim2.flixcart.com/flap/128/128/image/0ff8ad62528df547.png?q=100' },
  { id: '6', name: 'Travel', image: 'https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' },
  { id: '7', name: 'Beauty & Toys', image: 'https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' },
  { id: '8', name: 'Grocery', image: 'https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'iPhone 15 (Blue, 128 GB)',
    price: 65999,
    originalPrice: 79900,
    discount: 17,
    rating: 4.6,
    reviewsCount: 12450,
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5htuxrt4cc.jpeg?q=70',
    category: 'Mobiles',
    description: '128 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display | 48MP + 12MP | 12MP Front Camera | A16 Bionic Chip, 6 Core Processor',
    isAssured: true
  },
  {
    id: 'p2',
    name: 'SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)',
    price: 129999,
    originalPrice: 134999,
    discount: 3,
    rating: 4.7,
    reviewsCount: 850,
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imagx9egm9mg7v5b.jpeg?q=70',
    category: 'Mobiles',
    description: '12 GB RAM | 256 GB ROM | 17.27 cm (6.8 inch) Quad HD+ Display | 200MP + 50MP + 12MP + 10MP | 12MP Front Camera | 5000 mAh Battery | Snapdragon 8 Gen 3 Processor',
    isAssured: true
  },
  {
    id: 'p3',
    name: 'Sony WH-1000XM5 Bluetooth Headset',
    price: 26990,
    originalPrice: 34990,
    discount: 22,
    rating: 4.5,
    reviewsCount: 3200,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/d/m/y/-original-imagm2z8vcygh78b.jpeg?q=70',
    category: 'Electronics',
    description: 'With Mic:Yes | Bluetooth version: 5.2 | Wireless range: 10 m | Battery life: 30 hrs | Charging time: 3.5 hrs | Industry-leading noise cancellation',
    isAssured: true
  },
  {
    id: 'p4',
    name: 'Canon EOS R100 Mirrorless Camera',
    price: 44990,
    originalPrice: 54995,
    discount: 18,
    rating: 4.3,
    reviewsCount: 150,
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/camera/z/s/u/eos-r100-24-1-r100-canon-original-imagpzkfyzm9yv9v.jpeg?q=70',
    category: 'Electronics',
    description: 'Effective Pixels: 24.1 MP | Sensor Type: CMOS | WiFi Available | Full HD',
    isAssured: true
  },
  {
    id: 'p5',
    name: 'Men Regular Fit Solid Spread Collar Casual Shirt',
    price: 499,
    originalPrice: 1999,
    discount: 75,
    rating: 4.1,
    reviewsCount: 4500,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/z/i/9/m-st2-vebnor-original-imagpv8p7v6n9z6v.jpeg?q=70',
    category: 'Fashion',
    description: 'Pack of 1 | Fabric: Cotton Blend | Sleeve: Full Sleeve | Pattern: Solid',
    isAssured: false
  },
  {
    id: 'p6',
    name: 'Mi by Xiaomi 108 cm (43 inch) Full HD LED Smart Google TV',
    price: 22999,
    originalPrice: 35999,
    discount: 36,
    rating: 4.2,
    reviewsCount: 15600,
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/television/g/n/v/-original-imagv729f8f4f9f4.jpeg?q=70',
    category: 'Appliances',
    description: 'Full HD 1920 x 1080 Pixels | Google TV | 20W Speaker Output | 60Hz Refresh Rate',
    isAssured: true
  }
];
