export interface IChildProps {
  children: React.ReactNode;
};

export interface ILayout {
    layout:string;
}

export interface IShare {
    openShare:()=>void;
    isShare:boolean;
    closeShare:()=>void;
}