//QN: calculate total tax paid and total amount paid using functions

const transactions = [{id:1,
    base_amount:10,
tax: "10%"},{
    id: 2,
    base_amount: 20,
    tax: "5%"
    } ]
    console.log('given data',transactions);
    const output= {}
    const calculateTaxAmount = (obj)=>{
        obj.tax_amount= (parseInt(obj.tax)* obj.base_amount) / 100
        obj.Amount= (obj.tax_amount + obj.base_amount)
       
    }
    const calculateAmount = (obj)=>{
        obj.Amount= (obj.tax_amount + obj.base_amount)
      
    }
    const outputObj={}
    const calculateTotaltaxandTotalAmount=()=>{
        let total_tax=0
        for(let val of transactions){
         total_tax += val.tax_amount
        }
       let total_amount=0
       for(let val of transactions){
        total_amount += val.Amount
       }
       outputObj.total_tax=total_tax
       outputObj.total_amount=total_amount
    }
    transactions.forEach(calculateTaxAmount)
    transactions.forEach(calculateAmount)
    console.log('after finding tax-amount and amount in each transaction and assign it to the same obj');
    console.log(transactions);
    calculateTotaltaxandTotalAmount()
    console.log('total amount and taxpaid in all transactions');
console.log(outputObj);
    