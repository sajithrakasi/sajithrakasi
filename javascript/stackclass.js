class stack{
    constructor(){
        this.stack=[];
        this.top=-1;
    }
    push(num){
        this.stack.push(num);
        this.top+=1;
        console.log("after push "+this.stack +" top is: "+this.top);
    }
    pop(){
        this.stack.pop();
        this.top-=1;
        console.log("after pop "+this.stack);
    }

}
s=new stack();
s.push(90);
s.push(30);
s.pop();