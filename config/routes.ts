export default [
  {
    path: '/user',
    layout: false,
    name: '登录',
    routes: [{path: '/user/login', component: './user/Login'}, {component: './404'}],
  },
  {name: '欢迎页面', path: '/welcome', icon: 'smile', component: './Welcome'},
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理员页面',
    routes: [
      {path: '/admin/sub-page', icon: 'smile', component: './Welcome'},
      {component: './404'},
    ],
  },
  {name: '表单页面', icon: 'table', path: '/list', component: './TableList'},
  {path: '/', redirect: '/welcome'},
  {component: './404'},
];
