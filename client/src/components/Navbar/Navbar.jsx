import React from 'react';
import avatar from '../../images/Avatar.png';
import { NavbarStyled, Flex, Input, Avatar, Title } from './Navbar.styled';
import logo from '../../images/лого.svg';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdLogOut } from 'react-icons/io';
import { Logout } from '../../redux/apiCalls';

const Navbar = () => {
  const location = useLocation();
  const block = location.pathname.split('/')[1];
  const user = useSelector((state) => state.user.currentUser);
  const params = user?.email?.split('@')[0];
  const dispatch = useDispatch();

  const handleClick = () => {
    Logout(dispatch);
  };

  return (
    <>
      {block === 'admin' ? (
        <NavbarStyled style={{ margin: '0' }}>
          <Flex height={'138px'}>
            <img src={logo} alt="logo" style={{ marginLeft: '70px' }} />
            <Flex width={'922px'}>
              <Input></Input>
              <IoMdLogOut
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={handleClick}
              />
              <Link to={`/${params}`}>
                <Avatar src={null || avatar} />
              </Link>
            </Flex>
          </Flex>
          <Flex style={{ display: 'none' }}></Flex>
        </NavbarStyled>
      ) : (
        <NavbarStyled>
          <Flex height={'138px'}>
            <img src={logo} alt="logo" style={{ marginLeft: '70px' }} />
            <Flex width={'922px'}>
              <Input></Input>
              <IoMdLogOut
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={handleClick}
              />
              <Link to={`/${params}`}>
                <Avatar src={null || avatar} />
              </Link>
            </Flex>
          </Flex>
          <Flex width={'1200px'} margin={'0 auto'}>
            <Title>Главная</Title>
            <Title>Бестселлеры</Title>
            <Title>Фантастика</Title>
            <Title>Романтика</Title>
            <Title>История</Title>
            <Title>Психология</Title>
            <Title>Бизнес</Title>
          </Flex>
        </NavbarStyled>
      )}
    </>
  );
};

export default Navbar;
