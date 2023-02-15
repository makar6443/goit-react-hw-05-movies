import {Section, NavList, NavItem} from './Navigation.styled';

const navItems = [
  { href: '', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Navigation = () => {
  return (
    <Section>
    <NavList>
      {navItems.map(({ href, text }) => (
        <li key={href}><NavItem to={href} > {text}
      </NavItem></li>
      ))}
      </NavList>
    </Section>
  );
};

export default Navigation;
