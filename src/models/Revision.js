import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Media from './Media.js';
import RevisionStatus from './RevisionStatus.js';
import User from './User.js';

/**
 * Define table for key revisions
 */
const Revision = postgres.define('key_revision', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'revision_id',
        defaultValue: Sequelize.UUIDV4
    },
    title: {
        type: Sequelize.STRING(60),
        field: 'title',
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        field: 'description',
        allowNull: false
    },
    content: {
        type: Sequelize.JSONB,
        field: 'key_content',
        allowNull: false
    },
    mediaId: {
        type: Sequelize.INTEGER,
        field: 'media_id',
        allowNull: true,
        references: {
            model: Media,
            key: "media_id"
        }
    },
    createdBy: {
        type: Sequelize.UUID,
        field: 'created_by',
        allowNull: false,
        references: {
            model: User,
            key: "artsapp_user_id"
        }
    },
    status: {
        type: Sequelize.STRING(30),
        field: 'revision_status_name',
        allowNull: false,
        references: {
            model: RevisionStatus,
            key: "revision_status_name"
        }
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Revision;
