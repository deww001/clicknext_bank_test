const express = require('express');
const cors = require('cors');
const conecttion = require('./server');
const app = express();
app.use(cors())

app.post('/login', function (req, res) {
  const phonenumber = req.body.phone;
  const cardid = req.body.cardid;
  console.log(phonenumber + cardid)
  if (phonenumber && cardid) {
    conecttion.query("SELECT * FROM users WHERE phonenumber=? AND cardid=?", [phonenumber, cardid], function (err, results, field) {
      if (results.length > 0) {
        res.redirect('/home');
      } else {
        res.redirect('/login');
      }
      res.end();
    })
  }
});

app.get('/home',function(req,res){
    conecttion.query('SELECT * FROM account',function(err,result){
      if (err) {
        console.log(err);
      } else {
        res.send(result)
      }
    })
})

app.post('/deposit',function(req,res){
var amountdeposit = req.body.amountdeposit;
var creditid = req.body.accoutUser;
//check console.log(amountdeposit+creditid)
  conecttion.query('INSERT INTO deposit (account_id,amount) VALUES(?,?)',[creditid,amountdeposit],function(err,results){
      if(err){//INSERT INTO `db_bank`.`deposit` (`account_id`, `amount`) VALUES ('0743543963', '100');
        console.log("err insert into deposit" + err);
      }else{
        res.send("value success");
        
      }
  })
})
app.post('/withdraw',function(req,res){
  var amountWithdraw = req.body.amountWithdraw;
  var accoutWithdraw = req.body.accoutWithdraw;
  
  conecttion.query('INSERT INTO withdrawn (amount,accounwithdrawnt_id) VALUES(?,?)',[amountWithdraw,accoutWithdraw],function(err,results){
      if(err){
        console.log("err insert into deposit" + err);
      }else{
        res.send(results);
        
      }
  })

})
app.post('/tranfer',function(req,res){
  var amountTransfer = req.body.amountTransfer;
  var accoutTransfer = req.body.accoutTransfer;
  var recipientid = req.body.recipientid;
  conecttion.query('INSERT INTO transfer (amount,acountransfert_id) VALUES(?,?,?)',[amountTransfer,accoutTransfer,recipientid],function(err,results){
      if(err){
        console.log("err insert into tranfer" + err);
      }else{
        res.redirect("/tranfer");
        
      }
  })

})
app.get('/history',function(req,res){
  conecttion.query('SELECT * FROM history',function(err,result){
    if(err){
      console.log("err insert into history" + err);
    }else{
      res.send(result);
  
    }
})

  
})

app.listen(3004, () => console.log(`http://localhost:3004/` + '\nserver runing on port 3004'))