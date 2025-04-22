import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    CreatedAt,
    UpdatedAt,
    AllowNull,
 } from 'sequelize-typescript';



@Table({
    tableName: 'products',
    timestamps: true,
})


class Product extends Model<Product> {  
    @Column({type: DataType.STRING(100)})
    name: string


    @Column ({type: DataType.FLOAT})
    price: number

    @Column     ({type: DataType.BOOLEAN})
    availibility: boolean

}

export default Product