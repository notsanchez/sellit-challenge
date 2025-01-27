export interface Product {
    id: string;
    category_id: string | null;
    name: string | null;
    description: string | null;
    producer_name: string | null;
    producer_email: string | null;
    cover: string | null;
    thumbnail: string | null;
    price: number | null;
    updated_at: Date | null;
    created_at: Date | null;
}