import {Table, Column, Model} from 'sequelize-typescript'

@Table({
    tableName: 'ssg_care'
})

export class SamsungCare extends Model {
    @Column
    name: string
}
