StaffPositionFORM_GRIDUi = Ext.extend(Ext.grid.GridPanel, {
    title: 'Staff Position',
    store: 'dsStaffPosition',
    height: 400,
    id: 'StaffPositionFORM_GRID',
    initComponent:function() {
        this.tbar = {
            xtype: 'toolbar',
            hidden: false,
            layout: 'hbox',
            items: [
                {
                    xtype: 'tbspacer',
                    width: 10
                },
                {
                    xtype : 'panel',
                    layout : 'hbox',
                    width : 700,
                    frame : true,
                    items : [
                        {
                            xtype : 'button',
                            text : 'Add',
                            ref : '../../btnAddRef',
                            icon : './images/add.png'
                        },
                        {
                            xtype:'spacer',
                            width:10
                        },
                        {
                            xtype : 'button',
                            text : 'Edit',
                            hidden:false,
                            icon : './images/icon_edit.png',
                            ref : '../../btnEditRef'
                        },
                        {
                            xtype:'spacer',
                            width:10
                        },
                        {
                            xtype : 'button',
                            text : 'Delete',
                            hidden:false,
                            icon : './images/delete.png',
                            ref : '../../btnDeleteRef'
                        }, 
                        {
                            xtype:'spacer',
                            width:10
                        },
                        {			
                            xtype: 'combo',
                            id: 'StaffPositionCriteria',
                            width: 150,
                            store: 'dsColumnsStaffPosition',
                            mode: 'local',
                            triggerAction: 'all',
                            hiddenName: 'StaffPositionCriteria',
                            hiddenId: 'id',
                            displayField: 'desc',
                            valueField: 'id'
                        },
                        {
                            xtype: 'textfield',
                            width: 230,
                            id: 'StaffPositionSrchValue'            
                        },
                        {
                            xtype: 'button',
                            text: 'search',
                            width: 100,
                            icon: './img/icon_view.png',
                            id: 'btnSearchStaffPosition'           
                        }
                    ]
                }
            ]
        };
        
        this.bbar = {
            xtype:'paging',
            store:'dsStaffPosition'
        };
        
        this.columns = [
            {header: 'ID', width: 150, hidden:true, dataIndex: 'spId'},
            {header: 'Position Code', width: 150, hidden: false, dataIndex: 'spPositioncode'},
            {header: 'Position Name', width: 250, hidden: false, dataIndex: 'spPositionname'},
            {header: 'Grade', width: 150, hidden: false, dataIndex: 'sgGradename'}
        ];

        StaffPositionFORM_GRIDUi.superclass.initComponent.call(this);
    }
});
