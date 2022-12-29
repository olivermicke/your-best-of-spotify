import Link from 'next/link';

import { WiredButton } from '../../../components/wired-elements/WiredButton';

function Error() {
  return (
    <div>
      <p>Something went wrong.</p>

      <Link href='/login'>
        <WiredButton elevation={3}>Back to login page</WiredButton>
      </Link>
    </div>
  );
}

export default Error;
