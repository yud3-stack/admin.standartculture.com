import type {StructureResolver} from 'sanity/structure'
 
// https://www.sanity.io/docs/structure-builder-cheat-sheet
const SINGLETON_TYPES = ['homepage', 'siteSettings']
 
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
 
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
 
      S.divider(),
 
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.includes(item.getId() ?? ''),
      ),
    ])
 
