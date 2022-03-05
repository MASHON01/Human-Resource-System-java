dsColumnsStaffPosition= Ext.extend(Ext.data.ArrayStore, {
    constructor: function(cfg){
        cfg = cfg || {};
        dsColumnsStaffPosition.superclass.constructor.call(this, Ext.apply({
            storeId: 'dsColumnsStaffPosition',
            fields: [
                {name:'id'},{name:'desc'} ],
            
            data: [
                    ['spPositioncode', 'Position Code'], 
                    ['spPositionname', 'Position Name'],
                    ['sgGradename', 'Grade Name']
                  ]
        }, cfg));
    }
});

new  dsColumnsStaffPosition();