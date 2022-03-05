Ext.onReady(function() {
    Ext.QuickTips.init();
    var tabs = new Ext.Panel({
        renderTo: 'content',
        
        id: 'TaxRateMainTab',
        height: 500,
        frame: false,
        layout: 'border',
        scrollable: true,
        items: [new TaxRateFORM_GRID({region:'center'}),
            {xtype:'tabpanel',
                activeTab: 0,
                region:'south',
                height:1,
              items:[]
            }
        ]
    });
    Ext.StoreMgr.get('dsTaxRate').load({});
});

