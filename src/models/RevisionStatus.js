import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';

/**
 * Define table for revision status
 */
const RevisionStatus = postgres.define('revision_status', {
    name: {
        type: Sequelize.STRING(30),
        primaryKey: true,
        field: 'revision_status_name'
    },
    description: {
        type: Sequelize.STRING(60),
        field: 'description',
        allowNull: true
    }
}, {
    timestamps: false
});

export default RevisionStatus;
