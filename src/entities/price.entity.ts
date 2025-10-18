import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Region } from './region.entity'
import { Period } from './period.entity'

@Entity()
export class Price {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('integer')
    keyCount: number

    @Column('float')
    amount: number

    @ManyToOne(() => Region)
    region: Region

    @ManyToOne(() => Period)
    period: Period

    @Column('float', { nullable: true })
    discount: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
