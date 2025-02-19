import { skills } from './skills';
import { Page } from '@/components/Page';

export default function ResumePage() {
  return (
    <Page title='Damian Zamolski'>
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
    </Page>
  );
}
