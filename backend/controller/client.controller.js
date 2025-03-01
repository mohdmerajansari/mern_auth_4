import Client from "../model/client.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const clientSignup = async (req, res) => {
  const client = req.body;
  if(!client.name || !client.email || !client.password) {
    return res.status(400).json({success: false, message: "All fields are required"});
  }
  const clientDetails =  await Client.findOne({email: client.email});
  if(clientDetails) {
    return res.status(400).json({success: false, message: "Email already exists"});
  }
  client.password = await bcrypt.hash(client.password, 10);

  const newCient = Client(client);
  try {
    await newCient.save();
    res.status(200).json({success: true, data: newCient});
  } catch (error) {
    res.status(500).json({success: false, message: "Server side error!"});
  }
};

export const clientLogin = async (req, res) => {
  const client = req.body;
  if(!client.email || !client.password) {
    return res.status(400).json({success: false, message: "All fields are required"});
  }
  const clientDetails =  await Client.findOne({email: client.email});
  if(!clientDetails) {
    return res.status(400).json({success: false, message: "Email already exists"});
  }
  const isPassEqual = await bcrypt.compare(client.password, clientDetails.password);
  if(!isPassEqual) {
    return res.status(400).json({success: false, message: "Invalid credentials"});
  }
  const jwtToken = jwt.sign({email: clientDetails.email, id: clientDetails._id},process.env.JWT_SECRET,{expiresIn:'24h'})
  try {
    res.status(200).json({success: true, message: "Login successful!", jwtToken, Email:client.email, Name:clientDetails.name});
  } catch (error) {
    res.status(500).json({success: false, message: "Server side error!"});
  }
};