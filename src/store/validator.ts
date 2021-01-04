import { StoreonModule } from 'storeon';

export interface IValidatorState {
  validatorValue: string;
}

export interface IValidatorEvents {
  'validator/input': string;
}

type TValidatorModule = StoreonModule<IValidatorState, IValidatorEvents>;

export const validatorModule: TValidatorModule = ({ on }) => {
  on('@init', () => ({ validatorValue: '' }));
  on('validator/input', (_, validatorValue) => ({ validatorValue }));
};
