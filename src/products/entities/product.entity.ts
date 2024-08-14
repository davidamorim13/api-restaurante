import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("products")
export class ProductEntity {
    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    categoriid: number

    @Column()
    active: boolean
}
