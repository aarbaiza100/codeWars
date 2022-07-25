function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2);
}



function basicOp(operation,value1,value2) {
    
    switch(operation) {
      
      case '*': 
      return value1 * value2;
      break;

      case '/':
      return value1 / value2;
      break;

      case '+':
      return value1 + value2;
      break;

      case '-': 
      return value1 - value2;

      default:
          return 0; 

      
      
    }
}
