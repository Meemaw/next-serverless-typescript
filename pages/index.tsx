import Link from 'next/link';
import React from 'react';

import Navbar from '../components/nav/navbar';

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <Navbar open={false} />
    <p className="hello-world">Hello World!</p>
  </div>
);
export default Index;
