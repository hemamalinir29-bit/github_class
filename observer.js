let observers=[]
function attach (observer){
    observers.push(observer)
}
function detach(observer){
    let newobservers=[]
    for(let i of observers){
        if(i !=observer){
            newobservers.push(i)
        }
    }
}
function notify(msg){
    for(let i of observers){
        console.log(i+":" + msg)
    }
}
attach("A")
attach("B")
notify("Holiday")
attach("C")
notify("Fest")
detach("B")
notify("Exam")

count =11
if(count<0){
    console.log("Less than Zero")
}
