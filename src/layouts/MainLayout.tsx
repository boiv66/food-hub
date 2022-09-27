import { ReactNode } from "react";


interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div>
      <div className="h-screen">{children}</div>
    </div>
  );
};

export default MainLayout;
