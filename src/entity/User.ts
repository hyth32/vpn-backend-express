import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

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

    @Column()
    freeKeyUsed: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
