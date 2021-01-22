//

//1.kilometere to meter

function kilometerToMeter(k_meter)
{
    if(k_meter>=0){
        var meter= k_meter*1000;
        return (meter);
    }
    else
    return ('Invalid input');
  
}
var result= kilometerToMeter(5);
console.log(result);

//2.budget calculation

function budgetCalculation(watch_qty, phone_qty, laptop_qty)
{
    var total= watch_qty*50+phone_qty*100+laptop_qty*500;
    return(total);
}
var budget= budgetCalculation(2,1,2);
console.log(budget);

//3.hotel Cost

function hotelCost(day)
{
    if(0<=day&&day<=10)
    {
     var pay=day*100;
        return pay;
    }
    else if(0<=day&&day<=20)
    {
        var day_part2=(day-10);
        var pay=day_part2*80+10*100;
        return pay;

    }
    else if(day>20)
    {
        var day_part1=10*100;
        var day_part2=10*80;
        var day_part3=day-20;
        var pay= day_part1+day_part2+day_part3*50;
        return pay;
    }
    else{
        return 'Invalid Input';
    }
}
 var total_payment= hotelCost(22);
 console.log(total_payment);
 
 //4.find mega friend

 function maxFriendName(array){
    var max = array[0];
     for (let i = 0; i < array.length; i++) {
        const nextName = array[i];
            if( max.length < nextName.length){
                max = nextName;
                }
                     }
                    return max;
                        }

        var friendName=['Golu', 'Molu', 'Tariqul', 'Mokbul','Mosharrof'];
        var longestName = maxFriendName(friendName);
        console.log(longestName);