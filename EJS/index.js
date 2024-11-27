import express from 'express';

const app=express();
const port=3000;

const today=new Date('1 December,2024');
const day=today.getDay();


let type='Its Weekday';
let adv='You have to workhard';

if(day===0 || day===6){
    type='Its Weekend';
    adv='You can enjoy!!!';
}
app.get('/',(req,res)=>{
    res.render('index.ejs',{
        dayType:type,
        advice:adv
    });
});

app.listen(port,()=>{
    console.log(`Server running at ${port}`);
});