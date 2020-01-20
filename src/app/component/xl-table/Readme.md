1. wp-table表格组件的用法：
    @params: data  表格数据 Array

    @params: tableInfo  表格基础配置信息 Object

    @params: tableInfo.title  表格基础配置信息 Object
    @params: tableInfo.title[x].name  表格标题名字 String   
    @params: tableInfo.title[x].class  表格标题样式 String

    @params: tableInfo.mappedValue  表格基础配置信息 Object
    @params: tableInfo.mappedValue[x].value  表格数据对应后端字段 String
    @params: tableInfo.mappedValue[x].class  表格数据样式 String
    @params: tableInfo.mappedValue[x].callBack  表格数据回调 function(index, value, item){ return x;}
2. 示例：
    html页面：
    <app-wp-table *ngIf="operationList" [data]="operationList" [tableInfo]="tableInfo"></app-wp-table>

    ts页面：
    public tableInfo = {
        title: [
            {
                name: 'Type of Coupon',
                class: 'widthp10',
            },
            {
                name: 'NO.',
                class: 'widthp10',
            },
            {
                name: 'Start time',
                class: 'widthp10',
            }
        ],
        mappedValue: [
            {
                value: 'memberCouponNo',
                class: 'widthp10',
                callBack: (index, value, item) => {
                    return value + 'xuxu';
                }
            },
            {
                value: 'memberCouponNo',
                class: 'widthp10',
            },
            {
                value: 'memberCouponNo',
                class: 'widthp10',
            }
        ]
    };
