import EmptyList from '../components/EmptyList';
import InputFAB from '../components/InputFAB';
import List from '../components/List';

const ListScreen = () => {
  const todos = [
    { id: 1, task: 'React Native 1', isDone: false },
    { id: 2, task: 'React Native 2', isDone: true },
    { id: 3, task: 'React Native 3', isDone: false },
    { id: 4, task: 'React Native 4', isDone: true },
  ];

  return (
    <>
      {todos.length ? <List data={todos} /> : <EmptyList />}
      <InputFAB />
    </>
  );
};

export default ListScreen;
