Ext.onReady(function() {
    Ext.QuickTips.init();
    var tabs = new Ext.Panel({
        renderTo: 'content',
        
        id: 'StaffPositionMainTab',
        height: 500,
        frame: false,
        layout: 'border',
        scrollable: true,
        items: [new StaffPositionFORM_GRID({region:'center'}),
            {xtype:'tabpanel',
                activeTab: 0,
                region:'south',
                height:1,
              items:[]
            }
        ]
    });
    Ext.StoreMgr.get('dsStaffPosition').load({});
    Ext.getCmp('accordionPanel').layout.setActiveItem('settingsPan_id');
});

