document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('transaction-form');
    const transactionsDiv = document.getElementById('transactions');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;
        const description = document.getElementById('description').value;

        addTransaction(date, category, amount, description);
    });

    function addTransaction(date, category, amount, description) {
        const transaction = {
            date,
            category,
            amount,
            description
        };

        // Save to localStorage
        let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));

        displayTransactions();
    }

    function displayTransactions() {
        transactionsDiv.innerHTML = '';
        let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

        transactions.forEach(transaction => {
            const transactionDiv = document.createElement('div');
            transactionDiv.classList.add('transaction');
            transactionDiv.innerHTML = `
                <p>Date: ${transaction.date}</p>
                <p>Category: ${transaction.category}</p>
                <p>Amount: ${transaction.amount}</p>
                <p>Description: ${transaction.description}</p>
            `;
            transactionsDiv.appendChild(transactionDiv);
        });
    }

    // Initial display of transactions
    displayTransactions();
});
