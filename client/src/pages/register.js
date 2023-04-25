import React, { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../context/GlobalState";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import storage from "../firebaseConfig";

function register() {
  const [state, dispatch] = useGlobalState();
  const router = useRouter();
  const [pic, setPic] = useState(null);
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    if (user.image !== "") {
      AuthService.register(user);
      dispatch({
        currentUserToken: state.currentUserToken,
        currentUser: state.currentUser?.user_id,
      });
      router.push("/");
    }
  }, [user.image]);

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  async function handleRegister(e) {
    e.preventDefault();
    const storageRef = ref(storage, `/files/${pic.name}`);
    await uploadBytes(storageRef, pic).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        handleChange("image", url);
      });
    });
  }

  return (
    <div className="w-screen h-screen">
      <div className="flex">
        <form className="mx-auto border-2 bg-mtgray" onSubmit={handleRegister}>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="border"
              type="text"
              id="firstName"
              required
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="border"
              type="text"
              id="lastName"
              required
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="email">Email:</label>
            <input
              className="border"
              type="text"
              id="email"
              required
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="image">Image:</label>
            <input
              className="border"
              type="file"
              accept="image/*"
              id="image"
              required
              onChange={(e) => setPic(e.target.files[0])}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="password">Password:</label>
            <input
              className="border"
              type="text"
              id="password"
              required
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="passwordConf">Confirm Password:</label>
            <input
              className="border"
              type="text"
              id="passwordConf"
              required
              onChange={(e) => handleChange("passwordConf", e.target.value)}
            />
          </div>
          <div className="flex">
            <input
              type="submit"
              value="Register!"
              className="bg-mtpurple text-white py-2 px-4 rounded-lg mx-auto my-2 font-bold disabled:opacity-60"
              disabled={
                user.password &&
                user.password.length >= 8 &&
                user.password === user.passwordConf &&
                user.firstName &&
                user.lastName &&
                user.email
                  ? false
                  : true
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default register;
