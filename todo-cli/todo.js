const todoList = () => {
    let all = [];

    const add = (todoItem) => {
        all.push(todoItem);
    };

    const markAsComplete = (index) => {
        all[index].completed = true;
    };

    const overdue = () => {
        const today = formattedDate(new Date());
        return all.filter((todo) => todo.dueDate < today);
    };

    const dueToday = () => {
        const today = formattedDate(new Date());
        return all.filter((todo) => todo.dueDate === today);
    };

    const dueLater = () => {
        const today = formattedDate(new Date());
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

// Example usage
const myTodoList = todoList();

myTodoList.add({ title: 'Submit assignment', dueDate: '2023-12-19', completed: false });
myTodoList.add({ title: 'Pay rent', dueDate: '2023-12-20', completed: true });
myTodoList.add({ title: 'Service Vehicle', dueDate: '2023-12-20', completed: false });
myTodoList.add({ title: 'File taxes', dueDate: '2023-12-21', completed: false });
myTodoList.add({ title: 'Pay electric bill', dueDate: '2023-12-21', completed: false });

console.log(myTodoList.toDisplayableList());
