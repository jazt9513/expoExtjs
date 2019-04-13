Ext.define('ExpertosApp.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  tabBarPosition: 'bottom',
  items: [{
    title: "Thumbnails",
    xtype: 'tarjetasview',
    listeners: {
      select: 'onThumbSelect'
    },
    bind: {
        store: '{tarjetas}'
    },
    
}, {
    title: "Grid",
    xtype: 'tarjetasgrid',
    listeners: {
      select: 'onGridSelect'
    },
    bind: {
      store: '{tarjetas}'
  }
}],
  requires: [
    'ExpertosApp.view.main.MainViewController',
    'ExpertosApp.view.main.MainViewModel',
    'ExpertosApp.view.TarjetasView'
  ],
})
