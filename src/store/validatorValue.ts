import type { TModule } from './types';
import { getValidatorValue } from '../util/validatorValue';

export const validatorModule: TModule = ({ on }) => {
  on('@init', () => {
    return {
      validatorValue: getValidatorValue(),
    };
  });

  on('validator/input', (_, validatorValue) => ({ validatorValue }));
};
