const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

const routeMap = [
  {
    name: 'admin',
    pattern: '/admin',
    page: 'index'
  },
];

if (routeMap.length > 0) {
  routeMap.map(eleRoute => {
    routes.add(eleRoute);
  });
}