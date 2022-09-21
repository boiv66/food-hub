import { ReactNode } from "react";


interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div>
      <div className="vw-100 vh-100">{children}</div>
    </div>
  );
};

export default MainLayout;
