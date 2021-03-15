import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Group from './Group.js';

/**
 * Define table for key group parents
 */
const GroupParents = postgres.define('key_group_parents', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_group_parents_id',
        autoIncrement: true
    },
    groupId: {
        type: Sequelize.INTEGER,
        field: 'key_group_id',
        allowNull: false,
        references: {
            model: Group,
            key: "key_group_id"
        }
    },
    parentId: {
        type: Sequelize.INTEGER,
        field: 'key_group_parent_id',
        allowNull: false,
        references: {
            model: Group,
            key: "key_group_id"
        }
    }
}, {
    timestamps: false
});

export default GroupParents;
