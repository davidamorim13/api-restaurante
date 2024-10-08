import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("category")
export class CategoryEntity {

    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    active: boolean

}
