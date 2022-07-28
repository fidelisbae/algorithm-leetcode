var MyQueue = function () {
  this.queue = [];
  return this.queue;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let stack1 = [];
  while (this.queue.length > 1) {
    let popcorn;
    popcorn = this.queue.pop;
    this.stack1.push(popcorn);
  }
  let result = this.queue.pop();
  while (this.stack1.length > 0) {
    popcorn = this.stack1.pop();
    this.queue.push(popcorn);
  }
  return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let stack1 = [];
  while (this.queue.length > 1) {
    let popcorn;
    popcorn = this.queue.pop;
    this.stack1.push(popcorn);
  }
  let result = this.queue.pop();
  this.queue.push(result);
  while (this.stack1.length > 0) {
    popcorn = this.stack1.pop();
    this.queue.push(popcorn);
  }
  return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.queue.length === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
