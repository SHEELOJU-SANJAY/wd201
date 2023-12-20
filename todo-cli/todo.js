const todoList = () => {
 const all = [];

 const add = (todoItem) => {
   all.push(todoItem);
 };

 const markAsComplete = (index) => {
   all[index].completed = true;
 };

 const overdue = () => {
   return all.filter((todo) => todo.dueDate < today);
 };

 const dueToday = () => {
   return all.filter((todo) => todo.dueDate === today);
 };

 const dueLater = () => {
   return all.filter((todo) => todo.dueDate > today);
 };

 const toDisplayableList = (vlist) => {
   const list = vlist.map((todo) => {
     const checkbox = todo.completed === true ? '[x]' : '[ ]';
     const formattedDate = todo.dueDate !== today ? ` <span class="math-inline">\{todo\.dueDate\}\` \: ''; // Add space before date
return \`</span>{checkbox} <span class="math-inline">\{todo\.title\}</span>{formattedDate}`; // Combine title and date
   });

   return list.join('\n');
 };

 const formattedDate = (d) => {
   return d.toISOString().split("T")[0];
 };

 const dateToday = new Date();
 const today = formattedDate(dateToday);

 return {
   all,
   add,
   markAsComplete,
   overdue,
   dueToday,
   dueLater,
   toDisplayableList,
 };
};

const todos = todoList();

const dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(new Date(dateToday.setDate(dateToday.getDate() - 1)));
const tomorrow = formattedDate(new Date(dateToday.setDate(dateToday.getDate() + 1)));

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false });
todos.add({ title: 'Pay rent', dueDate: today, completed: true });
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false });
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false });
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false });

console.log("My Todo-list\n");

console.log("Overdue");
const overdues = todos.overdue();
console.log(todos.toDisplayableList(overdues));
console.log("\n");

console.log("Due Today");
const itemsDueToday = todos.dueToday();
console.log(todos.toDisplayableList(itemsDueToday));
console.log("\n");

console.log("Due Later");
const itemsDueLater = todos.dueLater();
console.log(todos.toDisplayableList(itemsDueLater));
console.log("\n\n");
