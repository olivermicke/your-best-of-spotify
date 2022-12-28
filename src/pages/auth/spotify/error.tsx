import Link from 'next/link';

function Error() {
  return (
    <div>
      Something went wrong. <Link href='/login'>Back to login page.</Link>
    </div>
  );
}

export default Error;
