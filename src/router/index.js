let context = require.context('./service', true, /\.js$/);
let routeList = []
context.keys().forEach((routes)=> {
  routeList = routeList.concat(context(routes).default)
})
export default routeList
