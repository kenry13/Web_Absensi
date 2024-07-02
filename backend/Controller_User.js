import { body } from "express-validator";
import User from "./Model_User.js";
import { checkValidate } from "./function.js";

export const ValidateUser = [
  body("username").notEmpty().withMessage("nama kosong"),
  body("nfc_tag").notEmpty().withMessage("tag kosong"),
  checkValidate,
];

export const CreateUser = async (req, res) => {
  try {
    const body = req.body;
    await User.create(body);
    return res.json({ msg: "success" });
  } catch (error) {
    return res.json({ msg: "gagal membuat" });
  }
};

export const DeleteUser = async (req, res) => {
  try {
    const idUser = req.params.id_user;
    const response = await User.destroy({
      where: {
        id_user: idUser,
      },
    });

    if (response === 1) {
      res.json("Deleted Successfully");
    } else {
      res.status(404).json({ message: "user tidak ada" });
    }
  } catch (error) {
    return res.json({ msg: "gagal menghapus" });
  }
};
