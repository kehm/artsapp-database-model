import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';

/**
 * Define table for media
 */
const Media = postgres.define('media', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'media_id',
        autoIncrement: true
    },
    fileName: {
        type: Sequelize.STRING(255),
        field: 'file_name',
        allowNull: false,
        unique: true
    },
    credits: {
        type: Sequelize.STRING(255),
        field: 'credits',
        allowNull: true
    },
    license: {
        type: Sequelize.STRING(60),
        field: 'license',
        allowNull: true
    },
    licenseUrl: {
        type: Sequelize.STRING(255),
        field: 'license_url',
        allowNull: true
    }
}, {
    timestamps: false
});

export default Media;
