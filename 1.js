//Q = second max of four numbers 

const input=require("readline-sync");
let a=input.question("Enter A:"),b=input.question("Enter B:"), c=input.question("Enter C:"),d=input.question("Enter D:"),m1,m2,M1,M2,r;
if(a<b)
{
    m1=a;
    M1=b
}
else{
    m1=b;
     M1=a;
}
if(c<d)
{
    m2=c;
    M2=d;
}
else
{
    m2=d;
    M2=c;
}
if(m1>m2)
{
    if(m1>M2)
    {
        r=m1;
    }
    else
    {
        r=M2;
    }

}
else
{
    if(m2>M1)
    {
        r=m2;
    }
    else
    {
        r=M1;
    } 
}
console.log(r);
