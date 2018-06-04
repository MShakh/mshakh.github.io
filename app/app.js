Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'PhoneBook',
    
    appFolder: 'app',
    controllers: ['PhoneController'],
    
    launch: function() {
        Ext.create('Ext.container.Container', {
            padding: '0 0 0 20',
            width: 500,
            height: 700,
            renderTo: document.body,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
               items: [
                   {
                    xtype: 'phonelist'
                   }
               ]
           });
       }
});