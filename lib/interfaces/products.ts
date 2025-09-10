export interface Products {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: string;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Reviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;  
    images: string[];
    thumbnail: string;
}

export interface ProductsResponse {
    products: Products[];
    total: number;
    skip: number;
    limit: number;
}

export interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

export interface Reviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface Dimensions {
    width: number;
    height: number;
    depth: number;
}