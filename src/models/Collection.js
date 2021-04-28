import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Workgroup from './Workgroup.js';

/**
 * Define table for collections
 */
const Collection = postgres.define('collection', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'collection_id',
        autoIncrement: true,
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

export default Collection;
