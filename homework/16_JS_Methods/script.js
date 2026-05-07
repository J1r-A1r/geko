const transactions = [
    { id: "T001", info: "  apple.com/bill  ", amount: "1200.50 USD", date: "2023-10-01" },
    { id: "T002", info: "Sberbank Transfer", amount: "5000.00 RUB", date: "2023-10-01" },
    { id: "T003", info: "APPLE.COM/BILL", amount: "1200.50 USD", date: "2023-10-01" },
    { id: "T004", info: " Netflix Subscription ", amount: "15.99 USD", date: "2023-10-02" },
    { id: "T005", info: "Amazon Web Services", amount: "450.00 USD", date: "2023-10-03" },
    { id: "T006", info: "Apple.com/bill", amount: "30.00 USD", date: "2023-10-04" }
];

let processedData = transactions.map(t => {
  
    const cleanInfo = t.info.trim().toLowerCase();
    
  
    const parts = t.amount.split(" ");
    let value = parseFloat(parts[0]);
    let currency = parts[1];

  
    if (currency === "RUB") {
        value = parseFloat((value / 90).toFixed(2));
        currency = "USD";
    }

    return {
        ...t,
        info: cleanInfo,
        amount: { value, currency }
    };
});

const uniqueTransactions = processedData.filter((t, index, self) => 
    index === self.findIndex(i => (
        i.info === t.info && 
        i.amount.value === t.amount.value && 
        i.date === t.date
    ))
);

const groupedTransactions = uniqueTransactions.reduce((acc, t) => {
    if (!acc[t.info]) {
        acc[t.info] = [];
    }
    acc[t.info].push(t);
    return acc;
}, {});

const totalExpenses = uniqueTransactions.reduce((sum, t) => sum + t.amount.value, 0);

console.log("Խմբավորված տվյալներ:", groupedTransactions);
console.log(`Ընդհանուր ծախս: ${totalExpenses.toFixed(2)} USD`);