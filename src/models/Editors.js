import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Key from './Key.js';
import User from './User.js';

/**
 * Define many-to-many table for key revisions
 */
const Editors = postgres.define('key_editors', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_editors_id',
        autoIncrement: true,
    },
    keyId: {
        type: Sequelize.UUID,
        field: 'artsapp_key_id',
        allowNull: false,
        references: {
            model: Key,
            key: 'artsapp_key_id',
        },
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
}, {
    timestamps: false,
});

export default Editors;
