export interface Product {
    id: number;
    categoryId: number;
    name: string;
    price: number;
    rating: number;
    description: string;
    link: string;
    images: string[];
    main: string;
    share: string;
}