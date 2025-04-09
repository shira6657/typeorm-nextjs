import { Entity, PrimaryColumn, Column, Unique } from 'typeorm';

@Unique(['Name'])
export abstract class Courts {

    @PrimaryColumn({ type: 'nvarchar', length: 50, name: 'name' })
    Name!: string;

    abstract EngName: string;


}
