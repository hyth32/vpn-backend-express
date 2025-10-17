import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm'
import { Order } from './order.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: true })
    name: string

    @Column({ unique: true })
    telegramId: string

    @Column({ nullable: true, unique: true })
    username: string

    @Column({ default: false })
    freeKeyUsed: boolean

    @OneToMany(() => Order, order => order.user)
    orders: Order[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
