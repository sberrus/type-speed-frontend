import useAuth from "context/useAuth";
import Toast from "react-bootstrap/Toast";

function ErrorToast() {
	const auth = useAuth();
	const error = auth?.loginError;

	return (
		<div>
			<Toast
				onClose={() => auth?.setLoginError(null)}
				show={!!error}
				delay={3000}
				autohide
				bg="danger"
				className="float-end"
			>
				<Toast.Body>{error}</Toast.Body>
			</Toast>
		</div>
	);
}

export default ErrorToast;
