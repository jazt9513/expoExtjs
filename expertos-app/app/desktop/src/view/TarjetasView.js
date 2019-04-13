Ext.define('ExpertosApp.view.TarjetasView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tarjetasview',
    scrollable: true,
    cls: 'tarjetas-view',
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    itemCls: 'video',
    itemTpl: [
        '<figure>',
        '<div class="thumbnail" style="background-image:url(\'{image}\')"></div>',
        '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{artist}</div></figcaption>',
        '</figure>'
    ]
});