export interface Products { 
    id: number,
    title: string,
    description: string,
    name: string,
    price: number,
    category: string,
    image: string, 
    rating:{
        rate: number,
        count: number
    }
}