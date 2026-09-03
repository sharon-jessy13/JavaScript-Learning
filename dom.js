let all_transaction = [];
const transaction_form = document.getElementById("transactionForm");
const transaction_list = document.getElementById("transactionList"); 
const total_balance = document.getElementById("totalBalance");
const total_income =  document.getElementById("totalIncome");
const total_expense = document.getElementById("totalExpense");




function updateList(type, amount, date, category) {
    const itemEl = document.createElement("li");
    const iconEl = document.createElement("div");
    const detailsEl=document.createElement("div");
    const nameEl =document.createElement("div");
    const dateEl =document.createElement("div");
    const amountEl =document.createElement("div");
    const deleteEl = document.createElement("button");


    itemEl.classList.add("transaction-item");
    iconEl.classList.add("transaction-icon");
    detailsEl.classList.add("transaction-details");
    nameEl.classList.add("transaction-name");
    dateEl.classList.add("transaction-date");
    amountEl.classList.add("transaction-amount");
    deleteEl.classList.add("transaction-delete");

    iconEl.innerText = type === "Income" ? " + " : "-" ;
    iconEl.classList.add(type === "Income" ? "Income" : "Expense");
    nameEl.innerText = category;
    dateEl.innerText = new Date(date).toLocaleDateString("en-US",{
        month:"short",
        day:"numeric",
        year:"numeric",
    })

    amountEl.innerText = (type === "Income" ? " + " : "-") + "$" + amount;
    amountEl.classList.add(type === "Income" ? "Income" : "Expense");
    deleteEl.innerText = "x";
    deleteEl.addEventListener("click", (event)=>{
        const btn = event.currentTarget;
        const item = btn.closest(".transaction-item");

        const index = Array.from(transaction_list.children).indexOf(item);
        all_transaction.splice(index,1);

        updateBalance();
        item.remove();



    })

    detailsEl.appendChild(nameEl);
    detailsEl.appendChild(dateEl);
    itemEl.appendChild(iconEl);
    itemEl.appendChild(detailsEl);
    itemEl.appendChild(amountEl);
    itemEl.appendChild(deleteEl);

    transaction_list.prepend(itemEl);
}


function updateBalance() {
    let income = 0;
    let expense = 0;
    let balance = 0;

    all_transaction.forEach((transaction) =>{

        if(transaction.type === "Income"){
            income += parseFloat(transaction.amount);
            balance += parseFloat(transaction.amount);
        } else{
            expense -= parseFloat(transaction.amount);
            balance -= parseFloat(transaction.amount);
        }
    });
    total_balance.innerText = "$" + balance;
    total_income.innerText = "$" + balance;
    total_expense.innerText = "$" + balance;
}


transaction_form.addEventListener('submit', function (event){
    event.preventDefault();
    
    const type = event.target.type.value;
    const amount = event.target.amount.value;
    const date = event.target.date.value;
    const category = event.target.category.value;

    console.log(type, amount, date, category);

    updateList(type, amount, date, category);

    all_transaction.unshift({type, amount, date, category});
    updateBalance();
    

    transaction_form.requestFullscreen();
})

