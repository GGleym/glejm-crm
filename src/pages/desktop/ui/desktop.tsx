import {useUnit} from 'effector-react';

import {multiModalStores} from '~/kit/ui/multi-modal';

export const Desktop = () => {
  const [modals, currentModalId] = useUnit([multiModalStores.$modals, multiModalStores.$currentModalId]);

  return modals.find(({id}) => id === currentModalId)?.content ?? <div>Ошибочка</div>;
};
