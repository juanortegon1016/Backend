import { request, response } from "express";
import { userModel } from "../models/userModel.js";
import { enviarEmail } from "../helpers/SendMail.js";
import bcrypt from "bcrypt";
import { generarJWT } from "../helpers/JWT.js";

const getUser = (request, response) => {
  response.send("._.");
};

const createUser = async (req = request, res = response) => {
  const { name, email, user, pass } = req.body;

  try {
    const newUser = new userModel({ name, email, user, pass });
    const salt = bcrypt.genSaltSync();
    newUser.pass = bcrypt.hashSync(pass, salt);
    await newUser.save();
    await enviarEmail(newUser);
    return res.json({ msg: newUser });

  } catch (error) {

    console.log(error);
    res.status(502).json({ msg: "..." });
  }
};

const loginUsuario = async (req, res = express.request) => {
  const { user, pass } = req.body;

  try {
    let usuario = await userModel.findOne({ user: user });
    if (!usuario) {

      return res.status(400).json({
        ok: false,
        msg: "Usuario inexistente en la db",
      });
    }

    const passwordValid = bcrypt.compareSync(pass, usuario.pass);
    if (!passwordValid) {

      return res.status(400).json({
        ok: false,
        msg: "Contra no valida",
      });
    }

    const token = await generarJWT(usuario.id, usuario.name);

    res.status(200).json({
      ok: true, usuario, token
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

const revalidarToken = async (req, res = express.request) => {
  const { uid, name } = req;

  const token = await generarJWT(uid, name);

  res.json({
    ok: true,
  });
};

const actualizarPhoto = async (req, res = express.request) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id).populate("user", "_id");

    if (!user) {
      return res.status(404).json({
        ok: false,
        task: "No hay usuarios en la DB",
      });
    }

    if (user.user.id !== req.uid) {
      return res.status(403).json({
        ok: false,
        msg: "Error",
      });
    }

    const { urlPhoto } = req.body;
    const updatedPhoto = await userModel.findByIdAndUpdate(
      id,
      { urlPhoto },
      { new: true }
    );

    res.json({
      ok: true,
      updatedTask: updatedPhoto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      task: "Internal Error",
    });
  }
};
export { getUser, createUser, loginUsuario, revalidarToken, actualizarPhoto };
