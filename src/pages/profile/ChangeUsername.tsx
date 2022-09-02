// components
import { TextDecoratorPrimary } from "@components/Decorators/CustomText";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// assets
import EditButton from "@assets/art/edit_button.svg";
import CloseButton from "@assets/art/close_button.svg";
// styles
import style from "./Profile.module.scss";
// context
import useAuth from "context/useAuth";
// types
import { ConfigStateProps } from "./Profile";

const ChangeUsername = ({ changeConfigState }: ConfigStateProps) => {
	// hooks
	const auth = useAuth();

	// states
	const [isEditingUsername, setIsEditingUsername] = useState(false);
	const [username, setUsername] = useState(() => auth?.session?.user.username);

	// methods
	const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};
	const handleEditUsername = () => {
		setIsEditingUsername((prev) => !prev);
	};
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};
	return (
		<div className={style.profile}>
			<div className={style.wrapper}>
				<h2 className="text-center">
					<TextDecoratorPrimary>Perfil</TextDecoratorPrimary>
				</h2>
				<Container fluid className={style.formContainer}>
					<Row>
						<Col md={6} className="m-auto">
							<Form onSubmit={handleSubmit}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<div className={style.inputContainer}>
										<Form.Control
											type="text"
											placeholder="Enter new Username"
											value={username}
											disabled={!isEditingUsername}
											onChange={handleUsernameChange}
										/>
										<button className={style.actionButtonContainer} onClick={handleEditUsername}>
											<img src={isEditingUsername ? CloseButton : EditButton} alt="" />
										</button>
									</div>
								</Form.Group>

								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default ChangeUsername;
