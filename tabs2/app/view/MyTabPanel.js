/*
 * File: app/view/MyTabPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyTabPanel', {
    extend: 'Ext.tab.Panel',

    config: {
        ui: 'light',
        defaults: {
            scrollable: true
        },
        tabBar: {
            docked: 'bottom'
        },
        items: [
            {
                xtype: 'container',
                title: 'About',
                iconCls: 'info',
                cls: 'card1',
                html: '<h1>Bottom Tabs</h1><p>Docking tabs to the bottom will automatically change their style. The tabs below are type="light", though the standard type is dark. Badges (like the 4 &amp; Long title below) can be added by setting <code>badgeText</code> when creating a tab/card or by using <code>setBadge()</code> on the tab later.</p>'
            },
            {
                xtype: 'container',
                title: 'Favorites',
                badgeText: '4',
                iconCls: 'favorites',
                cls: 'card2',
                html: '<h1>Favorites Card</h1>'
            },
            {
                xtype: 'container',
                title: 'Downloads',
                badgeText: 'Text can go here too, but it will be cut off if it is too long.',
                iconCls: 'download',
                cls: 'card3',
                html: '<h1>Downloads Card</h1>'
            },
            {
                xtype: 'container',
                title: 'Settings',
                iconCls: 'settings',
                cls: 'card4',
                html: '<h1>Settings Card</h1>'
            },
            {
                xtype: 'container',
                title: 'User',
                iconCls: 'user',
                cls: 'card5',
                html: '<h1>User Card</h1>'
            }
        ]
    }

});