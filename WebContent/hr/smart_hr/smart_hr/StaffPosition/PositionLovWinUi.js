PositionLovWinUi = Ext.extend(Ext.Window, {
		title:'Position(s)',
		 width: 400,
			id:'PositionLovWin',
	       height: 370,
       modal:true,
	    initComponent: function() {
     this.items = [
        {
            xtype:'grid',
            title:'',
            id:'PositionLovGrid',
            width: 450,
			 store:'dsStaffPosition',
            height: 300,
             columns:[ {
     			xtype : 'gridcolumn',
    			header : 'SpId',
    			dataIndex : 'spId',
    			sortable : true,
    			width : 100,
    			hidden :true
    		}, {
    			xtype : 'gridcolumn',
    			header : 'Code',
    			dataIndex : 'spPositioncode',
    			sortable : true,
    			width : 50,
    			hidden : false
    		}, {
    			xtype : 'gridcolumn',
    			header : 'Position Name',
    			dataIndex : 'spPositionname',
    			sortable : true,
    			width : 100,
    			hidden : false
    		}, {
    			xtype : 'gridcolumn',
    			header : 'Grade',
    			dataIndex : 'sgGradename',
    			sortable : true,
    			width : 100,
    			hidden : false
    		} ] ,
	    bbar: {
       xtype:'paging',
       store:'dsStaffPosition'
    },
    tbar: {
        xtype: 'toolbar',
        items: [
	    {
			xtype:'combo',
			id:'PositionCriteriaLov',
			width:250,
 		//	store:'dsColumnsPosition',
			mode:'local',
 			triggerAction:'all',
			hiddenName:'trnAccId_id',
                        displayField:'desc',
   			hiddenName:'PositionCriteria',
			hiddenId:'id',
                        displayField:'desc',
			valueField:'id'
      },
            {
                xtype:'textfield',
                width:100,
				 id:'PositionLov_srchValue'            },
            {
                xtype:'button',
                text:'search',
                 icon:'./images/icon_view.png',
                  id:'btnSearchLovPosition'            }
        ]
    }    } 
    ];
	       PositionLovWinUi.superclass.initComponent.call(this);
	    }
	});
