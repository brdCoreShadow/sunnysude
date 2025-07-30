import { IChildProps } from "@/utils/types";

const SharedLayout:React.FC<IChildProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SharedLayout;
