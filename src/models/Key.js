import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Group from './Group.js';
import KeyStatus from './KeyStatus.js';
import Media from './Media.js';
import Revision from './Revision.js';
import User from './User.js';
import Workgroup from './Workgroup.js';

/**
 * Define table for identification keys
 */
const Key = postgres.define('artsapp_key', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'artsapp_key_id',
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
    mediaId: {
        type: Sequelize.INTEGER,
        field: 'media_id',
        allowNull: true,
        references: {
            model: Media,
            key: "media_id"
        }
    },
    revisionId: {
        type: Sequelize.UUID,
        field: 'revision_id',
        allowNull: true,
        references: {
            model: Revision,
            key: "revision_id"
        }
    },
    keyGroupId: {
        type: Sequelize.INTEGER,
        field: 'key_group_id',
        allowNull: true,
        references: {
            model: Group,
            key: "key_group_id"
        }
    },
    workgroupId: {
        type: Sequelize.INTEGER,
        field: 'workgroup_id',
        allowNull: false,
        references: {
            model: Workgroup,
            key: "workgroup_id"
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
        field: 'key_status_name',
        allowNull: false,
        references: {
            model: KeyStatus,
            key: "key_status_name"
        }
    },
    version: {
        type: Sequelize.STRING(30),
        allowNull: true,
        field: 'version'
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Key;
