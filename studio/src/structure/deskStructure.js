import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";
import {
  MdPerson,
  MdDescription,
  MdLocalOffer
} from "react-icons/md"
import IframePreview from '../previews/IframePreview'
import { FaFile } from "react-icons/fi";
import BLOG from './blogStructure'
import EditIcon from "part:@sanity/base/edit-icon";
import EyeIcon from "part:@sanity/base/eye-icon";
import SeoPreview from "../../components/previews/seo/SeoPreviews";

// Web preview configuration
const remoteURL = 'https://yogawithsusanturis.netlify.app'
const localURL = 'http://localhost:8000'
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props
  if (schemaType == 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL })
    ])
  }
    return S.document().views([S.view.form()])
}

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
        S.divider(),
        S.listItem()
        .title('New Pages')
        .schemaType('page')
        .child(S.documentTypeList('page')
        .title('Pages')
        .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType('page')
          .views([S.view.form(), IframePreview()])
      )
  ),
        S.listItem()
        .title('Pages')
        .icon(MdDescription)
        .child(
          S.list()
          .title('Pages')
          .items([
            
              // About Page
              S.listItem()
                .title('About Page')
                // This automatically gives it properties from the project type
                .schemaType('pageAbout')
                .child(
                  S.editor()
                    .schemaType('pageAbout')
                    .documentId('pageAbout')
                    .views([
                      S.view.form().icon(EditIcon),
                      S.view
                        .component(IframePreview)
                        .icon(EyeIcon)
                        .title("Web Preview"),
                      S.view
                      	.component(SeoPreview)
                      	.icon(EyeIcon)
                      	.title('SEO Preview'),
                    ])
                )
                .icon(FaFile),

            S.listItem()
            .title('Gallery Page')
            // This automatically gives it properties from the project type
            .schemaType('pageGallery')
            .child(
              S.editor()
              .id('galleryPage')
                .schemaType('pageGallery')
                .documentId('pageGallery')
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(IframePreview)
                    .icon(EyeIcon)
                    .title("Web Preview"),
                  S.view
                    .component(SeoPreview)
                    .icon(EyeIcon)
                    .title("SEO Preview"),
                ])
            )
            .icon(FaFile),
            
          ])
        ),
        S.listItem()
        .title('Navigation')
        .child(
          S.editor()
          .schemaType('navigation')
          .id('navigation')
          .documentId('navigation')
        ),
        S.listItem()
        .title('Routes')
        .schemaType('route')
        .child(
          S.documentTypeList('route').title('Routes')
        ),
        
      S.divider(),
      BLOG,
      // S.listItem()
      //   .title('Blog posts')
      //   .icon(MdDescription)
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Blog posts')),
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      // S.listItem()
      //   .title('Categories')
      //   .icon(MdLocalOffer)
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem =>
          !['category', 'author', 'page','post', 'siteSettings', 'navigation', 'route', 'pageAbout', 'pageGallery'].includes(
            listItem.getId()
          ))
    ])
