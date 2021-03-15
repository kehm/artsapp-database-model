import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';

/**
 * Define table for key status
 */
const KeyStatus = postgres.define('key_status', {
    name: {
        type: Sequelize.STRING(30),
        primaryKey: true,
        field: 'key_status_name'
    },
    description: {
        type: Sequelize.STRING(60),
        field: 'description',
        allowNull: true
    }
}, {
    timestamps: false
});

export default KeyStatus;
