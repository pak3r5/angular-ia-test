export class OrderDetail {
    constructor(
        public quantity: number,
        public product: string
    ){}
}


export class Order {
    constructor(
        public id: number,
        public status: string,
        public products?:  [OrderDetail]
    ){}
}