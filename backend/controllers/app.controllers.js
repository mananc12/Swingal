const User = require("../modles/user.model");
const Contact = require("../modles/contact.model");

//home route logic
async function home(req, res, next) {
  try {
    res.status(200).json("Success");
  } catch (error) {
    // console.log(error);
    // res.status(500).json({ message: "Server Error" });
    next(error);
  }
}

// -------------------------------------------------------------------------------------------------------
//login route logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      const matchPassword = await isUserExist.isPasswordCorrect(password);

      if (matchPassword) {
        const token = await isUserExist.generateToken();
        // console.log(User.find({ email }));
        // console.log(isUserExist.firstName);
        return res.status(200).json({
          message: `Login Successful!, Welcome ${isUserExist.firstName}`,
          token,
          userFirstName: isUserExist.firstName,
          userID: isUserExist._id.toString(),
        });
      } else {
        return res.status(401).json({ message: "Incorrect Password!" });
      }
    } else {
      return res
        .status(404)
        .json({ message: "User not found. Register first!" });
    }
  } catch (error) {
    // console.error(error);
    // res.status(500).json({ message: "Error in server" });
    next(error);
  }
};

// ----------------------------------------------------------------------------------------------------------
//register route logic
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, confirmPassword } =
      req.body;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({ message: "User already registered!" });
    } else {
      if (password === confirmPassword) {
        const userCreate = await User.create({
          firstName,
          lastName,
          phone,
          email,
          password,
        });
        res.status(200).json({
          message: `Registration Successful, Welcome ${firstName}`,
          token: await userCreate.generateToken(),
          userFirstName: firstName,
          userId: userCreate._id,
        });
      } else {
        return res.status(400).json({ message: "Passwords mismatched" });
      }
    }
  } catch (error) {
    // res.status(500).json("Server Error");
    console.log(error);
    next(error);
  }
};

//------------------------------------------------------------------------------------------------------
//contact page logic
const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(req.body);
    const contactPerson = await Contact.create({ name, email, message });

    console.log(contactPerson);
    res.status(200).json({ message: "Message Sent", contactPerson });
  } catch (error) {
    next(error);
  }
};

//---------------------------------------------------------------------------------------------------------
//user details page
const userDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const findUser = await User.findOne({ _id: userId });
    // console.log(findUser, userId);
    res.status(200).json({ message: "User data fetched", findUser });
  } catch (error) {
    console.log(error);
  }
};

const userUpdate = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({ message: "User data updated", updatedUser });
    // res.status(200).json({ message: "User data updated", data });
  } catch (error) {
    console.log(error);
  }
};

// ------------------------------------------------------------------------------------------------------------
//exporting
module.exports = { home, login, register, contact, userDetails, userUpdate };
