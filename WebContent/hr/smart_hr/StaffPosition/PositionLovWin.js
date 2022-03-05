PositionLovWin= Ext.extend(PositionLovWinUi, {
      initComponent: function(){
PositionLovWin.superclass.initComponent.call(this);
Ext.getCmp('PositionLovGrid').getView().getRowClass = function(record, index){
return ((index+1)%2 == 0?'green-row' : 'blue-row');
};
Ext.getCmp('PositionLovGrid').getStore().on('beforeload',function(store, options){
options.params.criteria=Ext.getCmp('PositionCriteriaLov').getValue();
options.params.txtSearch=Ext.getCmp('PositionLov_srchValue').getValue();

 });
          Ext.StoreMgr.get('dsStaffPosition').load({
          });
Ext.getCmp('btnSearchLovPosition').on('click',function(){
Ext.StoreMgr.get('dsStaffPosition').load({
});
       },this);
  }

});