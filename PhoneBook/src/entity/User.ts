import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("persons")
export class Person {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    phone: string

    @Column()
    email: string

    @Column()
    address: string

}
