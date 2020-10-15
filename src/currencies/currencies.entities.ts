import { Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, Unique, UpdateDateColumn } from 'typeorm'

@Unique(['currency'])
@Entity()
export class Currencies {
    @ObjectIdColumn()
    _id: string

    @PrimaryColumn()
    currency: string

    @Column()
    value: number

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
}