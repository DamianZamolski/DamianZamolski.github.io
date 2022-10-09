import { useContext } from 'react';
import Level from './Level';

export default function useLevel() {
  return useContext(Level);
}
