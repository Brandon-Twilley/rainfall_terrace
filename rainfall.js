function rainfall(arr){
     var max = Math.max(...arr);
     var min = Math.min(...arr);
     range = max-min;
     new_arr = [];
     for(var i = 0; i <= range; i++){
          new_arr[i] = [];
     }
     for(var i = 0; i < arr.length; i++){
          console.log('Arr[',i,'] = ', arr[i]);
          console.log('new_arr[',arr[i]-min,'] = ', new_arr[arr[i]-min]);
          new_arr[arr[i]-min].push(i);
          console.log('new_arr[',arr[i]-min,'] = ', new_arr[arr[i]-min]);
     }
     //All our values are stored in our array
     sum = 0;
     console.log(new_arr);
     for(var i = new_arr.length-1; i > 0; i--){
          // console.log(i);
          console.log(new_arr);
          if (new_arr[i].length > 1){
               for(j = 0; j < new_arr[i].length-1; j++){
                    sum = sum + new_arr[i][j+1] - new_arr[i][j] - 1;
                    /* console.log('sum = ',sum);
                    console.log('new_arr[',i,'][',j,'] = ', new_arr[i][j])
                    console.log('new_arr[',i,'][',j+1,'] = ', new_arr[i][j+1])
                    */
               }
          }
          //Push all the values from our current I into our next I.
          // console.log('appending ');
          count = 0;
          for(j = 0; j < new_arr[i].length; j++){
               new_arr[i-1].push(new_arr[i][j]);
               count++;
               if(count == 100){
                    console.log("BREAK AT LINE 37")
                    break;
               }
          }
          new_arr.pop();
          // console.log('sorting ');
          new_arr[i-1].sort(function(a, b){return a-b});
          console.log('sum = ', sum)

     }
     count = 0;
     for(j = 0; j < new_arr[0].length-1; j++){
          sum = sum + new_arr[0][j+1] - new_arr[0][j] - 1;
          if(count == 100){
               console.log('BREAK AT LINE 49');
               break;
          }
     }
     console.log('sum = ', sum)
}

arr = [3,1,1,4,2,5,2]
rainfall(arr)
