import {type SchemaTypeDefinition} from 'sanity'

import {homepageType} from './homepage'
import {projectType} from './project'
import {siteSettingsType} from './siteSettings'

import {localeString} from './objects/localeString'
import {localeText} from './objects/localeText'
import {imageWithAlt} from './objects/imageWithAlt'
import {localeSlug} from './objects/localeSlug'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    homepageType,
    projectType,
    siteSettingsType,

    localeString,
    localeText,
    imageWithAlt,
    localeSlug,
  ],
}