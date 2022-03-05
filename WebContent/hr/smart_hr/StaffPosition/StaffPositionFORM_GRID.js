StaffPositionFORM_GRID= Ext.extend(StaffPositionFORM_GRIDUi, {
    initComponent: function(){
        StaffPositionFORM_GRID.superclass.initComponent.call(this);
        this.btnAddRef.on('click',this.newRecord,this);
        this.btnEditRef.on('click',this.editRecord,this);
        this.btnDeleteRef.on('click',this.deleteRecord,this);
        Ext.getCmp('StaffPositionFORM_GRID').getView().getRowClass = function(record, index){
            return ((index+1)%2 == 0?'green-row' : 'blue-row');
        };
        Ext.getCmp('StaffPositionFORM_GRID').getStore().on('beforeload',function(store, options){ 	
            options.params.criteria = Ext.getCmp('StaffPositionCriteria').getValue();
            options.params.txtSearch = Ext.getCmp('StaffPositionSrchValue').getValue();
        });
	 		 
        Ext.getCmp('StaffPositionFORM_GRID').on('rowClick',function(fn){
            
        }, this);
	 		 
        Ext.getCmp('StaffPositionFORM_GRID').on('click',function(fn){
            
        }, this);
	 		
        Ext.getCmp('btnSearchStaffPosition').on('click',function(){
            Ext.StoreMgr.get('dsStaffPosition').load({});
        }, this);

    },
    newRecord:function(){
        var  staffPosition_Form = new StaffPosition_Form();
        var win = new Ext.Window({
            id: 'lpoWinForm',
            autoWidth: true,
            autoHeight: true,
            closable: true,
            modal: true,
            resizable: true,
            plain: true,
            border: false,
            items: [staffPosition_Form]
        });
        win.show();
    }, 
    editRecord: function(){
        if(Ext.getCmp('StaffPositionFORM_GRID').getSelectionModel().hasSelection()){
            var  staffPosition_Form=new StaffPosition_Form();
            var win = new Ext.Window({
                id: 'lpoWinForm',
                autoWidth: true,
                autoHeight: true,
                closable: true,
                modal: true,
                resizable: true,
                plain: true,
                border: false,
                items: [staffPosition_Form]
            });

            var data=Ext.getCmp('StaffPositionFORM_GRID').getSelectionModel().getSelected().data;
            Ext.getCmp('spId_id').setValue(data.spId);
            Ext.getCmp('spPositioncode_id').setValue(data.spPositioncode);
            Ext.getCmp('spPositionname_id').setValue(data.spPositionname);
            
            Ext.StoreMgr.get('dsStaffGrade').load({
                    callback:function(){
                         Ext.getCmp('spSgId_id').setValue(data.spSgId);
                    }
                });
                
            

            win.show();
        }
    },
    deleteRecord:function(){
        if(Ext.getCmp('StaffPositionFORM_GRID').getSelectionModel().hasSelection()){
            Ext.MessageBox.confirm('Confirm ?','Do you really want to delete ?', function(btn){
                if (btn =='yes') {
                    var data=Ext.getCmp('StaffPositionFORM_GRID').getSelectionModel().getSelected().data;
                    Ext.Ajax.request({
                        waitMsg: 'deleting Record Please wait...',
                        url: './user/deleteStaffPosition.action',
                        params: {
                            spId_id: data.spId
                        },
                        success: function(result){
                            var jsonData = Ext.util.JSON.decode(result.responseText);
                            var resultMessage = jsonData.messages.message;
                            Ext.Msg.show({
                                title: 'INFO:',
                                msg: resultMessage,
                                buttons: Ext.Msg.OK,
                                animEl: 'elId',
                                icon: Ext.MessageBox.INFO
                            });
                            Ext.StoreMgr.get('dsStaffPosition').load();
                        },
	     
                        failure: function( action) {
                            switch (action.failureType) {
                                case Ext.form.Action.CLIENT_INVALID:
                                    Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                                    break;
                                case Ext.form.Action.CONNECT_FAILURE:
                                    Ext.Msg.alert('Failure','+Ajax communication failed');
                                    break;
                                case Ext.form.Action.SERVER_INVALID:
                                    Ext.Msg.alert('Failure',action.result.messages.message);
                            }
                        }
                    });
          
                } else{
                }
            });
        }else{
            Ext.Msg.alert('ERROR', 'No Record Selected!'); 
        }
    }
});