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

  const toDisplayableList = () => {
    const overdueList = toDisplayableSection('Overdue', overdue());
    const dueTodayList = toDisplayableSection('Due Today', dueToday());
    const dueLaterList = toDisplayableSection('Due Later', dueLater());

    return `My Todo-list\n\n${overdueList}\n${dueTodayList}\n${dueLaterList}`;
  };

  const toDisplayableSection = (title, list) => {
    const formattedList = list.map((todo) => {
      const checkbox = todo.completed ? '[x]' : '[ ]';
      return `${checkbox} ${todo.title} ${todo.dueDate}`;
    });

    if (formattedList.length > 0) {
      return `${title}\n${formattedList.join('\n')}`;
    } else {
      return '';
    }
  };

  const formattedDate = (d) => {
    return d.toISOString().split('T')[0];
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

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split('T')[0];
};

const dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(new Date(dateToday.setDate(dateToday.getDate() - 1)));
const tomorrow = formattedDate(new Date(dateToday.setDate(dateToday.getDate() + 1)));

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false });
todos.add({ title: 'Pay rent', dueDate: today, completed: true });
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false });
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false });
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false });

console.log(todos.toDisplayableList());
