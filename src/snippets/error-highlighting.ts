// @errors: 2322
interface Product {
  id: number
  name: string
  price: number
}

const product: Product = {
  id: 'invalid',
  name: 'Laptop',
  // Missing 'price' property
}
