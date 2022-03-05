StaffGradeFORM_GRIDUi = Ext.extend(Ext.grid.GridPanel, {
    title: 'Staff Grade',
    store: 'dsStaffGrade',
    height: 400,
    id:'StaffGradeFORM_GRID',
    initComponent:function() {
        this.tbar = {
            xtype:'toolbar',
            hidden:false,
            layout:'hbox',
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
                    items : [{
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
                            id: 'StaffGradeCriteria',
                            width: 150,
                            store: 'dsColumnsStaffGrade',
                            mode: 'local',
                            triggerAction: 'all',
                            hiddenName: 'StaffGradeCriteria',
                            hiddenId: 'id',
                            displayField: 'desc',
                            valueField: 'id'
                        },
                        {
                            xtype: 'textfield',
                            width: 230,
                            id: 'StaffGradeSrchValue'            
                        },
                        {
                            xtype: 'button',
                            text: 'search',
                            width: 100,
                            icon: './img/icon_view.png',
                            id: 'btnSearchStaffGrade'           
                        }
                    ]
                }
            ]
        };
        
        this.bbar = {
            xtype:'paging',
            store:'dsStaffGrade'
        };
        
        this.columns = [
            {header:'id', width: 150,hidden:true, dataIndex:'sgId'},
            {header:'Grade Code', width: 200,hidden:false, dataIndex:'sgGradecode'},
            {header:'Grade Name', width: 300,hidden:false, dataIndex:'sgGradename'}
        ];

        StaffGradeFORM_GRIDUi.superclass.initComponent.call(this);
    }
});
