// Database default values

export const characterTypes = [
    { name: 'EXCLUSIVE', description: 'Exclusive' },
    { name: 'MULTISTATE', description: 'Multistate' },
    { name: 'NUMERICAL', description: 'Numerical' },
];

export const mediaTypes = [
    { name: 'image/jpeg' },
    { name: 'image/png' },
    { name: 'image/gif' },
];

export const keyStatus = [
    { name: 'HIDDEN', description: 'Hidden' },
    { name: 'PRIVATE', description: 'Private' },
    { name: 'BETA', description: 'Beta' },
    { name: 'PUBLISHED', description: 'Published' },
];

export const revisionStatus = [
    { name: 'DRAFT', description: 'Draft' },
    { name: 'REVIEW', description: 'Review' },
    { name: 'ACCEPTED', description: 'Accepted' },
];

export const organizationStatus = [
    { name: 'ACTIVE', description: 'Active' },
    { name: 'INACTIVE', description: 'Inactive' },
];

export const roles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
];

export const roleInfo = [
    {
        roleId: 1, name: 'Administrator', description: 'Administratorer kan opprette og slette nøkler, nøkkelgrupper, samlinger og arbeidsgrupper innen brukerens organisasjon', languageCode: 'no',
    },
    {
        roleId: 1, name: 'Administrator', description: 'Administrators can create and delete keys, key groups, collections and workgroups within the user\'s organization', languageCode: 'en',
    },
    {
        roleId: 2, name: 'Redaktør', description: 'Redaktører kan opprette, endre og publisere de nøkler, nøkkelgrupper og samlinger som tilhører brukerens arbeidsgruppe, samt opprette nye arbeidsgrupper', languageCode: 'no',
    },
    {
        roleId: 2, name: 'Editor', description: 'Editors can create, edit and publish the keys, key groups and collections that belong to the user\'s workgroup, as well as create new workgroups', languageCode: 'en',
    },
    {
        roleId: 3, name: 'Forfatter', description: 'Forfattere kan opprette og endre de nøkler, nøkkelgrupper og samlinger som tilhører brukerens arbeidsgruppe', languageCode: 'no',
    },
    {
        roleId: 3, name: 'Author', description: 'Authors can create and edit the keys, key groups and collections that belong to the user\'s workgroup', languageCode: 'en',
    },
    {
        roleId: 4, name: 'Begrenset', description: 'Begrensede brukere kan se eksisterende nøkler, nøkkelgrupper og samlinger, men kan ikke endre på disse eller opprette nye', languageCode: 'no',
    },
    {
        roleId: 4, name: 'Limited', description: 'Limited users can view existing keys, key groups and collections, but cannot edit these or create new ones', languageCode: 'en',
    },
];

export const permissions = [
    { name: 'CREATE_KEY' },
    { name: 'PUBLISH_KEY' },
    { name: 'SHARE_KEY' },
    { name: 'EDIT_KEY' },
    { name: 'EDIT_KEY_INFO' },
    { name: 'BROWSE_KEYS' },
    { name: 'CREATE_GROUP' },
    { name: 'EDIT_GROUP' },
    { name: 'BROWSE_GROUPS' },
    { name: 'CREATE_COLLECTION' },
    { name: 'EDIT_COLLECTION' },
    { name: 'BROWSE_COLLECTIONS' },
    { name: 'CREATE_WORKGROUP' },
    { name: 'EDIT_WORKGROUP' },
    { name: 'BROWSE_WORKGROUPS' },
];

export const rolePermissions = [
    { roleId: 1, permissionName: 'CREATE_KEY' },
    { roleId: 1, permissionName: 'PUBLISH_KEY' },
    { roleId: 1, permissionName: 'SHARE_KEY' },
    { roleId: 1, permissionName: 'EDIT_KEY' },
    { roleId: 1, permissionName: 'EDIT_KEY_INFO' },
    { roleId: 1, permissionName: 'BROWSE_KEYS' },
    { roleId: 1, permissionName: 'CREATE_GROUP' },
    { roleId: 1, permissionName: 'EDIT_GROUP' },
    { roleId: 1, permissionName: 'BROWSE_GROUPS' },
    { roleId: 1, permissionName: 'CREATE_COLLECTION' },
    { roleId: 1, permissionName: 'EDIT_COLLECTION' },
    { roleId: 1, permissionName: 'BROWSE_COLLECTIONS' },
    { roleId: 1, permissionName: 'CREATE_WORKGROUP' },
    { roleId: 1, permissionName: 'EDIT_WORKGROUP' },
    { roleId: 1, permissionName: 'BROWSE_WORKGROUPS' },
    { roleId: 2, permissionName: 'CREATE_KEY' },
    { roleId: 2, permissionName: 'PUBLISH_KEY' },
    { roleId: 2, permissionName: 'EDIT_KEY' },
    { roleId: 2, permissionName: 'EDIT_KEY_INFO' },
    { roleId: 2, permissionName: 'BROWSE_KEYS' },
    { roleId: 2, permissionName: 'CREATE_GROUP' },
    { roleId: 2, permissionName: 'EDIT_GROUP' },
    { roleId: 2, permissionName: 'BROWSE_GROUPS' },
    { roleId: 2, permissionName: 'CREATE_COLLECTION' },
    { roleId: 2, permissionName: 'EDIT_COLLECTION' },
    { roleId: 2, permissionName: 'BROWSE_COLLECTIONS' },
    { roleId: 2, permissionName: 'CREATE_WORKGROUP' },
    { roleId: 2, permissionName: 'EDIT_WORKGROUP' },
    { roleId: 2, permissionName: 'BROWSE_WORKGROUPS' },
    { roleId: 3, permissionName: 'CREATE_KEY' },
    { roleId: 3, permissionName: 'EDIT_KEY' },
    { roleId: 3, permissionName: 'EDIT_KEY_INFO' },
    { roleId: 3, permissionName: 'BROWSE_KEYS' },
    { roleId: 3, permissionName: 'BROWSE_GROUPS' },
    { roleId: 3, permissionName: 'BROWSE_COLLECTIONS' },
    { roleId: 3, permissionName: 'BROWSE_WORKGROUPS' },
    { roleId: 4, permissionName: 'BROWSE_KEYS' },
    { roleId: 4, permissionName: 'BROWSE_GROUPS' },
    { roleId: 4, permissionName: 'BROWSE_COLLECTIONS' },
    { roleId: 4, permissionName: 'BROWSE_WORKGROUPS' },
];

export const languages = [
    { code: 'no', name: 'Norwegian' },
    { code: 'en', name: 'English' },
];
