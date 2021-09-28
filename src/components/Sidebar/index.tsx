import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import { ReactComponent as EntrySVG } from '../../assets/entry.svg';
import { ReactComponent as SalesSVG } from '../../assets/sales.svg';
import { ReactComponent as ProductsSVG } from '../../assets/products.svg';
import { ReactComponent as ReportsSVG } from '../../assets/reports.svg';

import { SidebarContainer, NavLinkStyle } from './style';
import { NavLink } from 'react-router-dom';

interface SidebarAuth {
  isLogged: (logged: boolean) => void
}

export function Sidebar(props: SidebarAuth) {

  function checkActive(match: any, location: any) {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  }
  
  return (

    <SidebarContainer>
      <div className="logo">
        <LogoSVG />
        <span>Mercadin-SASA</span>
      </div>

      <nav className="menu">
        <ul>
          <li>
            
            <NavLink style={NavLinkStyle} isActive={checkActive} to="/">
              <EntrySVG />
              Lançamentos
            </NavLink>
          </li>
          <li>
            <NavLink style={NavLinkStyle} to="/sales">
              <SalesSVG />
              Lançar venda
            </NavLink>
          </li>
          <li>
            <NavLink style={NavLinkStyle} to="/reports">
              <ReportsSVG />
              Relatórios
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="logout-icon">
        V1.0
      </div>
    </SidebarContainer>
    
  )
}