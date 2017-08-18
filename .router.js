function setRouter(app){ 
 var router = app; 

app.get('/getMore',function(req,res){


    var news=[

        '内容1',
        '内容2',
        '内容3',
        '内容4',
        '内容5',
        '内容6',
        '内容7',
        '内容9',
        '内容10'
    ]


    var pageIndex= req.query.page;
    var len=3;

    var retnews=news.slice(pageIndex*len,pageIndex*len+len)

    res.send({
        status: 0,
        data: retnews
    })



})}
 module.exports.setRouter = setRouter