import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  return { props: {}, redirect: { destination: '/artists' } };
};

function Index() {
  return null;
}

export default Index;
