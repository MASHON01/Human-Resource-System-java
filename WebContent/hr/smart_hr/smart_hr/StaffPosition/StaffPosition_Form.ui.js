StaffPosition_FormUi = Ext.extend(Ext.form.FormPanel, {
    padding : 10,
    height : 335,
    width: 500,
    layout : 'auto',
    scrollable : true,
	
    initComponent : function() {
        this.initialConfig = Ext.apply({
            url : './user/saveStaffPosition.action'
        }, this.initialConfig);
        
        this.items = [
            {
                xtype : 'panel',
                height : 31,
                hideBorders : true,
                title : '',
                layout : 'hbox',
                hidden : true,
                border : false,
			
                items : [ {
                        xtype : 'displayfield',
                        value : 'spId_id',
                        fieldLabel : 'Label',
                        flex : 1,
                        width : 150
                    }, {
                        xtype : 'spacer',
                        width : 5
                    }, {
                        xtype : 'numberfield',
                        id : 'spId_id',
                        width : 250,
                        allowBlank : true
                    } ]
            }, 
            {
                xtype : 'panel',
                height : 31,
                hideBorders : true,
                title : '',
                layout : 'hbox',
                hidden : false,
                border : false,
                items : [ {
                        xtype : 'displayfield',
                        value : 'Staff Grade',
                        fieldLabel : 'Label',
                        flex : 1,
                        width : 150
                    }, {
                        xtype : 'spacer',
                        width : 5
                    }, {
                        xtype: 'combo',
			typeAhead: true,
			triggerAction: 'all',
			lazyRender:true,
                        id:'spSgId_id',
			mode: 'remote',
			store: 'dsStaffGrade',
			valueField: 'sgId',			
			hiddenName:'spSgId_id',
                        displayField: 'sgGradename',			
			width : 250,				
			allowBlank : false
		
                    }
                ]
            },
            {	
                xtype : 'panel',
                height : 31,
                hideBorders : true,
                title : '',
                layout : 'hbox',
                hidden : false,
                border : false,
                items : [ {
                        xtype : 'displayfield',
                        value : 'Position Code',
                        fieldLabel : 'Label',
                        flex : 1,
                        width : 150
                    }, {
                        xtype : 'spacer',
                        width : 5
                    }, {
                        xtype : 'textfield',
                        id : 'spPositioncode_id',
                        width : 150,
                        allowBlank : false
                    } ]
            },
            {
                xtype : 'panel',
                height : 31,
                hideBorders : true,
                title : '',
                layout : 'hbox',
                hidden : false,
                border : false,
                items : [ {
                        xtype : 'displayfield',
                        value : 'Position Name',
                        fieldLabel : 'Label',
                        flex : 1,
                        width : 150
                    }, {
                        xtype : 'spacer',
                        width : 5
                }, {
                        xtype : 'textfield',
                        id : 'spPositionname_id',
                        width : 250,
                        allowBlank : false
                }]
            }            
        ];
		
        this.bbar = {
            xtype : 'toolbar',
            height : 40,
            buttonAlign : 'center',
            items : [ {
                    xtype : 'button',
                    text : '<i class="fa fa-floppy-o" aria-hidden="true"></i> Save',
                    id : 'btnSave_StaffPosition',
                    type : 'submit'
                }, {
                    xtype : 'tbspacer',
                    width : 100
                } ]
        };
        StaffPosition_FormUi.superclass.initComponent.call(this);
    }
});