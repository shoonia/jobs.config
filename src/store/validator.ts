import { StoreonModule } from 'storeon';

export interface IValidatorState {
  validatorValue: string;
}

export interface IValidatorEvents {
  'validator/input': string;
}

export const validatorModule: StoreonModule<IValidatorState, IValidatorEvents> = ({ on }) => {
  on('@init', () => ({ validatorValue: '' }));
  on('validator/input', (_, validatorValue) => ({ validatorValue }));
};
