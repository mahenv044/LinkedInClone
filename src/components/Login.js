import { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from '../features/counter/userSlice';
import { useEffect } from 'react';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [mail, setMail] = useState('');
    const [pswd, setPswd] = useState('');
    const [cnfPswd, setCnfPswd] = useState('');

    const [newUser, setNewUser] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //   const uid = user.uid;
                dispatch(logIn({
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid
                }))
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(logOut())
            }
        });
    }, []);

    const loginHandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, mail, pswd)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...
                dispatch(logIn({
                    email: userCredential.user.email,
                    displayName: userCredential.user.displayName,
                    uid: userCredential.user.uid
                }))

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage+" "+errorCode);
            });
    }
    const registerHandler = (e) => {
        e.preventDefault();
        console.log(" userName ", userName, mail, pswd, cnfPswd);
        if (pswd !== cnfPswd) {
            return alert("Passwords do not match")
        }
        else {
            createUserWithEmailAndPassword(auth, mail, pswd)
                .then((userCredential) => {
                    // Signed in 
                    console.log(userCredential.user.displayName);
                    //   const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: userName
                    })
                        .then(() => {
                            console.log(30, userCredential.user);
                            dispatch(logIn({
                                email: userCredential.user.email,
                                displayName: userCredential.user.displayName,
                                uid: userCredential.user.uid
                            }))
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                    // ...
                })
                .catch((error) => { 
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                });

        }
    }

    const toggleLogin = () => {
        setNewUser(!newUser);

    }
    return <>
        <h1>{newUser ? "Register" : "Login"}</h1>

        <div className="login">
            <form action="">

                {newUser && <div className="display_flex">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="UserName" />
                </div>}
                <div className="display_flex">
                    <label>Email</label>
                    <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Email" />
                </div>
                <div className="display_flex">
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => setPswd(e.target.value)} value={pswd} />
                </div>
                {newUser && <div className="display_flex">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => setCnfPswd(e.target.value)} value={cnfPswd} />
                </div>}
                <button type="submit" className="login_button" onClick={newUser ? registerHandler : loginHandler}>{newUser ? "Sign Up" : "Sign In"}</button>
            </form>
            <div className="register">
            {!newUser && <span>New to LinkedIn ? <strong className="register_link" onClick={toggleLogin}>Join Now</strong></span>}
                {newUser && <span>Existing User ? <strong className="register_link" onClick={toggleLogin}>SignIn</strong></span>}
            </div>
        </div>
    </>
}
export default Login;