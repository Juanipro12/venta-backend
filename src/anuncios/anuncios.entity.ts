import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

enum EstadoAnuncio{
    ABIERTO = 'ABIERTO',
    CERRADO = 'CERRADO'
}
@Entity()
export class Anuncio {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    titulo: string

    @Column({nullable:true})
    descripcion: string
    
    @Column()
    estado: EstadoAnuncio
    
    @Column()
    monto: number
}

