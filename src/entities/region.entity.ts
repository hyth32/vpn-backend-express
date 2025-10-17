import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Price } from './price.entity'
import { Order } from './order.entity'

@Entity()
export class Region {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({ nullable: true })
    flag: string

    @Column({ nullable: true })
    host: string

    @Column({ nullable: true })
    port: string

    @OneToMany(() => Order, order => order.region)
    orders: Order[]

    @OneToMany(() => Price, price => price.region)
    prices: Price[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt?: Date
}
