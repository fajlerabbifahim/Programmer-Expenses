// global diclear for another function use this element

// ***********************

const calculateButton = document
  .getElementById("calculate")
  .addEventListener("click", function () {
    const income = getInputValueById("income");
    const software = getInputValueById("software");
    const courses = getInputValueById("courses");
    const internet = getInputValueById("internet");

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    //   long way to set element
    const expenseElement = document.getElementById("total-expenses");
    expenseElement.innerText = totalExpenses.toFixed(2);
    //   short way to set Element
    document.getElementById("balance").innerText = balance.toFixed(2);

    // show Result
    document.getElementById("results").classList.remove("hidden");

    // history list added
    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white p-3 rounded-md border-l-2 border-indigo-500";
    historyItem.innerHTML = `
      <p class='text-gray-500 font-medium > ${new Date().toDateString()} </p>
      <h3 class='text-gray-500 font-bolder '> Income : ${income} </h3>
      <hr>
      <h5 class='text-red-500 font-medium '>Expense : ${totalExpenses} </h5>
      <hr>
      <h5 class='text-gray-500 font-medium '> Balance : ${balance} </h5>
      `;

    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  });

// Calculate Savings

document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const income = getInputValueById("income");
    const software = getInputValueById("software");
    const courses = getInputValueById("courses");
    const internet = getInputValueById("internet");

    const savingParsentage = getInputValueById("savings");
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    const finalSaving = (savingParsentage * balance) / 100;

    document.getElementById("savings-amount").innerText =
      finalSaving.toFixed(2);
    const remainingBalance = balance - finalSaving;
    document.getElementById("remaining-balance").innerText =
      remainingBalance.toFixed(2);
  });

//   switch to history tap

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");

historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  document
    .getElementById("assistant-tab")
    .classList.remove(
      "text-white",
      "font-semibold",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
  document.getElementById("assistant-tab").classList.add("text-gray-600");
  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");

  document.getElementById("results").classList.remove("hidden");
});

assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});
