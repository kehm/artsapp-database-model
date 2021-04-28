//Database default values

export const characterTypes = [
    { name: "EXCLUSIVE", description: "Exclusive" },
    { name: "MULTISTATE", description: "Multistate" },
    { name: "NUMERICAL", description: "Numerical" }
]

export const mediaTypes = [
    { name: "image/jpeg" },
    { name: "image/png" },
    { name: "image/gif" },
]

export const keyStatus = [
    { name: "PRIVATE", description: "Private" },
    { name: "BETA", description: "Beta" },
    { name: "PUBLISHED", description: "Published" }
]

export const revisionStatus = [
    { name: "DRAFT", description: "Draft" },
    { name: "REVIEW", description: "Review" },
    { name: "ACCEPTED", description: "Accepted" }
]

export const organizationStatus = [
    { name: "ACTIVE", description: "Active" },
    { name: "INACTIVE", description: "Inactive" }
]

export const roles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
]

export const roleInfo = [
    { roleId: 1, name: "Administrator", description: "Administratorer kan opprette og slette nøkler, nøkkelgrupper, samlinger og arbeidsgrupper innen brukerens organisasjon", languageCode: "no" },
    { roleId: 1, name: "Administrator", description: "Administrators can create and delete keys, key groups, collections and workgroups within the user's organization", languageCode: "en" },
    { roleId: 2, name: "Redaktør", description: "Redaktører kan opprette, endre og publisere de nøkler, nøkkelgrupper og samlinger som tilhører brukerens arbeidsgruppe, samt opprette nye arbeidsgrupper", languageCode: "no" },
    { roleId: 2, name: "Editor", description: "Editors can create, edit and publish the keys, key groups and collections that belong to the user's workgroup, as well as create new workgroups", languageCode: "en" },
    { roleId: 3, name: "Forfatter", description: "Forfattere kan opprette og endre de nøkler, nøkkelgrupper og samlinger som tilhører brukerens arbeidsgruppe", languageCode: "no" },
    { roleId: 3, name: "Author", description: "Authors can create and edit the keys, key groups and collections that belong to the user's workgroup", languageCode: "en" },
    { roleId: 4, name: "Begrenset", description: "Bregrensede brukere kan se eksisterende nøkler, nøkkelgrupper og samlinger, men kan ikke endre på disse eller opprette nye", languageCode: "no" },
    { roleId: 4, name: "Limited", description: "Limited users can view existing keys, key groups and collections, but cannot edit these or create new ones", languageCode: "en" }
]

export const permissions = [
    { name: "CREATE" },
    { name: "PUBLISH" },
    { name: "EDIT" },
    { name: "READ" }
]

export const rolePermissions = [
    { roleId: 1, permissionName: "CREATE" },
    { roleId: 1, permissionName: "PUBLISH" },
    { roleId: 1, permissionName: "EDIT" },
    { roleId: 1, permissionName: "READ" },
    { roleId: 2, permissionName: "CREATE" },
    { roleId: 2, permissionName: "EDIT" },
    { roleId: 2, permissionName: "READ" },
    { roleId: 3, permissionName: "EDIT" },
    { roleId: 3, permissionName: "READ" },
    { roleId: 4, permissionName: "READ" }
]

export const languages = [
    { code: "no", name: "Norwegian" },
    { code: "en", name: "English" }
]
