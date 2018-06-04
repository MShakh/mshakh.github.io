Ext.define('PhoneBook.store.PhoneStore', {
    extend: 'Ext.data.Store',
    model: 'PhoneBook.model.Person',
    autoLoad: true,
    proxy: {
        type: 'localstorage',
        id: 'person'      
    }
});