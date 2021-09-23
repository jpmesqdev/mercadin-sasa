import { ReactComponent as LogoutSVG } from '../../assets/logout.svg';
import { ReactComponent as EntrySVG } from '../../assets/entry.svg';
import { ReactComponent as SalesSVG } from '../../assets/sales.svg';
import { ReactComponent as ProductsSVG } from '../../assets/products.svg';
import { ReactComponent as ReportsSVG } from '../../assets/reports.svg';

import { SidebarContainer, NavLinkStyle } from './style';
import { NavLink } from 'react-router-dom';

export function Sidebar() {

  function checkActive(match: any, location: any) {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  }
  
  return (

    <SidebarContainer>
      <div className="user-content">
        <div className="user-avatar"></div>
        <div className="user-titles">
          <div className="title">Usuário</div>
          <div className="name">Administrador</div>
        </div>
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
            <NavLink style={NavLinkStyle} to="/products">
              <ProductsSVG />
              Produtos
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
        <LogoutSVG />
      </div>
    </SidebarContainer>
    
  )
}