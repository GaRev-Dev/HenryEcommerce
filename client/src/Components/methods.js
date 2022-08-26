/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import imgProductErr from "../Assets/Images/mountain-icon.png";
import axios from "axios";

export function setImgError(e, img) {
  if (!img) return;
  e.target.src = img;
}

export function setImgProductErr(e) {
  setImgError(
    e,
    "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1"
  );
}

export function setImgProductHomeErr(e) {
  setImgError(
    e,
    "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1"
  );
}

export function setImgUserErr(e) {
  setImgError(e, imgProductErr);
}

export function isLogged() {
  const { isAuthenticated } = useAuth0();

  // prevenir doble redirect (auth0)
  if (isAuthenticated) {
    return true;
  }

  const isSession = useSelector((state) => state.loginState);

  if (!isSession || !isSession.token) {
    return undefined;
  }
  return isSession;
}

export function isLoggedAdmin() {
  const isSession = isLogged();
  if (!isSession) {
    return undefined;
  }

  return isSession.role === "admin";
}

export function isLoggedAdminEmployee() {
  const isSession = isLogged();
  if (!isSession) {
    return undefined;
  }

  return isSession.role !== "customer";
}

export async function postImageToCloudinary(e) {
  try {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "eo1vcv2i");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dc8w6pspj/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const userImage = await res.json();
    const imgUri = userImage.secure_url;

    return imgUri;
  } catch (error) {
    return undefined;
  }
}

export async function updateModelImg(modelName, token, imgUri, id) {
  await axios.put(
    `${modelName}/${id}`,
    { imgUri },
    {
      headers: {
        "auth-token": token,
      },
    }
  );
}

export async function postAndUpdateImg(e, modelName, token, id) {
  const imgUri = await postImageToCloudinary(e);
  updateModelImg(modelName, token, imgUri, id);
  return imgUri;
}
