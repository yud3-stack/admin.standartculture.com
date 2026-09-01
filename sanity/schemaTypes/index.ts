import {type SchemaTypeDefinition} from 'sanity'

import {homepageType} from './homepage'
import {projectType} from './project'

import {localeString} from './objects/localeString'
import {localeText} from './objects/localeText'
import {imageWithAlt} from './objects/imageWithAlt'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    homepageType,
    projectType,

    localeString,
    localeText,
    imageWithAlt,
  ],
}