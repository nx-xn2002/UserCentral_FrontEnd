import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = '倪响出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'nx tools',
          title: 'nx tools',
          href: 'http://124.220.228.125/#/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> nx&apos;s Github</>,
          href: 'https://github.com/nx-xn2002',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
