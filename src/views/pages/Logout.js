import { useHistory } from "react-router-dom";
import { useGoogleLogout } from 'react-google-login';

import { useUserContext } from '../../contexts/user';
import { clientId } from '../../config/oauth';

const Logout = () => {
	let history = useHistory();
	let { user, setUser } = useUserContext();

	let logoutHandler = () => {
		setUser(null);
		localStorage.removeItem("user");
		history.push("/login");
	}

	let { signOut } = useGoogleLogout({
		clientId,
		onLogoutSuccess: logoutHandler,
		onFailure: logoutHandler,
	});

	if (!user) {
		history.push("/login");
		return <></>;
	} else {
		signOut();
		return <></>;
	}
}

export default Logout;
