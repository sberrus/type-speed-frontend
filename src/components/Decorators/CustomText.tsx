import style from "./CustomText.module.scss";
export const TextDecoratorPrimary = ({ children }: { children: string }) => {
	return <span className={style.textDecoratorPrimary}>{children}</span>;
};
export const TextDecoratorSecondary = ({ children }: { children: string }) => {
	return <span className={style.textDecoratorSecondary}>{children}</span>;
};
