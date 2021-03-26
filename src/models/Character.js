import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import CharacterType from './CharacterType.js';
import Key from './Key.js';

/**
 * Define table for taxa characters
 */
const Character = postgres.define('taxon_character', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'taxon_character_id',
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING(30),
        field: 'character_type_name',
        allowNull: false,
        references: {
            model: CharacterType,
            key: "character_type_name"
        }
    },
    keyId: {
        type: Sequelize.UUID,
        field: 'artsapp_key_id',
        allowNull: false,
        references: {
            model: Key,
            key: "artsapp_key_id"
        }
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Character;
