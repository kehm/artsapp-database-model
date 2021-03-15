import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Key from './Key.js';
import Revision from './Revision.js';

/**
 * Define many-to-many table for key revisions
 */
const Revisions = postgres.define('key_revisions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_revisions_id',
        autoIncrement: true
    },
    keyId: {
        type: Sequelize.UUID,
        field: 'artsapp_key_id',
        allowNull: false,
        references: {
            model: Key,
            key: "artsapp_key_id"
        }
    },
    revisionId: {
        type: Sequelize.UUID,
        field: 'revision_id',
        allowNull: false,
        references: {
            model: Revision,
            key: "revision_id"
        }
    }
}, {
    timestamps: false
});

export default Revisions;
