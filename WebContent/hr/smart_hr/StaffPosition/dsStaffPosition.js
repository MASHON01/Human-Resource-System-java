dsStaffPosition= Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg){
        cfg = cfg || {};
        dsStaffPosition.superclass.constructor.call(this, Ext.apply({
            storeId: 'dsStaffPosition',
            root: 'data.result',
            totalProperty: 'data.total',
            url:'./user/fetchStaffPosition.action',
            listeners:{
                'beforeLoad': function(store, options){
                    
                }
            },
            fields: [
                    {name:'spId'},
                    {name:'spPositioncode'},
                    {name:'spPositionname'},
                    {name:'sgGradename'},
                    {name:'spSgId'}
                    
                ]
        }, cfg));
    }
});

new  dsStaffPosition();