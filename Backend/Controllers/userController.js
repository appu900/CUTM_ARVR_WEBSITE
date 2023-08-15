const User = require("../Modals/UserModals");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { config } = require("dotenv");

exports.signup = async (request, response, next) => {
  try {
    const { username, email, phoneNumber, password } = request.body;
    const checkExistingUser = await User.findOne({ email });

    if (checkExistingUser) {
      return response.status(400).json({ message: "user already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name: username,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
    });

    const savedUser = await newUser.save();
    return response.json({
      message: "registration done",
      savedUser,
    });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

exports.signin = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    // console.log(request.body)
    let existingUser = await User.findOne({ email });

    if (!existingUser) {
      return response
        .status(400)
        .json({ message: "user not found sign up first" });
    }

    const checkValidPassword = await bcryptjs.compare(
      password,
      existingUser.password
    );
    if (!checkValidPassword) {
      return response.status(400).json({ message: "wrong password" });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.Jwt_key, {
      expiresIn: "1h",
    });

    response.cookie(String(existingUser._id), token, {
      path: "/",
      maxAge: 3600000,
      // expires:new Date(Date.now() + 1000 * 30),
      httpOnly: true,
      sameSite: "lax",
    });

    return response
      .status(200)
      .json({ mesaage: "signin done", existingUser, token });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

exports.verifyToken = (request, response, next) => {
  const cookies = request.headers.cookie;
  //  console.log(cookies)
  const token = cookies.split("=")[1];
  console.log(token);
  if (!token) {
    return response.status(404).json({ message: "no token found" });
  }

  jwt.verify(String(token), process.env.Jwt_key, (error, user) => {
    if (error) {
      return response.status(400).json({ message: "invalid token" });
    }
    console.log(user.id);
    request.id = user.id;
  });

  next();
};

exports.getUser = async (request, response, next) => {
  const userId = request.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (error) {
    return new Error(error);
  }

  if (!user) {
    return response.status(404).json({ message: "user not found" });
  }

  return response.status(200).json({ user });
};




