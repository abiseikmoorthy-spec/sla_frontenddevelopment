let num=""
for(let a=1; a<=20; a++){
    num += a + " "
}
console.log(num)



let even=""
for(let b=1; b<20; b++){
    if(b%2===0){
       even += b
    }
}
 console.log(even)



 let odd=" "
 for(let c=1; c<=20; c++)
    if(c%2!=0){
        odd +=c +" "
    }
    console.log(odd)

    let sum=0
    for(let d=1; d<=20; d++){
        sum=sum+d
    }
      console.log(sum)

      let text="javascript"
      let target=""
      for(let x=text.length-1; x>=0; x--){
        target=target+text[x]
      }
      console.log(target)