import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { YeahLinkModule } from "../../atoms/link/yeah-link.module";
import { YeahTagListModule } from "../../atoms/tag-list/yeah-tag-list.module";
import { YeahTagItemModule } from "../../atoms/tag-item/yeah-tag-item.module";
import { YeahSeparatorModule } from "../../atoms/separator/yeah-separator.module";
import { YeahButtonModule } from "../../atoms/button/yeah-button.module";
import { YeahTextareaModule } from "../../atoms/textarea/yeah-textarea.module";

import { YeahUrlItemComponent } from "./component/yeah-url-item.component";

@NgModule({
  declarations: [YeahUrlItemComponent],
  imports: [
    CommonModule,
    YeahLinkModule,
    YeahTagListModule,
    YeahTagItemModule,
    YeahSeparatorModule,
    YeahButtonModule,
    YeahTextareaModule
  ],
  exports: [CommonModule, YeahUrlItemComponent]
})
export class YeahUrlItemModule {}
