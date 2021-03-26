import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Character from './Character.js';
import Media from './Media.js';

/**
 * Define table for character states
 */
const CharacterState = postgres.define('character_state', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'character_state_id',
        autoIncrement: true
    },
    characterId: {
        type: Sequelize.INTEGER,
        field: 'taxon_character_id',
        allowNull: false,
        references: {
            model: Character,
            key: "taxon_character_id"
        }
    },
    mediaId: {
        type: Sequelize.INTEGER,
        field: 'media_id',
        allowNull: true,
        references: {
            model: Media,
            key: "media_id"
        }
    }
}, {
    timestamps: false
});

export default CharacterState;
