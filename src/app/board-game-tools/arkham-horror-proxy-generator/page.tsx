'use client';
import { ProxyGenerator } from '@/components/ProxyGenerator';
import { config } from './config';

export default function ArkhamHorrorProxyGeneratorPage() {
  return <ProxyGenerator config={config} />;
}
