import { ReactNode } from "react";


interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div>
      <div className="flex-1 overflow-x-hidden">{children}</div>
    </div>
  );
};

export default MainLayout;
