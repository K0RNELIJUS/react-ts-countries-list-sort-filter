import { LayoutStyled, LayoutContainerStyled } from './Layout.styled';
import { LayoutProps } from './type';

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <LayoutStyled>
        <LayoutContainerStyled>{children}</LayoutContainerStyled>
      </LayoutStyled>
    </main>
  );
};

export default Layout;
