import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XlTableComponent } from './xl-table/xl-table.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [XlTableComponent],
    exports: [XlTableComponent]

})
export class ComponentModule { }
