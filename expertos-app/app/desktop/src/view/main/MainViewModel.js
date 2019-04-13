Ext.define('ExpertosApp.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  requires: [
      'ExpertosApp.model.Tarjeta'
      ],
  stores: {
      tarjetas: {
          model: 'ExpertosApp.model.Tarjeta',
          autoLoad: true,
          sorters: ['artist', 'title']
      }
  }
});