import {products} from "../../data/products"
import { Container } from "./styles"
import {Card} from "../Card"

export const ListProducts = () => (<Container>
    {products.map((ele) => 
        <Card product={ele} key={ele.id} />
    )}
</Container>)
