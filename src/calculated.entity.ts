import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Calculated {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  a: string;

  @Column()
  b: string;

  @Column()
  sign: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updtedAt: string;
}
