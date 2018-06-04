Ext.define('PhoneBook.view.PhoneList',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.phonelist',

    title: 'Телефонный справочник',
    autoLoad: true,
    frame: true,
    store: 'PhoneStore',

    tbar: [{
        iconCls: 'icon-add',
        text: 'Добавить контакт',
        xtype: 'button',
        action: 'addPhone'
    }],

    initComponent: function(){
        this.columns = [
            {header: 'Имя', dataIndex: 'name', width:100},
            {header: 'Фамилия', dataIndex:'lastname', flex: 1},
            {header: 'Место работы', dataIndex:'workplace', flex: 1},
            {header: 'Номер телефона', dataIndex:'phone', flex: 1},
            {
                xtype: 'actioncolumn',
                width: 30,
                items: [{
                    iconCls: 'icon-delete',
                    tooltip: 'Delete',
                    handler: function(grid, rowIndex, colIndex) {
                        grid.getStore().removeAt(rowIndex);
                        grid.getStore().sync();
                    }
               }]
           }
        ];
        this.callParent(arguments);
    }
});