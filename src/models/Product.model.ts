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
    Default,
 } from 'sequelize-typescript';



@Table({
    tableName: 'products',
    timestamps: true,
})


class Product extends Model<Product> {  
    @Column({type: DataType.CHAR(50)})
    name: string


    @Column ({type: DataType.FLOAT})
    price: number

    @Default(true)
    @Column     ({type: DataType.BOOLEAN})
    availibility: boolean

}

export default Product