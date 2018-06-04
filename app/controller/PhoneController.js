Ext.define('PhoneBook.controller.PhoneController',{
    extend:'Ext.app.Controller',
    models: ['Person'],
    stores: ['PhoneStore'],
    views: ['PhoneList','EditPerson'],

    init : function() {
        this.control({
           'container > panel' : {
            render : this.onPanelRendered
           },
           'phonelist' : {
            itemdblclick : this.editPhone
           },
           'phonelist button[action=addPhone]' : {
            click : this.addPhone
           },
           'editperson button[action=save]' : {
            click : this.updatePhone
           }
          });
    },
    onPanelRendered: function() {
        console.log('The panel was rendered');
    },

    editPhone: function(grid,person) {
        var view = Ext.widget('editperson');
        view.down('form').loadRecord(person);
    },

    addPhone: function (){
        var view = Ext.widget('editperson');
    },

    updatePhone: function(button){
        var window = button.up('window');
        var form = window.down('form').getForm();
        if (form.isValid()){
            var person = form.getRecord();
            var values = form.getValues();
            if(!person){
                var newPerson = new PhoneBook.model.Person(values);
                this.getPhoneStoreStore().add(newPerson);
            }
            else 
                person.set(values);
            window.close();
            this.getPhoneStoreStore().sync();
            
        }
    }
});