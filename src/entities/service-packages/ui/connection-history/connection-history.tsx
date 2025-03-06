import {type PackageInfo} from '../../model/types';

import {HistoryCard} from '../history-card';

type ConnectionHistoryProps = {
  /** Список пакетов */
  packages: PackageInfo[];
};

export const ConnectionHistory = ({packages}: ConnectionHistoryProps) =>
  packages.map((props) => <HistoryCard {...props} />);
