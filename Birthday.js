//Computes the chance that at least two members of a k person group
//will share a birthday
function getProb(k){
  var numTrials = 100000;
  var numSucc = 0;
  for(i = 0; i<numTrials; i++){
    var group = [];
    for(j = 0; j<k; j++){
      group.push(Math.floor(Math.random()*365)+1);
    }
  var sameDay = false;
  var p = 0;
    while(!sameDay && p<k-1){
      var q = p+1;
        while(!sameDay && q<k){
          if(group[p]==group[q]){
            sameDay = true;
          }
          q++;
        }
        p++;
    }
    if(sameDay){
      numSucc++;
    }
  }
  return numSucc/numTrials;
}
