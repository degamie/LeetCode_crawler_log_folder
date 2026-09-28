//New Approach(optimal)
//T(C(N))==O(N) and S(C(N))==O(1) as it requires const space iteratively
var minOperations = function(logs) {
    let out = 0;//initializing depth
    for (const log of logs) {//iterating throught logs
        if (log === '../') {//checking main folder and moving to next added folder 
            out = Math.max(0, out - 1);//calc Minimum count of logs exist in it
        } else if (log !== './') {//checking to current folder in the file sys
            out++;//incr count
        }
    }return out;//prinitng output
}; 
//Old Approach
    // out=0;n=logs.length;
    // for(let i=0;i<n;i++){
    //     if(logs[i]==" ")continue;
    //     for(let j=i+1;j<n-1;j++){
    //         if(logs[i]=="../")logs[i]+=logs[j].plus("d"+i+"/");
    //         if(logs[i]=="x/")logs[j]+=logs[i].plus("d"+j+"/");
    //         if(logs[i]=="./")logs[i]+=logs[j];
    //         out+=Math.min(logs[i],logs[j]);
    // }
    // }return out;
