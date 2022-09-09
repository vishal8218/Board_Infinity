const express=require('express')
const router=express.Router()
const tem1=require('./root1/entity Intiliaze');
router.get('/',async(req,res)=>
{
    try{
        const tem2=await tem1.find()
        res.json(tem2)

    }catch(err)
    {
    res.send('Error '+err);
    }
});
router.post('/',async(req,res)=>
{
    const tempo=new entityIntiliaze({
        task_name:req.body.task_name,
        task_description:req.body.task_description,
        creator:req.body.creator,
        duration:req.body.duration,
        createdAt:req.body.createdAt

    })
    try{
        const usetempo=await tempo.save()
        res.json(usetempo)
    }
    catch(err)
    {
        res.send('Error'+ err)
    }
});
/*router.get('/',async(req, res) {
    const duration2 = new_date.getMinutes()
    var sql = 'DELETE FROM Board WHERE req.body.duration < duration2';
    db.query(sql, [duration], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
    });
    res.redirect('/entity Intiliaze/entityIntiliaze');*/

module.exports=router