import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Service Maintenance', menuType: MenuType.BRAND },
  { path: 'order', title: 'Order', menuType: MenuType.LEFT },
  { path: 'about', title: 'About Us', menuType: MenuType.RIGHT },
  { path: 'login', title: 'Logout', menuType: MenuType.RIGHT },
  { path: 'login', title: 'Login', menuType: MenuType.RIGHT }
];
