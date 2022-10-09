import Page from '@/Page';
import Article from '@/Article';
import ArchLinuxLink from '@/ArchLinuxLink';
import ZshLink from '@/ZshLink';
import NeovimLink from '@/NeovimLink';
import GitLink from '@/GitLink';

export default function SoftwarePage() {
  return (
    <Page title='Software'>
      <Article heading='Software'>
        <table>
          <tr>
            <th>Operating System</th>
            <td>
              <ArchLinuxLink />
            </td>
          </tr>
          <tr>
            <th>Shell</th>
            <td>
              <ZshLink />
            </td>
          </tr>
          <tr>
            <th>Text Editor</th>
            <td>
              <NeovimLink />
            </td>
          </tr>
          <tr>
            <th>Version Control System</th>
            <td>
              <GitLink />
            </td>
          </tr>
        </table>
      </Article>
    </Page>
  );
}
