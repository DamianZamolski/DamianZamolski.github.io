'use client';
import { ProxyGenerator } from '@/components/ProxyGenerator';
import { config } from './config';

export default function StarWarsUnlimitedProxyGeneratorPage() {
  return <ProxyGenerator config={config} />;
}
