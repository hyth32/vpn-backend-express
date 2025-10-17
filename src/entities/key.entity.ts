import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Order } from './order.entity'

@Entity()
export class Key {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Order, order => order.keys)
    order: Order

    @Column()
    configId: string

    @Column()
    configName: string

    @Column()
    expirationDate: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt?: Date
}
