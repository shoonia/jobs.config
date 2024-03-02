import { useStoreon } from '../store';
import { ROUTER } from '../constants';
import { Builder } from '../components/Builder';
import { Validator } from '../components/Validator';

export const useLazyRouter = (): FC => {
  const { path } = useStoreon('path');

  if (path === ROUTER.VALIDATOR) {
    return Validator;
  }

  return Builder;
};
