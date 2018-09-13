import {createStackNavigator , createMaterialTopTabNavigator ,DrawerNavigator, } from 'react-navigation';
//stack
import Products from './products';
import ProductsDetail from './product-detail';

//tabs
import Tab1 from './tab-1';
import Tab2 from './tab-2';
import Tab3 from './tab-3';

//alone
import Setting from './setting';

const Stack=createStackNavigator({
Products:{screen:Products},
ProductsDetail:{screen:ProductsDetail},},
{ 
    initialRouteName:'Products'
});


const Tabs=createMaterialTopTabNavigator({
    Tab1:{screen:Tab1},
    Tab2:{screen:Tab2},
    Tab3:{screen:Tab3},
    },
    { 
        order:['Tab1','Tab2','Tab3']
    });


    export const Drawer= DrawerNavigator({
        Stack:{screen:Stack},
        Tabs:{screen:Tabs},
        Settings:{screen:Setting},
    })