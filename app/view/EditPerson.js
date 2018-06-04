Ext.define('PhoneBook.view.EditPerson',{
    extend: 'Ext.window.Window',
    alias: 'widget.editperson',
    title : 'Контакт',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                width: 300,
                bodyPadding: 10,
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Имя',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'lastname',
                        fieldLabel: 'Фамилия',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'workplace',
                        fieldLabel: 'Место работы',
                        allowBlank: false
                    },
                    {
                        xtype: 'numberfield',
                        name: 'phone',
                        minValue: 1,
                        minLength: '5',
                        maxLength: '11', 
                        maskRe: /[0-9.]/,
                        enforceMaxLength: true,
                        allowDecimals: false,
                        fieldLabel: 'Номер телефона',
                        allowBlank: false
                    }
                ]
            }
        ];

        this.buttons = [
            {
                iconCls: 'icon-save',
                text: 'Сохранить',
                action: 'save'
            },
            {
                iconCls: 'icon-reset',
                text: 'Отмена',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});