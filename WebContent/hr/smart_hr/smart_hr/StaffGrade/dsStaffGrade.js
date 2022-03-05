dsStaffGrade= Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg){
        cfg = cfg || {};
        dsStaffGrade.superclass.constructor.call(this, Ext.apply({
            storeId: 'dsStaffGrade',
            root: 'data.result',
            totalProperty: 'data.total',
            url:'./user/fetchStaffGrade.action',
            listeners:{
                'beforeLoad': function(store, options){
                    
                }
            },
            fields: [
                    {name: 'sgId'},
                    {name: 'sgGradecode'},
                    {name: 'sgGradename'}
                ]
        }, cfg));
    }
});

new  dsStaffGrade();