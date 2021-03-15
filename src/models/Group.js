import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';

/**
 * Define table for key groups
 */
const Group = postgres.define('key_group', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_group_id',
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(60),
        field: 'name',
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING(255),
        field: 'description',
        allowNull: true
    }
}, {
    timestamps: false
});

export default Group;
