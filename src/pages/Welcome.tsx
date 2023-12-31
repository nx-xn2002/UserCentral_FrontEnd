import {PageContainer} from '@ant-design/pro-components';
import {Alert, Card, Typography} from 'antd';
import React from 'react';
// import styles from './Welcome.less';

// const CodePreview: React.FC = ({children}) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'NX 用户中心，已经发布。'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            欢迎使用
          </a>
        </Typography.Text>
        {/*代码块*/}
        {/*<CodePreview>yarn add @ant-design/pro-components</CodePreview>*/}
      </Card>
    </PageContainer>
  );
};
export default Welcome;
