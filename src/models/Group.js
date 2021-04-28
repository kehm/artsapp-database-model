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
        autoIncrement: true,
    },
}, {
    timestamps: false,
});

export default Group;
