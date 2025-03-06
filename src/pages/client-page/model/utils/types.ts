import type {CurrencyAmount} from '../types';

export type PrepareFuncArgument<Entity> = {products: Entity[]; balances: CurrencyAmount[]};
