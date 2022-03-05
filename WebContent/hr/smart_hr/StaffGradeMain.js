Ext.onReady(function() {
    Ext.QuickTips.init();
    var tabs = new Ext.Panel({
        renderTo: 'content',
        
        id: 'StaffGradeMainTab',
        height: 500,
        frame: false,
        layout: 'border',
        scrollable: true,
        items: [new StaffGradeFORM_GRID({region:'center'}),
            {xtype:'tabpanel',
                activeTab: 0,
                region:'south',
                height:1,
              items:[]
            }
        ]
    });
    Ext.StoreMgr.get('dsStaffGrade').load({});
    Ext.getCmp('accordionPanel').layout.setActiveItem('settingsPan_id');
});

