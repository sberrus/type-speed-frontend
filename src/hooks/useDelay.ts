const useDelay = () => {
	return (ms: number) =>
		new Promise<void>((res) => {
			setTimeout(() => {
				res();
			}, ms);
		});
};

export default useDelay;
