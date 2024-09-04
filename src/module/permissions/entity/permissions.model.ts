import { Model, Column, Table, BelongsToMany } from 'sequelize-typescript'
import { RolePermissionsModel } from './role-permissions.model'
import { RolesModel } from '../../roles/entity/roles.model'

@Table({
    tableName: 'permissions',
    timestamps: false,
    paranoid: false,
    indexes: [
        {
            unique: true,
            fields: ['slug']
        }
    ]
})
export class PermissionsModel extends Model {
    @Column({
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column
    name: string

    @Column({
        unique: true
    })
    slug: string

    @BelongsToMany(() => RolesModel, () => RolePermissionsModel)
    roles: RolesModel[]
}
