import style from "./CustomText.module.scss";
export const TextDecoratorPrimary = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => {
	return <span className={style.textDecoratorPrimary}>{children}</span>;
};
export const TextDecoratorSecondary = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => {
	return <span className={style.textDecoratorSecondary}>{children}</span>;
};
