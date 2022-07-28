class MyQueue {
  constructor() {
    this.queue = [];
  }

  push(x) {
    this.queue.push(x);
  }

  pop() {
    let stack1 = [];
    while (this.queue.length > 1) {
      let popcorn;
      popcorn = this.queue.pop;
      stack1.push(popcorn);
    }
    let result = this.queue.pop();
    while (stack1.length > 0) {
      popcorn = stack1.pop();
      this.queue.push(popcorn);
    }
    return result;
  }

  peek() {
    let stack1 = [];
    while (this.queue.length > 1) {
      let popcorn;
      popcorn = this.queue.pop;
      stack1.push(popcorn);
    }
    let result = this.queue.pop();
    this.queue.push(result);
    while (stack1.length > 0) {
      popcorn = stack1.pop();
      this.queue.push(popcorn);
    }
    return result;
  }

  empty() {
    if (this.queue.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

let a = new MyQueue();
console.log(a);
