import User from "./Model_User.js"

export const CreateUser = async (req,res) => {
    try {
        const body = req.body
        await User.create(body)
        return res.json({ msg: "success" });
    } catch (error) {
        return res.json({ msg: "gagal membuat" });
    }
}

