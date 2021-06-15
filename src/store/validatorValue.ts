import { StoreonModule } from 'storeon';

import { getValidatorValue } from '../util/validatorValue';

export interface IValidatorState {
  validatorValue: string;
}

export interface IValidatorEvents {
  'validator/input': string;
}

type TValidatorModule = StoreonModule<IValidatorState, IValidatorEvents>;

export const validatorModule: TValidatorModule = ({ on }) => {
  on('@init', () => {
    return {
      validatorValue: getValidatorValue(),
    };
  });

  on('validator/input', (_, validatorValue) => ({ validatorValue }));
};
