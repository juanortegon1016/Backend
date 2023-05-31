import { userModel } from "../models/userModel.js";

const emailExiste = async (email = "") => {
  let usuario = await userModel.findOne({ email: email });
  if (usuario) {
    throw new Error(`Correo ya esta registrado`);
  }
};

export { emailExiste };
