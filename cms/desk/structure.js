import S from "@sanity/desk-tool/structure-builder";
import {
  MdSettings,
  MdComputer,
  MdCollectionsBookmark,
  MdImage,
} from "react-icons/md";

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
            ])
        ),
      S.divider(),
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
