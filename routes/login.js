var express = require('express');
var router = express.Router();

var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 't_store'
  });
  
  connection.connect();

router.get('/', (req,res,next) => {
   var data = {
    title:'Login',
    form:{name:'',password:''},
    content:'名前とパスワードを入力してください。'
   }
    res.render('login',data);
});

router.post('/',(req,res,next) => {
    var request = req;
    var response = res;
    req.check('name','NAMEは必ず入力してください。 ') .notEmpty();
    req.check('password','PASSWORDは必ず入力してください。 ') .notEmpty();
    req.getValidationResult().then((result) => {
        if (!XPathResult.isEmpty()) {
            var content = '<ul class="error">';
            var result_arr = result.array();
            for(var n in result_arr) {
                content += '<li>' + result_arr[n].msg + '<li>'
            }
            content += '</ul>';
            var data = {
                title:'Login',
                content:'content',
                form:req.body
            }
            response.render('login', data);
        }else{
            var nm = req.body.name;
            var pw = req.body.password;

            User.query({where:{name:nm},andWhere: {password:pw}})
            .fetch()
            .then((model) => {
            if (model == null){
                var data = {
                    title:'再入力',
                    content:'<p class="error">名前またはパスワードが違います。</p>',
                    form:req.body
                };
                response.render('login',data);
            }else{
                request.session.login = model.attributes;
                var data = {
                    title:'Login',
                    content:'<p>ログインしました！</p>',
                    form: req.body
                };
                resposnce.render('login',data);
            }
        });
      }
    })
});
module.exports = router;