var StaticServer=require('static-server')
var server=new StaticServer({
    rootPath:'./dist/index.html',
    port:9000

})
server.start(function(){
    console.log('start')
})