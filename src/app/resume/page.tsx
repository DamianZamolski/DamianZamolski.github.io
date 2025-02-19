import { Breadcrumbs } from '@/components/Breadcrumbs';

const skills = [
  'continous deployment',
  'docker',
  'drizzle',
  'eslint',
  'expo',
  'express',
  'git',
  'github actions',
  'grafana',
  'graphql',
  'jest',
  'jira',
  'jotai',
  'jwt',
  'kafka',
  'kubernetes',
  'linux',
  'mongodb',
  'msw',
  'nest',
  'next',
  'nvm',
  'oauth2',
  'playwright',
  'pnpm',
  'postgresql',
  'prettier',
  'prisma',
  'rabbitmq',
  'react hook form',
  'react native',
  'react',
  'redis',
  'redux',
  'rest',
  'scrum',
  'soap',
  'sql',
  'strict typescript',
  'typeorm',
  'vite',
  'vitest',
  'zod',
  'zustand',
];

export default function ResumePage() {
  return (
    <main>
      <Breadcrumbs />
      <h1>Damian Zamolski</h1>
      <h2>Employment</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, textAlign: 'left' }}>Beesafe</div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          Senior Software Engineer
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>2022/11 - present</div>
      </div>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, textAlign: 'left' }}>Comarch</div>
        <div style={{ flex: 1, textAlign: 'center' }}>Software Engineer</div>
        <div style={{ flex: 1, textAlign: 'right' }}>2018/07 - 2022/11</div>
      </div>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, textAlign: 'left' }}>Cybercom</div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          Junior Software Engineer
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>2017/07 - 2018/07</div>
      </div>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
      <h2>Education</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, textAlign: 'left' }}>
          Lodz University of Technology
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          Bachelor of Engineering in Computer Science
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>2014 - 2018</div>
      </div>
      <h2>Skills</h2>
      <ul
        style={{
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: '1rem',
        }}
      >
        {skills.map((skill) => (
          <li key={skill} style={{ margin: 0 }}>
            {skill}
          </li>
        ))}
      </ul>
    </main>
  );
}
