import React from "react";

const BorderPrimary = ({ children }: { children: React.ReactElement }) => {
	return <div style={{ border: "2px solid red" }}>{children}</div>;
};

export default BorderPrimary;
