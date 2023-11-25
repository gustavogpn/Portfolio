///fontes
import {Sora as SoraFont} from '@next/font/google'

//configurações de fonte
const Sora = SoraFont({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({children}) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${Sora.variable}
       font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
