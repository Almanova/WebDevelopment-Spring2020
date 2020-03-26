import { Product } from './product';

export const LAPTOPS: Product[] = [
    {   
        id: 11, 
        categoryId: 1, 
        name: 'MacBook Air', 
        price: 1461, 
        rating: 4.9,
        description: 'PanTong 2019 model Apple MacBook Air 13 inch 128G silver/space gray/gold Apple Authorized Online Seller',
        link: 'https://www.aliexpress.com/item/4000014299035.html?spm=a2g0o.productlist.0.0.1a2919057cpflI&algo_pvid=422ff851-f3f4-4ca2-b282-69f9992d305b&algo_expid=422ff851-f3f4-4ca2-b282-69f9992d305b-0&btsid=8f54ce30-dfde-46f6-ad24-652605ed2763&ws_ab_test=searchweb0_0,searchweb201602_5,searchweb201603_53',
        images: ['https://ae01.alicdn.com/kf/HTB1YOISaEz1gK0jSZLeq6z9kVXao/PanTong-2019-model-Apple-MacBook-Air-13-inch-128G-silver-space-gray-gold-Apple-Authorized-Online.jpg', 'https://ae01.alicdn.com/kf/HTB1_.MPapY7gK0jSZKzq6yikpXaO/PanTong-2019-model-Apple-MacBook-Air-13-inch-128G-silver-space-gray-gold-Apple-Authorized-Online.jpg', 'https://ae01.alicdn.com/kf/HTB1YcISavb2gK0jSZK9q6yEgFXaw/PanTong-2019-model-Apple-MacBook-Air-13-inch-128G-silver-space-gray-gold-Apple-Authorized-Online.jpg'],
        main: 'https://ae01.alicdn.com/kf/HTB1YOISaEz1gK0jSZLeq6z9kVXao/PanTong-2019-model-Apple-MacBook-Air-13-inch-128G-silver-space-gray-gold-Apple-Authorized-Online.jpg',
        share: ''
    },
    {   
        id: 12, 
        categoryId: 1, 
        name: 'Xiaomi Mi Laptop Air', 
        price: 1386, 
        rating: 4.8,
        description: 'Xiaomi Mi Laptop Air Pro 15.6 Inch GTX 1050 Max-Q Notebook Intel Core i7 8550U CPU NVIDIA 16GB 256GB Fingerprint Windows 10',
        link: 'https://www.aliexpress.com/item/32962218679.html?spm=a2g0o.productlist.0.0.1a2919057cpflI&algo_pvid=48fe075a-2ac9-434e-bf5f-dc354987550d&algo_expid=48fe075a-2ac9-434e-bf5f-dc354987550d-0&btsid=a68d45fb-cffe-4d4f-9b86-12cbdbd4b312&ws_ab_test=searchweb0_0,searchweb201602_5,searchweb201603_53',
        images: ['https://ae01.alicdn.com/kf/Heec6739d2dd647b1bf3c40cd853bc50bv/Xiaomi-Mi-Laptop-Air-Pro-15-6-Inch-GTX-1050-Max-Q-Notebook-Intel-Core-i7.jpg', 'https://ae01.alicdn.com/kf/HTB11lxfbuL2gK0jSZFmq6A7iXXaq/Xiaomi-Mi-Laptop-Air-Pro-15-6-Inch-GTX-1050-Max-Q-Notebook-Intel-Core-i7.jpg'],
        main: 'https://ae01.alicdn.com/kf/Heec6739d2dd647b1bf3c40cd853bc50bv/Xiaomi-Mi-Laptop-Air-Pro-15-6-Inch-GTX-1050-Max-Q-Notebook-Intel-Core-i7.jpg',
        share: ''
    },
];

export const PHONES: Product[] = [
    {
        id: 21,
        categoryId: 2,
        name: 'iPhone 11 Pro/Pro Max',
        price: 1044,
        rating: 5,
        description: 'Original New iPhone 11 Pro/Pro Max Triple Rear Camera 5.8/6.5" Super AMOLED Display A13 Chipset IOS 13 Smart Phone MI BlueTooth',
        link: 'https://www.aliexpress.com/item/4000200667700.html?spm=a2g0o.productlist.0.0.390566aeK2OT31&algo_pvid=2556ed76-35c6-44c0-a1d6-e61c9ffeafae&algo_expid=2556ed76-35c6-44c0-a1d6-e61c9ffeafae-0&btsid=08b8734e-8968-493c-94fe-e80ee0b0e10e&ws_ab_test=searchweb0_0,searchweb201602_5,searchweb201603_53',
        images: ['https://ae01.alicdn.com/kf/U894242ef4c3b4b26b24c84aca7c78f53w/Original-New-iPhone-11-Pro-Pro-Max-Triple-Rear-Camera-5-8-6-5-Super-AMOLED.jpg'],
        main: 'https://ae01.alicdn.com/kf/U894242ef4c3b4b26b24c84aca7c78f53w/Original-New-iPhone-11-Pro-Pro-Max-Triple-Rear-Camera-5-8-6-5-Super-AMOLED.jpg',
        share: ''
    }
];

export const ALL_PRODUCTS = [ ...LAPTOPS, ...PHONES ];