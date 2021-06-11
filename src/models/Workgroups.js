import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import User from './User.js';
import Workgroup from './Workgroup.js';

/**
 * Define many-to-many table for user workgroups
 */
const Workgroups = postgres.define('user_workgroups', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'user_workgroups_id',
        autoIncrement: true,
    },
    userId: {
        type: Sequelize.UUID,
        field: 'artsapp_user_id',
        allowNull: false,
        references: {
            model: User,
            key: 'artsapp_user_id',
        },
    },
    workgroupId: {
        type: Sequelize.INTEGER,
        field: 'workgroup_id',
        allowNull: false,
        references: {
            model: Workgroup,
            key: 'workgroup_id',
        },
    },
}, {
    timestamps: false,
});

export default Workgroups;
