Ext.onReady(function() {
    Ext.QuickTips.init();
    var tabs = new Ext.Panel({
        renderTo: 'content',
        
        id: 'StaffStatusMainTab',
        height: 500,
        frame: false,
        layout: 'border',
        scrollable: true,
        items: [new StaffStatusFORM_GRID({region:'center'}),
            {xtype:'tabpanel',
                activeTab: 0,
                region:'south',
                height:1,
              items:[]
            }
        ]
    });
    Ext.StoreMgr.get('dsStaffStatus').load({});
    Ext.getCmp('accordionPanel').layout.setActiveItem('settingsPan_id');
});

