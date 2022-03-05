dsColumnsStaffGrade= Ext.extend(Ext.data.ArrayStore, {
    constructor: function(cfg){
        cfg = cfg || {};
        dsColumnsStaffGrade.superclass.constructor.call(this, Ext.apply({
            storeId: 'dsColumnsStaffGrade',
            fields: [
                {name:'id'},{name:'desc'} ],
            
            data: [
                    ['sgGradecode', 'Grade Code'], ['sgGradename', 'Grade Name']
                  ]
        }, cfg));
    }
});

new  dsColumnsStaffGrade();