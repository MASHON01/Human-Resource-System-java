StaffGrade_FormUi = Ext.extend(Ext.form.FormPanel, {
    padding : 10,
    height : 335,
    width: 500,
    layout : 'auto',
    scrollable : true,
	
    initComponent : function() {
        this.initialConfig = Ext.apply({
            url : './user/saveStaffGrade.action'
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
                        value : 'sgId_id',
                        fieldLabel : 'Label',
                        flex : 1,
                        width : 150
                    }, {
                        xtype : 'spacer',
                        width : 5
                    }, {
                        xtype : 'numberfield',
                        id : 'sgId_id',
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
                        value : 'Grade Code',
                        fieldLabel : 'Label',
                        flex : 1,
                        width : 150
                    }, {
                        xtype : 'spacer',
                        width : 5
                    }, {
                        xtype : 'textfield',
                        id : 'sgGradecode_id',
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
                        value : 'Grade Name',
                        fieldLabel : 'Label',
                        flex : 1,
                        width : 150
                    }, {
                        xtype : 'spacer',
                        width : 5
                }, {
                        xtype : 'textfield',
                        id : 'sgGradename_id',
                        width : 250,
                        allowBlank : false
                }]
            }
        ];
		
        this.bbar = {
            xtype : 'toolbar',
            height : 40,
            buttonAlign : 'center',
            items : [ 
                {
                    xtype : 'button',
                    text : '<i class="fa fa-floppy-o" aria-hidden="true"></i> Save',
                    id : 'btnSave_StaffGrade',
                    type : 'submit'
                }, {
                    xtype : 'tbspacer',
                    width : 100
                } 
            ]
        };
        StaffGrade_FormUi.superclass.initComponent.call(this);
    }
});