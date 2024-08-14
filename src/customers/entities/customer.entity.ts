import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("customer")
export class CustomerEntity {

    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    active: boolean
}
