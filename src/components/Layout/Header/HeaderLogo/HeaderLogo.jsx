import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

import Logo from '../../../../svg/logo_main.svg';
import LogoFund from '../../../../svg/logo-big.svg';

export const HeaderLogo = ({ open }) => (
  <Link to="/" className={open ? 'logo-link is-hide' : 'logo-link'}>
    <Logo className="logo logo-main" />
  </Link>
);

export const HeaderLogoFund = ({ open, activeHeader, cls }) => (
  <Link
    to="/fund/"
    className={
      open ? 'logo-link logo-link__fund is-hide' : 'logo-link__fund logo-link'
    }
  >
    <LogoFund
      className={
        activeHeader
          ? `logo ${cls ? cls : 'logo-fund'} is-active`
          : `logo ${cls ? cls : 'logo-fund'}`
      }
    />
  </Link>
);

// export default HeaderLogo;
