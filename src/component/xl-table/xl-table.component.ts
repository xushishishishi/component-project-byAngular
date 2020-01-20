import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-xl-table',
    templateUrl: './xl-table.component.html',
    styleUrls: ['./xl-table.component.css']
})
export class XlTableComponent implements OnInit {
    @Input() data; // 表格列表数据
    @Input() tableInfo; // 表格基础数据
    public tableData = [];
    public title = []; // 表格标题
    public mappedValue = []; // 表格映射值
    constructor() { }

    ngOnInit() {
        const { title, mappedValue } = this.tableInfo;
        this.title = title;
        this.mappedValue = mappedValue;
    }

    // tslint:disable-next-line: use-life-cycle-interface
    ngDoCheck() {
        // 监听到data数据以后，开始处理回调事件
        if (this.data && this.data.length > 0 && this.tableData.length <= 0) {
            this.tableData = [...this.data];
            this.callBackExecute(this.mappedValue, this.tableData);
        }
    }

    /*
        回调处理
        @params mappedValue 表格数据映射
     */
    callBackExecute(mappedValue, tableData) {
        // tslint:disable-next-line: no-unused-expression
        mappedValue && mappedValue.forEach(element => {
            if (element.callBack) {
                // tslint:disable-next-line: no-unused-expression
                tableData && tableData.forEach((dataElement, dataIndex) => {
                    dataElement[element.value] = element.callBack(dataIndex, dataElement[element.value], dataElement);
                });
            }
        });
    }
}
