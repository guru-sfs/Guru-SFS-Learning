a=[2,4,6,8,3,5,1,10]
function quick(a){
    if (a.length<=1){
        return a
    }
    let pivot = a[0];
    const left = [];
    const right = [];
    for (let i=1;i<a.length;i++){
        if (a[i]<pivot){
            left.push(a[i])
        }else{
            right.push(a[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}
let k=quick(a)
console.log(k)