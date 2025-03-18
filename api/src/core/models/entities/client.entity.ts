import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'client' })
export class ClientEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
  
    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'float' })
    wage: number;

    @Column({ type: 'float' })
    enterprise: number;

    @Column({ type: 'boolean', default: true })
    active?: boolean;
}