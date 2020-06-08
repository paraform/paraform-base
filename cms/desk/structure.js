import S from "@sanity/desk-tool/structure-builder";
import {
  MdSettings,
  MdComputer,
  MdCollectionsBookmark,
  MdImage,
  MdPalette,
  MdInvertColors,
  MdFormatColorFill,
  MdSignalCellular4Bar,
  MdFormatQuote,
} from "react-icons/md";
import { BsToggleOn } from "react-icons/bs";

export default () =>
  S.list()
    .title("Menu")
    .items([
      S.listItem()
        .title("Website")
        .icon(MdComputer)
        .child(
          S.list()
            .title("Website")
            .items([
              S.listItem()
                .title("Pages")
                .schemaType("page")
                .child(S.documentTypeList("page").title("Pages")),
              S.divider(),
              S.listItem()
                .title("Features")
                .icon(MdCollectionsBookmark)
                .schemaType("feature")
                .child(S.documentTypeList("feature").title("Features")),
              S.listItem()
                .title("Testimonials")
                .icon(MdFormatQuote)
                .schemaType("testimonial")
                .child(S.documentTypeList("testimonial").title("Testimonials")),
              S.listItem()
                .title("Dividers")
                .icon(MdSignalCellular4Bar)
                .schemaType("dividerShape")
                .child(S.documentTypeList("dividerShape").title("Dividers")),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Theme")
        .icon(MdPalette)
        .child(
          S.list()
            .title("Theme")
            .items([
              S.listItem()
                .title("Colors")
                .icon(MdPalette)
                .child(
                  S.list()
                    .title("Colors")
                    .items([
                      S.listItem()
                        .title("Brand Colors")
                        .icon(MdInvertColors)
                        .schemaType("brandColors")
                        .child(
                          S.documentTypeList("brandColors").title(
                            "Brand Colors"
                          )
                        ),
                      S.listItem()
                        .title("Background Colors")
                        .icon(MdFormatColorFill)
                        .schemaType("backgroundColors")
                        .child(
                          S.documentTypeList("backgroundColors").title(
                            "Background Colors"
                          )
                        ),
                    ])
                ),
              S.listItem()
                .title("Modes")
                .icon(BsToggleOn)
                .schemaType("modes")
                .child(
                  S.editor()
                    .title("Modes")
                    .schemaType("modes")
                    .documentId("modes")
                ),
            ])
        ),
      S.listItem()
        .title("Assets")
        .icon(MdImage)
        .child(
          S.list()
            .title("Assets")
            .items([
              S.listItem()
                .title("Animations")
                .schemaType("animation")
                .child(S.documentTypeList("animation").title("Animations")),
              S.listItem()
                .title("Images")
                .icon(MdImage)
                .child(S.documentTypeList("sanity.imageAsset")),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(S.editor().schemaType("settings").documentId("settings")),
      // ...S.documentTypeListItems().filter(
      //   (listItem) =>
      //     !["settings", "page", "feature"].includes(listItem.getId())
      // ),
    ]);
