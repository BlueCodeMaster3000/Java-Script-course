const flag = true

if(!flag)
{
    console.log("condition satisfied")
}
else
{
    console.log(flag)
    console.log("condition not satisfied")
}

let i = 0 
while(i>10)
{
    i++ // incrementing by 1 every  time
    console.log(i)
}

do
{
i++
}while(i>10)
console.log(i)

for(let k=0;k<10;k++)
{
    console.log(k)
}

let required = true
while(required)
{
console.log(required)
required = false
}

//2 and 5
// from 1 to 100 give me commong multiple values of 2 and 5
let n = 0
for(let f=1;f<=100;f++)
{
    if(f%2 == 0 && f%5 == 0) // && is and in python
    {
        n++
    console.log(f)
    if(n ==3) // will make it so loop with print only first 3 results
    break
    }
}

//2 or 5
// from 1 to 100 give me commong multiple values of 2 and 5
for(let f=1;f<=100;f++)
{
    if(f%2 == 0 || f%5 == 0) // || is or in python
    {
    console.log(f)
    }
}