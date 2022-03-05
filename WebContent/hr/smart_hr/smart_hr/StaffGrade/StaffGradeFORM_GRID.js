StaffGradeFORM_GRID= Ext.extend(StaffGradeFORM_GRIDUi, {
    initComponent: function(){
        StaffGradeFORM_GRID.superclass.initComponent.call(this);
        this.btnAddRef.on('click',this.newRecord,this);
        this.btnEditRef.on('click',this.editRecord,this);
        this.btnDeleteRef.on('click',this.deleteRecord,this);
        Ext.getCmp('StaffGradeFORM_GRID').getView().getRowClass = function(record, index){
            return ((index+1)%2 == 0?'green-row' : 'blue-row');
        };
        Ext.getCmp('StaffGradeFORM_GRID').getStore().on('beforeload',function(store, options){ 	
            options.params.criteria = Ext.getCmp('StaffGradeCriteria').getValue();
            options.params.txtSearch = Ext.getCmp('StaffGradeSrchValue').getValue();
        });
	 		 
        Ext.getCmp('StaffGradeFORM_GRID').on('rowClick',function(fn){
           
        }, this);
	 		 
        Ext.getCmp('StaffGradeFORM_GRID').on('click',function(fn){
         
        }, this);
	 		
        Ext.getCmp('btnSearchStaffGrade').on('click',function(){
            Ext.StoreMgr.get('dsStaffGrade').load({});
        }, this);

    },
    newRecord:function(){
        var  staffGrade_Form = new StaffGrade_Form();
        var win = new Ext.Window({
            id: 'staffGradeWinForm',
            autoWidth: true,
            autoHeight: true,
            closable: true,
            modal: true,
            resizable: true,
            plain: true,
            border: false,
            items: [staffGrade_Form]
        });
        win.show();
    }, 
    editRecord: function(){
        if(Ext.getCmp('StaffGradeFORM_GRID').getSelectionModel().hasSelection()){
            var  staffGrade_Form=new StaffGrade_Form();
            var win = new Ext.Window({
                id: 'staffGradeWinForm',
                autoWidth: true,
                autoHeight: true,
                closable: true,
                modal: true,
                resizable: true,
                plain: true,
                border: false,
                items: [staffGrade_Form]
            });

            var data=Ext.getCmp('StaffGradeFORM_GRID').getSelectionModel().getSelected().data;
            Ext.getCmp('sgId_id').setValue(data.sgId);
            Ext.getCmp('sgGradecode_id').setValue(data.sgGradecode);
            Ext.getCmp('sgGradename_id').setValue(data.sgGradename);

            win.show();
        }
    },
    deleteRecord:function(){
        if(Ext.getCmp('StaffGradeFORM_GRID').getSelectionModel().hasSelection()){
            Ext.MessageBox.confirm('Confirm ?','Do you really want to delete ?', function(btn){
                if (btn =='yes') {
                    var data=Ext.getCmp('StaffGradeFORM_GRID').getSelectionModel().getSelected().data;
                    Ext.Ajax.request({
                        waitMsg: 'deleting Record Please wait...',
                        url: './user/deleteStaffGrade.action',
                        params: {
                            sgId_id: data.sgId
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
                            Ext.StoreMgr.get('dsStaffGrade').load();
                        },
	     
                        failure: function( action) {
                            switch (action.failureType) {
                                case Ext.form.Action.CLIENT_INVALID:
                                    Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                                    break;
                                case Ext.form.Action.CONNECT_FAILURE:
                                    Ext.Msg.alert('Failure', '+Ajax communication failed');
                                    break;
                                case Ext.form.Action.SERVER_INVALID:
                                    Ext.Msg.alert('Failure', action.result.messages.message);
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