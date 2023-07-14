import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import { CButton, CCollapse, CContainer, CDropdown, CDropdownMenu, CDropdownToggle, CForm, CFormInput, CHeader, CHeaderBrand, CHeaderNav, CHeaderToggler, CNavItem, CNavLink } from '@coreui/react';

export default function Header() {
    const [visible, setVisible] = useState(false)
  return (
    <header>
          <CHeader>
      <CContainer fluid>
        <CHeaderBrand href="#">Dashboard</CHeaderBrand>
        <CHeaderToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="header-collapse" visible={true}>
          <CHeaderNav>
            <CNavItem>
              <CNavLink href="#" active>
                profil
              </CNavLink>
            </CNavItem>            
          </CHeaderNav>
        </CCollapse>
      </CContainer>
    </CHeader>
    </header>
  );
}