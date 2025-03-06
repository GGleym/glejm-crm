import {useUnit} from 'effector-react';

import {Table} from '~/kit/ui/table';

import {COLUMNS, stores} from './model';

export const TasksList = () => {
  const tasks = useUnit(stores.$tasks);

  return <Table columns={COLUMNS} data={tasks} />;
};
